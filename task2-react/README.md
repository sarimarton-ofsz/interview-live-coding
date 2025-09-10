# Task 2: Todo Lista Alkalmazás

## Feladat leírása

Készíts egy egyszerű Todo lista alkalmazást React használatával!

## Követelmények

### Funkcionális követelmények:

1. **Todo hozzáadása**: Input mező és gomb új todo elem hozzáadásához
2. **Todo lista megjelenítése**: Az összes todo elem listázása
3. **Todo státusz váltás**: Checkbox minden todo mellett a befejezettség jelöléséhez
4. **Todo törlése**: Törlés gomb minden todo elem mellett
5. **Szűrés**: Három szűrő gomb:
   - Mind (összes todo)
   - Aktív (nem befejezett)
   - Befejezett

### Technikai követelmények:

- React hooks használata (useState, useEffect ha szükséges)
- Komponens alapú architektúra
- Tiszta, olvasható kód
- Alapvető CSS styling

## Kezdő fájlok

- `App.jsx` - Fő alkalmazás komponens
- `App.css` - Stílusok
- `index.html` - HTML template

## Példa felület

```
┌─────────────────────────────────────────┐
│         Todo Lista Alkalmazás           │
├─────────────────────────────────────────┤
│                                         │
│  [Input mező] [Hozzáadás]              │
│                                         │
│  ☐ Bevásárlás                    [×]   │
│  ☑ Email megválaszolása          [×]   │
│  ☐ Kód review                    [×]   │
│                                         │
│  [Mind] [Aktív] [Befejezett]           │
│                                         │
└─────────────────────────────────────────┘
```

## Tesztelés

Indítsd el a fejlesztői szervert:
```bash
npm run dev:task2
```

## Időkeret
45 perc

## Fontos
**AI eszközök használata szigorúan tilos ebben a feladatban!**