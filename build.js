const { execSync } = require('child_process');

execSync('npm install', { stdio: 'inherit' });
execSync('npx electron-builder --dir', { stdio: 'inherit' });
execSync('npx electron-builder --linux zip', { stdio: 'inherit' });
console.log('✅ Build & packaging complete.');
