# Inventory Management App

A simple inventory management application built with Node.js and React.js. This app allows users to add items to their inventory, filter through them, and remove items as needed.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Add New Items**: Users can add new items to their inventory.
- **Filter Items**: Users can filter items in the inventory using a search bar.
- **Remove Items**: Users can remove items or decrease their quantity from the inventory.
- **Real-Time Updates**: The inventory list updates in real-time as items are added or removed.

## Technologies Used

- **Frontend**: React.js, Material-UI
- **Backend**: Node.js (if applicable)
- **Database**: Firebase Firestore
- **Others**: Firebase Authentication (if used)

## Installation

### Prerequisites

- Node.js and npm installed on your machine.

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd your-repo
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Set Up Firebase**

   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Add Firebase credentials (API keys, project ID, etc.) to your project configuration.
   - Follow Firebase's instructions to configure Firestore and Authentication (if needed).

5. **Start the Application**

   ```bash
   npm run dev
   ```

   Open your browser and go to `http://localhost:3000` to see the application in action.

## Usage

- **Add New Item**: Click the "Add New Item" button to open a modal where you can enter the item name and add it to the inventory.
- **Filter Items**: Use the search bar to filter items by name.
- **Remove Items**: Click "Remove" next to an item to decrease its quantity or remove it completely from the inventory.
- **More features to be added soon!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
