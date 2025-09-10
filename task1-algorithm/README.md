# Task 1: Bináris Fa Mélység Számítás

## Feladat leírása

Implementálj egy függvényt, amely kiszámítja egy bináris fa maximális mélységét!

## Követelmények

1. Implementáld a `maxDepth` függvényt a `solution.js` fájlban
2. A függvény egy bináris fa gyökér csomópontját kapja paraméterként
3. Térj vissza a fa maximális mélységével (a gyökértől a legtávolabbi levélig vezető út hossza)

## Csomópont struktúra

```javascript
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
```

## Példák

### Példa 1:
```
Input: [3,9,20,null,null,15,7]
      3
     / \
    9  20
      /  \
     15   7
Output: 3
```

### Példa 2:
```
Input: [1,null,2]
    1
     \
      2
Output: 2
```

### Példa 3:
```
Input: []
Output: 0
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