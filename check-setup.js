const fs = require('fs');
const path = require('path');

console.log('🔍 Ellenőrzés indítása...\n');

const checks = [
  { path: 'task1-algorithm', name: 'Task 1 - Algorithm' },
  { path: 'task1-algorithm/solution.js', name: 'Task 1 Solution File' },
  { path: 'task1-algorithm/solution.test.js', name: 'Task 1 Test File' },
  { path: 'task2-react', name: 'Task 2 - React' },
  { path: 'task2-react/src/App.jsx', name: 'Task 2 App Component' },
  { path: 'task3-ai-allowed', name: 'Task 3 - AI Allowed' },
  { path: 'task3-ai-allowed/backend/server.js', name: 'Task 3 Backend' },
  { path: 'task3-ai-allowed/frontend/src/App.jsx', name: 'Task 3 Frontend' },
];

let allGood = true;

checks.forEach(check => {
  const fullPath = path.join(__dirname, check.path);
  if (fs.existsSync(fullPath)) {
    console.log(`✅ ${check.name}`);
  } else {
    console.log(`❌ ${check.name} - Hiányzik!`);
    allGood = false;
  }
});

console.log('\n' + '='.repeat(50));

if (allGood) {
  console.log('✨ Minden rendben! A projekt készen áll.');
  console.log('\nKövetkező lépések:');
  console.log('1. Futtassa: npm install:all');
  console.log('2. Kezdje el a feladatokat!');
} else {
  console.log('⚠️  Néhány fájl vagy mappa hiányzik.');
  console.log('Kérjük, ellenőrizze a projekt struktúrát.');
}

console.log('='.repeat(50));