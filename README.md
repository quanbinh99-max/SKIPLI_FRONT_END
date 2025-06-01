Frontend - Phone Verification & GitHub User Search App
Overview
This is a React application that provides phone number verification via SMS and GitHub user search functionality. Users can authenticate using their phone number, search for GitHub users, and maintain a list of favorite profiles.
Features

Phone Verification: SMS-based authentication using access codes
GitHub User Search: Search and browse GitHub users with pagination
Profile Management: Like/favorite GitHub profiles and view them in user profile
Responsive Design: Clean and functional user interface

Technology Stack

React: Frontend framework (Created with Create React App)
Ant Design (antd): React UI library for components and styling
Local Storage: For storing authenticated user's phone number
Axios/Fetch: For API communication with backend
React Router (if applicable): For client-side routing

Project Structure
src/
├── components/
│ ├── api/
│ │ ├── auth.api.js # Authentication API calls
│ │ └── github.api.js # GitHub API integration
│ ├── Auth/
│ │ ├── AccessCodeForm.js # Access code input form
│ │ └── PhoneForm.js # Phone number input form
│ ├── Github/
│ │ ├── GithubCard.js # Individual GitHub user card
│ │ ├── GithubList.js # List of GitHub users
│ │ ├── GithubPagination.js # Pagination controls
│ │ └── SearchBar.js # Search input component
│ └── Layout/
│ ├── Navbar.js # Top navigation bar
│ └── ProfileModal.js # User profile modal
├── pages/
│ └── [route pages] # Page components
├── utils/
│ └── [utility functions] # Helper functions
├── App.js # Main application component
├── index.js # Application entry point
├── index.css # Global styles and Ant Design customization
├── .env # Environment variables
├── .env.example # Environment template
├── .gitignore # Git ignore rules
├── package-lock.json # Dependency lock file
├── package.json # Project dependencies
└── README.md # Project documentation
Prerequisites
Before running the application, ensure you have:

Node.js (v14 or higher)
npm or yarn package manager
Backend server running on localhost:8080

Installation

Clone the repository
git clone <repository-url>
cd frontend

Install dependencies
npm install
Main dependencies include:
npm install antd axios

Environment Configuration
Create a .env file in the root directory based on .env.example:
REACT_APP_API_BASE_URL=http://localhost:5000/api
REACT_APP_ENVIRONMENT=development

Available Scripts
npm start
Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.
npm test
Launches the test runner in interactive watch mode.
npm run build
Builds the app for production to the build folder.
npm run eject
