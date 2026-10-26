# React + Raw Node.js Integration

**Course:** CED-329 Advanced Web Engineering
**Lab:** 12 - Exploring Node.js Framework

## Overview

This project shows how a React frontend communicates with a backend built using only Node.js's built-in `http` module (no Express). The backend exposes a REST endpoint that returns JSON, and the React app fetches and displays it.

## Objectives

- Create an HTTP server using the raw Node.js `http` module
- Handle GET requests and return JSON responses
- Enable CORS so the frontend can call the backend
- Fetch backend data in React using `useEffect` and store it with `useState`

## Tech Stack

- **Backend:** Node.js (`http` module)
- **Frontend:** React (Create React App), React Hooks

## Project Structure

```
react-node-lab
├── backend
│   └── server.js        # Raw Node.js HTTP server
├── frontend             # React app (Create React App)
│   └── src
│       └── App.js       # Fetches and displays backend data
└── README.md
```

## API Endpoint

| Method | Route       | Response                                              |
| ------ | ----------- | ----------------------------------------------------- |
| GET    | `/api/info` | `{ "info": "React is communicating with Node.js" }`   |

Any other route returns `404 Not Found`.

## How It Works

1. The Node.js server listens on **port 5000** and sets CORS headers (`Access-Control-Allow-Origin`) on every response.
2. The React app (on **port 3000**) calls `http://localhost:5000/api/info` inside `useEffect` when the component first loads.
3. The JSON response is saved in state with `useState` and rendered on the page.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later) and npm

### 1. Start the backend

```bash
node backend/server.js
```

Expected output: `Server is running on http://localhost:5000`

### 2. Start the frontend (in a second terminal)

```bash
cd frontend
npm install
npm start
```

### 3. View the app

- React app: http://localhost:3000
- Raw API response: http://localhost:5000/api/info

You should see: **Message from backend: React is communicating with Node.js**

## Screenshots

Add your screenshots to a `screenshots/` folder and link them here:

- Backend terminal running the server: `screenshots/backend.png`
- React app displaying the fetched message: `screenshots/frontend.png`

## Troubleshooting

| Problem                    | Fix                                                                 |
| -------------------------- | ------------------------------------------------------------------- |
| CORS error in console      | Make sure the backend sets CORS headers, then restart it            |
| `EADDRINUSE` on port 5000  | Another process uses the port; stop it or change the port           |
| "Failed to fetch"          | The backend is not running                                          |
| Message is empty           | The fetch URL and backend route don't match (`/api/info`)           |
