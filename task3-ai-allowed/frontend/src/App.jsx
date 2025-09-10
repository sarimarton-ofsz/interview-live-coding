import { useState, useEffect } from 'react';
import './App.css';

const API_URL = 'http://localhost:3002/api';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // TODO: Implementáld a felhasználó kezelő alkalmazást
  // - Felhasználók lekérdezése
  // - Új felhasználó hozzáadása
  // - Felhasználó szerkesztése
  // - Felhasználó törlése
  // - Keresés funkció

  return (
    <div className="app">
      <h1>Felhasználó Kezelő</h1>
      
      {/* TODO: Keresőmező */}
      
      {/* TODO: Új felhasználó gomb */}
      
      {/* TODO: Felhasználók táblázat */}
      
      {/* TODO: Modal/Form új felhasználóhoz vagy szerkesztéshez */}
      
    </div>
  );
}

export default App;