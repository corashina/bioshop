import fs from 'fs';
import path from 'path';

// List of CSS files that might be missing
const cssFiles = [
  'src/App.css',
  'src/components/layout/Header.css',
  'src/components/ui/LoadingSpinner.css',
  'src/components/user/UserProfilePage.css',
  'src/features/auth/styles/Login.css',
];

console.log('Checking for missing CSS files...');
cssFiles.forEach(cssFile => {
  if (!fs.existsSync(cssFile)) {
    console.log(`Creating missing CSS file: ${cssFile}`);
    fs.writeFileSync(cssFile, '/* CSS file for ' + path.basename(cssFile) + ' */\n');
  }
});

console.log('Build issues check complete!'); 