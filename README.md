
# 🎓 Student Management API

A simple RESTful API built using Node.js, Express, and MongoDB Atlas to manage student records. This project demonstrates basic CRUD operations and serves as a foundation for building advanced backend systems.

---

## 🚀 Features

* Create a new student
* Get all students
* Get student by ID
* Update student details
* Delete student
* MongoDB Atlas cloud database integration
* Environment variable configuration

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* dotenv

---

## 📁 Project Structure

```
student-api/
│
├── models/
│   └── Student.js
│
├── server.js
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/your-username/student-api.git
cd student-api
```

---

### 2. Install dependencies

```
npm install
```

---

### 3. Setup environment variables

Create a `.env` file in the root directory and add:

```
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
```

---

### 4. Start the server

```
node server.js
```

Server will run at:

```
http://localhost:5000
```

---

## 📡 API Endpoints

### 🔹 Create Student

```
POST /students
```

### 🔹 Get All Students

```
GET /students
```

### 🔹 Get Student by ID

```
GET /students/:id
```

### 🔹 Update Student

```
PUT /students/:id
```

### 🔹 Delete Student

```
DELETE /students/:id
```

---

## 🧪 Testing the API

You can test the API using:

* Postman
* VS Code REST Client
* curl

Example request:

```
POST /students
Content-Type: application/json

{
  "name": "Aneesh",
  "age": 21,
  "course": "CSE",
  "marks": 90
}
```

---

## 📌 Future Improvements

* Add validation (Joi / express-validator)
* Implement JWT authentication
* Add pagination & filtering
* Role-based access control
* MVC architecture
* API documentation (Swagger)

---


## ⭐ Notes

This project is a beginner-friendly backend API and serves as a stepping stone toward building production-level applications.
