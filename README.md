 # Grievance Portal - User Interface

## Description
This is the user interface for the Grievance Portal. Users can submit grievances, attach supporting files, and track the status of their grievances.

## Features
- User-friendly grievance submission form.
- File upload with type validation (JPG, JPEG, PNG).
- Email notifications with ticket details.
- Chatbot with  predefined answers.
- Option to change view to card or table
- Real-time status updates on submitted grievances.
- Mobile-responsive design.

---

## Technologies Used
- **React.js**: Frontend framework for building the UI.
- **React Router**: For routing and navigation.
- **Axios**: To make HTTP requests to the backend.
- **Bootstrap**: For responsive design and styling.
- **react-simple-chatbot**: For creating chatbot.
- **socket.io-client**: For realtime update from admin dashboard.

---

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone  https://github.com/AlbinJames56/grievance-hero.git
   cd GrievanceUser
   npm install
   npm run dev

Folder Structure
superherouser/
├── public/              # Public assets (index.html, favicon, etc.)
├── src/
│   ├── components/      # Reusable components (e.g., Navbar, Footer)
│   ├── pages/           # Page components (Home, Login, SubmitGrievance)
│   ├── utils/           # Utility functions
│   ├── App.js           # Main app component
│   └── index.js         # Entry point
