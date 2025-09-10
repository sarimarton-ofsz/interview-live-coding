const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory adattárolás
let users = [
  {
    id: '1',
    name: 'Példa Felhasználó',
    email: 'pelda@example.com',
    role: 'admin',
    createdAt: new Date().toISOString()
  }
];

// TODO: Implementáld a REST API végpontokat

// GET /api/users - Összes felhasználó

// GET /api/users/:id - Egy felhasználó

// POST /api/users - Új felhasználó

// PUT /api/users/:id - Felhasználó módosítása

// DELETE /api/users/:id - Felhasználó törlése

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});