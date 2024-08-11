"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { firestore } from "@/firebase";
import {
  Box,
  Typography,
  Modal,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  deleteDoc,
  setDoc,
  query,
} from "firebase/firestore"; // Ensure all required imports

export default function Home() {
  // Correct state initialization
  const [inventory, setInventory] = useState([]);
  const [open, setOpen] = useState(false);
  const [itemName, setItemName] = useState("");

  //update from firebase
  const updateInventory = async () => {
    //not freexing screen while fetching data
    const snapshot = query(collection(firestore, "inventory")); //fetching inventory collection
    const docs = await getDocs(snapshot);
    const inventoryList = [];
    docs.forEach((doc) => {
      inventoryList.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    setInventory(inventoryList);
  };

  //remove items function
  const removeItem = async (item) => {
    const docRef = doc(collection(firestore, "inventory"), item);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { quantity } = docSnap.data();
      if (quantity === 1) {
        await deleteDoc(docRef);
      } else {
        //might wanna add an error message here too.
        await setDoc(docRef, { quantity: quantity - 1 });
      }
    }
    await updateInventory();
  };

  const addItem = async (item) => {
    const docRef = doc(collection(firestore, "inventory"), item);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { quantity } = docSnap.data();
      await setDoc(docRef, { quantity: quantity + 1 });
    } else {
      await setDoc(docRef, { quantity: 1 });
    }
    await updateInventory();
  };

  //runs once when page loads
  useEffect(() => {
    updateInventory();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={2}
    >
      <Modal open={open} onClose={handleClose}>
        <Box
          position="absolute"
          top="50%"
          left="50%"
          width={400}
          bgcolor="white"
          border="2px solid #000"
          boxShadow={24}
          p={4}
          display="flex"
          flexDirection="column"
          gap={3}
          sx={{
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography variant="h6"> Add Item</Typography>
          <Stack width="100%" direction="row" spacing={2}>
            <TextField
              variant="outlined"
              fullWidth
              value={itemName}
              onChange={(e) => {
                setItemName(e.target.value);
              }}
            />
            <Button
              variant="outlined"
              onClick={() => {
                addItem(itemName);
                setItemName("");
                handleClose();
              }}
            >
              Add
            </Button>
          </Stack>
        </Box>
      </Modal>
      <Button
        variant="contained"
        onClick={() => {
          handleOpen();
        }}
      >
        Add New Item
      </Button>
      <Box border="1px solid #333">
        <Box
          width="800px"
          height="100px"
          bgcolor="#ADD8E6"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h2" color="#333">
            Inventory Items
          </Typography>
        </Box>
      <Stack width="800px" height="300px" spacing={2} overflow="auto">
        {inventory.map(({ id, quantity }) => (
          <Box
            key={id}
            width="100%"
            minHeight="150px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            bgColor="#f0f0f0"
            padding={5}
          >
            <Typography variant="h3" color="#333" textAlign="center">
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Typography>
            <Typography variant="h3" color="#333" textAlign="center">
              {quantity}
            </Typography>
            <Stack direction = "row" spacing = {2}>
            <Button variant = "contained" onClick = {()=>{
              addItem(id)
            }}>Add</Button>
            <Button variant = "contained" onClick = {()=>{
              removeItem(id)
            }}>Remove</Button>
            </Stack>
          </Box>
        ))}
      </Stack>
      </Box>
    </Box>
  );
}
