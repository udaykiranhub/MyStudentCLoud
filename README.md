
# 🎓 Student Portfolio MERN Application

A simple **MERN stack application** where students can create portfolios, interact, communicate, and share their ideas with others.

## 🚀 Features
- Student registration & login  
- Create and manage student portfolios  
- Share ideas and interact with peers  
- Responsive UI with React + Bootstrap  
- Image uploads with **Multer + Cloudinary**  
- MongoDB integration for storing student data  

## 🛠️ Tech Stack
- **Frontend:** React, React Router, Bootstrap, Styled Components  
- **Backend:** Node.js, Express.js, MongoDB, Mongoose  
- **Image Storage:** Cloudinary  
- **Authentication & Cookies:** js-cookie, dotenv  
- **Other Tools:** Multer, CORS, Nodemon  

## 📂 Project Setup

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd <project-folder>
````

### 2. Install dependencies

#### Backend

```bash
cd server   # or your backend folder
npm install
```

#### Frontend

```bash
cd client
npm install
```

### 3. Environment Variables

Create a `.env` file in the backend with the following:

```env
MONGO_URI=your_mongodb_connection
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PORT=5000
```

### 4. Run the project

#### Backend

```bash
npm start
```

#### Frontend

```bash
npm start
```

Frontend will run on **[http://localhost:3000](http://localhost:3000)**
Backend will run on **[http://localhost:5000](http://localhost:5000)**

---

## 📖 About

This project is a **student collaboration platform** where users can build their portfolios and share ideas with other students.

---

