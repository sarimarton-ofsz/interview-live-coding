# Task 3: REST API és Frontend Integráció

## Feladat leírása

Készíts egy egyszerű alkalmazást, amely egy REST API-t és egy hozzá kapcsolódó frontend felületet tartalmaz. Az alkalmazás felhasználók kezelését valósítja meg.

## Követelmények

### Backend (Node.js + Express):

1. **REST API végpontok:**
   - `GET /api/users` - Összes felhasználó lekérdezése
   - `GET /api/users/:id` - Egy felhasználó lekérdezése
   - `POST /api/users` - Új felhasználó létrehozása
   - `PUT /api/users/:id` - Felhasználó módosítása  
   - `DELETE /api/users/:id` - Felhasználó törlése

2. **Adatmodell:**
   ```javascript
   {
     id: string,
     name: string,
     email: string,
     role: 'admin' | 'user',
     createdAt: Date
   }
   ```

3. **Validáció:**
   - Email formátum ellenőrzése
   - Kötelező mezők ellenőrzése
   - Hibakezelés

### Frontend (React):

1. **Funkciók:**
   - Felhasználók listázása táblázatban
   - Új felhasználó hozzáadása form-mal
   - Felhasználó szerkesztése
   - Felhasználó törlése
   - Keresés név vagy email alapján

2. **UI elemek:**
   - Táblázat a felhasználóknak
   - Modal/form új felhasználó hozzáadásához
   - Szerkesztés és törlés gombok
   - Keresőmező

## Technológiák

- Backend: Node.js, Express
- Frontend: React, Vite
- Adattárolás: In-memory (array) vagy JSON fájl
- HTTP kérések: fetch vagy axios

## Példa API válaszok

### GET /api/users
```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "name": "Kiss János",
      "email": "janos@example.com",
      "role": "admin",
      "createdAt": "2024-01-15T10:30:00Z"
    }
  ]
}
```

### POST /api/users
```json
{
  "name": "Nagy Péter",
  "email": "peter@example.com",
  "role": "user"
}
```

## Indítás

Backend:
```bash
cd task3-ai-allowed/backend
npm install
npm run dev
```

Frontend:
```bash
cd task3-ai-allowed/frontend
npm install
npm run dev
```

## Tippek

- Használd a `claude` parancsot a terminalban segítségért
- CORS beállítása szükséges lehet a backend-en
- Környezeti változók használata ajánlott (PORT, API_URL)
- Error boundary implementálása a frontend-en hasznos lehet

## Értékelési szempontok

- API végpontok megfelelő működése
- Frontend-backend kommunikáció
- Hibakezelés
- Kód struktúra és tisztaság
- UI/UX megvalósítás

## Időkeret
45 perc

## Fontos
**AI eszközök használata MEGENGEDETT és ajánlott ebben a feladatban!**
Használd a `claude` parancsot a terminalban.