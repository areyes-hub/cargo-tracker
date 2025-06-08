# cargo-tracker

A full-stack cargo warehouse inventory management system that enables real-time check-in/check-out of cargo, role-based access control, and dashboard visibility for warehouse operations.

---

## 📦 Project Overview

**Cargo Tracker** is designed to digitize and streamline the process of tracking cargo within a warehouse. Built as a solo MVP for a software development course, it showcases a complete implementation of frontend, backend, and database integration using modern web technologies.

### 🔧 Core Features

- Cargo check-in/check-out
- Real-time inventory dashboard
- Search/filter by ID, status, or location
- Role-based login system (admin/staff)
- MongoDB-based data storage
- Token-based authentication (JWT)
- Frontend built with React + TypeScript
- Backend powered by Node.js + Express

---

## 🧱 Tech Stack

| Layer       | Technology              |
|-------------|--------------------------|
| Frontend    | React + TypeScript       |
| Backend     | Node.js + Express        |
| Database    | MongoDB (via Mongoose)   |
| Auth        | JSON Web Tokens (JWT)    |
| Testing     | Vitest (frontend)        |
| Dev Server  | Vite (frontend)          |

---

## 🗂️ Project Structure

```
cargo-tracker/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.ts
│   ├── .env
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── __tests__/
│   │   └── App.tsx
│   ├── tsconfig.json
│   └── package.json
├── README.md
└── .gitignore
```

---

## 🚀 Setup Instructions

### ⚙ Backend Setup

1. Navigate to backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```
   MONGO_URI=mongodb://localhost:27017/cargotracker
   JWT_SECRET=your_jwt_secret
   ```

4. Run the backend server:
   ```bash
   npm run dev
   ```

---

### 🌐 Frontend Setup

1. Navigate to frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

---

## 🔒 User Roles

- **Admin**
  - Can view inventory reports
  - Access full dashboard
- **Staff**
  - Can check-in and check-out cargo

---

## 🧪 Testing

Run frontend tests:

```bash
cd frontend
npm run test
```

---

## 🤝 Contributing

This MVP is part of a solo course project and not currently open to contributions. However, feedback and suggestions are welcome!

---

## 📜 License

MIT License. © 2025 Angel Reyes Segarra

---

## 🧠 Future Improvements

- Export inventory data to CSV/PDF
- Add barcode scanning integration
- Implement multi-warehouse support
- Add mobile-friendly UI

## Author

Angel Reyes
