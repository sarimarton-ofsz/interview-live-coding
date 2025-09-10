# Task 1: Almost Palindrome Checker

## Feladat leírása

Implementálj egy függvényt, amely eldönti, hogy egy string palindrommá tehető-e maximum K karakter módosításával!

## Követelmények

1. Implementáld az `isAlmostPalindrome(s, k)` függvényt a `solution.js` fájlban
2. A függvény két paramétert kap:
   - `s`: a vizsgálandó string
   - `k`: maximum hány karakter módosítható
3. Térj vissza `true`-val ha palindrommá tehető K vagy kevesebb módosítással, egyébként `false`

## Példák

### Példa 1:
```javascript
isAlmostPalindrome("racecar", 0)
// Output: true (már palindrom)
```

### Példa 2:
```javascript
isAlmostPalindrome("abcdba", 1)  
// Output: true (középső 'd' → 'b' és palindrom lesz: "abcbba")
```

### Példa 3:
```javascript
isAlmostPalindrome("abcdef", 2)
// Output: false (minimum 3 módosítás kellene)
```

### Példa 4:
```javascript
isAlmostPalindrome("abc", 1)
// Output: true ('c' → 'a' és "aba" palindrom)
```

### Példa 5:
```javascript
isAlmostPalindrome("", 0)
// Output: true (üres string palindrom)
```

## Tesztelés

Futtasd a teszteket:
```bash
npm run test:task1
```

## Időkeret
30 perc

## Fontos
**AI eszközök használata szigorúan tilos ebben a feladatban!**