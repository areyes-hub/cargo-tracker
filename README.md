# Cargo Tracker

Cargo Tracker is a full-stack inventory management system for tracking air cargo items through a warehouse. It features secure authentication, check-in/check-out functionality, search/filtering, and a clean, responsive UI built with Tailwind CSS.

## Features

- User authentication (JWT-based)
- Cargo check-in and check-out
- Real-time dashboard with filters (description, destination, status)
- Tailwind CSS styling
- MongoDB integration
- Protected API routes

## Tech Stack

- **Frontend:** React + TypeScript + Vite + Tailwind CSS
- **Backend:** Node.js + Express + TypeScript + MongoDB (Mongoose)
- **Authentication:** JSON Web Token (JWT)

---

## Prerequisites

- Node.js (v18 or later recommended)
- MongoDB running locally or with Atlas
- npm or yarn

---

## Project Structure

```
cargo-tracker/
├── backend/
│   ├── models/
│   │   └── Cargo.ts
│   ├── routes/
│   │   ├── auth.ts
│   │   └── cargo.ts
│   ├── middleware/
│   │   └── jwt.ts
│   ├── server.ts
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   ├── CheckIn.tsx
│   │   │   └── CheckOut.tsx
│   │   ├── components/
│   │   │   └── Navbar.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── index.html
│   ├── tailwind.config.js
│   └── postcss.config.js
```

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/areyes-hub/cargo-tracker.git
cd cargo-tracker
```

### 2. Install Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=mongodb://localhost:27017/cargo-tracker
JWT_SECRET=your-secret-key
```

Run the backend:

```bash
npm run dev
```

### 3. Install Frontend

```bash
cd ../frontend
npm install
```

Make sure Tailwind is compiled:

```bash
npx tailwindcss -i ./src/index.css -o ./src/output.css --watch
```

Run the frontend:

```bash
npm run dev
```

---

## Default Auth Endpoints

| Method | Endpoint           | Description         |
|--------|--------------------|---------------------|
| POST   | /api/auth/register | Register user       |
| POST   | /api/auth/login    | Authenticate user   |

---

## Main Pages

- `/login` - User login
- `/dashboard` - Inventory overview (with filters)
- `/checkin` - Register new cargo
- `/checkout` - Check out cargo by ID

---

## Notes

- Requires MongoDB running locally (`sudo systemctl start mongod` if installed via system package).
- Be sure to use JWT token in localStorage or requests will be denied on protected routes.
- Project uses absolute imports and `vite` dev server.

---

## Todo

- Filtering by description, destination, status
- Sorting by newest check-in
- Pagination
- Cargo categories
- User roles (admin/handler)

---

## License

MIT © Angel Reyes
