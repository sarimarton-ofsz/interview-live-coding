# Task 3: TypeScript Migration Debug Challenge

## Feladat leírása

Van egy React alkalmazás ami tökéletesen működött JavaScript-ben. Valaki elkezdte TypeScript-re konvertálni, de most tele van cryptic hibákkal és nem indul el. A feladatod: debugold és javítsd ki!

## A probléma

**Előzmény:** Egy tapasztalt JavaScript fejlesztő írt egy működő React alkalmazást. Aztán valaki "segíteni" akart és elkezdte TypeScript-re konvertálni. Most:

1. **A build nem megy át** - TypeScript hibák tömkelege
2. **A hibaüzenetek félrevezetőek** - nem ott van a baj ahol a compiler mondja
3. **Több rétegű probléma** - ha megjavítasz egyet, új hibák jönnek elő
4. **Type inference csapdák** - a TypeScript rosszul következtet típusokra

## Az alkalmazás (ami működött JS-ben)

Egy egyszerű Dashboard komponens rendszer:
- **DataProvider**: Context API-val ad adatokat
- **Dashboard**: Főkomponens ami widgeteket renderel
- **Widget**: Generic komponens különböző típusú widgetekhez
- **useDataSource**: Custom hook adatlekéréshez

## Milyen hibákat fogsz találni?

1. **Generic type inference probléma** discriminated union-nal
2. **React.FC vs normál function component** typing konfliktus  
3. **Conditional types** edge case
4. **tsconfig.json** beállítások okozta rejtett hibák
5. **Type assertion** ami elfed egy mélyebb problémát

## Indítás

```bash
cd task3-ai-allowed/frontend
npm install
npm run type-check  # Ez fog rengeteg hibát dobni
```

## Időkeret
45 perc

## Fontos
**AI eszközök használata MEGENGEDETT és ajánlott ebben a feladatban!**
Használd a `claude` parancsot a terminalban.