🚀 Job Portal – Full Stack MERN Project

A scalable Job Portal Web Application built using the MERN Stack (MongoDB, Express, Node.js) with secure authentication and RESTful APIs.

This project demonstrates real-world backend architecture, authentication flow, and database integration.

🔥 Key Features
👤 User Registration & Login System
🔐 JWT Based Authentication
🧾 Password Encryption using Bcrypt
📡 RESTful API Architecture
🗄️ MongoDB Database Integration
⚡ Modular Backend Structure
🚀 Ready for Deployment (Render/Vercel)
🛠️ Tech Stack

Backend:

Node.js
Express.js
MongoDB
Mongoose
JWT
Bcrypt.js

Tools:

Git & GitHub
Postman
Render (Deployment)
📁 Project Structure
server/
│
├── models/
│   └── User.js
│
├── routes/
│   └── userRoutes.js
│
├── controllers/
│
├── index.js
│
└── config/
⚙️ Installation Guide
1️⃣ Clone Repository
git clone https://github.com/your-username/jobportal-fullstack.git
2️⃣ Install Dependencies
cd server
npm install
3️⃣ Setup Environment Variables

Create .env file:

MONGO_URL=your_mongodb_connection_string
JWT_SECRET=jobportal123
PORT=5000
4️⃣ Run Project
node index.js
🌐 Deployment
Platform	Status
Backend (Render)	✅ Live
Frontend (Vercel)	🔄 Optional
📌 API Endpoints
Auth Routes
POST /api/register → Register User
POST /api/login → Login User
Job Routes
GET /api/jobs → Get All Jobs
⚠️ Common Issues Fixed
❌ Module not found → Fixed import paths
❌ Nodemon error → Use node index.js on Render
❌ Case-sensitive file issue (User.js vs user.js)
❌ MongoDB connection errors
👨‍💻 Author

Sankalp Gupta
Full Stack Developer (MERN)

⭐ Project Goal

To build a production-ready job portal system with proper authentication, backend structure, and deployment workflow.
