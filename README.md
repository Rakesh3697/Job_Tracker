
# 🧾 Job Tracker - MERN Stack Application

A full-stack Job Application Tracker built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to track their job applications with details like company name, job title, status, location, and application date.

---

## 🚀 Features

- 🔐 User authentication (Sign Up / Login)
- ➕ Add, Edit, and Delete job applications
- 🔍 Filter and sort by job status, company, location, or date
- 📤 Export applications (CSV or PDF)
- 🎨 Responsive UI with light/dark theme toggle
- 📊 Dashboard overview with status cards and stats
- 📁 Organized frontend and backend folder structure

---

## 🧱 Tech Stack

### Frontend
- React.js
- Context API
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv for environment configs
- Custom logging middleware

---

## 📂 Folder Structure
/MERN STACK
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middlewares/
│ ├── .env
│ └── server.js
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── context/
│ │ └── App.js
│ └── package.json


---

## 🛠️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/Rakesh3697/Job_Tracker_Mern.git
cd Job_Tracker_Mern
```
## Backend Setup

```bash
cd backend
npm install
# Create a `.env` file
touch .env
# Add the following to `.env`:
# MONGO_URI=<your-mongodb-connection>
# JWT_SECRET=<your-secret-key>
# PORT=5000
npm start
```

## Frontend Setup
```bash
cd ../frontend
npm install
npm start
```
##🔐 Environment Variables
In the backend/.env file, add:

```bash
MONGO_URI=your_mongodb_connection_string
```
```bash
JWT_SECRET=your_secret_key
PORT=5000
```

🧑‍💻 Author
Rakesh Rocky
GitHub | LinkedIn

