# 🚀 Reminder Notification System API

## 📌 Project Overview

This project is a backend system that allows users to create, manage, and receive notifications for reminders.
It demonstrates real-world backend concepts such as authentication, scheduling, and background processing.

---

## ⚙️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Node-Cron (Scheduler)

---

## 🔐 Features

### 1. User Authentication

* User Registration
* User Login
* JWT-based Authentication

### 2. Reminder Management

* Create Reminder
* Get All Reminders (User-specific)
* Get Reminder by ID
* Update Reminder
* Delete Reminder

### 3. Notification Scheduler

* Background cron job runs every minute
* Checks for due reminders
* Logs notification message
* Stores notification in database

### 4. Reminder Status

* Pending
* Completed
* Missed

### 5. Error Handling

* Proper validation
* HTTP status codes
* Secure routes with authentication middleware

---

## 📁 Project Structure

```
kicktern-backend-task-4/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── scheduler/
├── server.js
├── package.json
├── .gitignore
```

---

## 🔌 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register user |
| POST   | /api/auth/login    | Login user    |

---

### 🔔 Reminder Routes (Protected)

| Method | Endpoint                    | Description        |
| ------ | --------------------------- | ------------------ |
| POST   | /api/reminders              | Create reminder    |
| GET    | /api/reminders              | Get all reminders  |
| GET    | /api/reminders/:id          | Get reminder by ID |
| PUT    | /api/reminders/:id          | Update reminder    |
| DELETE | /api/reminders/:id          | Delete reminder    |
| PUT    | /api/reminders/complete/:id | Mark as completed  |

---

## 🔐 Authentication Flow

1. User logs in and receives a JWT token
2. Token is sent in Authorization header
3. Middleware verifies token
4. User ID is extracted and used for operations

---

## ⏰ Scheduler Logic

* Runs every minute using node-cron
* Fetches reminders where:

  * reminderTime <= current time
  * status = Pending
* Logs notification
* Saves notification to database
* Updates status to Missed

---

## 🛠️ How to Run

### 1. Clone Repository

```
git clone https://github.com/simhadriuttareni/KICKTERN-BACKEND-TASK-4.git
```

### 2. Install Dependencies

```
npm install
```

### 3. Create .env File

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/reminderDB
JWT_SECRET=your_secret_key
```

### 4. Run Server

```
npx nodemon server.js
```

---

## 🧪 API Testing

Use Postman to test APIs.

* Add Authorization Header:

```
Authorization: Bearer <your_token>
```

---

## 📊 Database Schema

### User

* name
* email
* password

### Reminder

* user
* title
* description
* reminderTime
* status

### Notification

* user
* reminder
* message
* sentAt

---

## 🚀 Future Enhancements

* Email notifications
* Push notifications
* Microservices architecture
* Kafka for event-driven processing
* Redis for caching

---

## 👨‍💻 Author

Simhadri Uttareni

---

## 📌 Conclusion

This project demonstrates backend engineering concepts including authentication, scheduling, and API design. It simulates real-world notification systems used in production applications.
