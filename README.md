# Electron Widevine CDM
Easy import for WidevineCDM Plugin to electron

### Usage:
```javascript
// Require electron libraries
const electron = require('electron')

// Import app from electron
const { app, BrowserWindow } = require('electron')

// Import electron-widevine-cdm
const wvcdm = require('electron-widevine-cdm');

// Inject widevine to app
wvcdm.inject(app);

// Optional: specific a wvcdm version
wvcdm.injec(app, 'version');
```

### wvcdm versions
1) 4.10.1503.4 (Release)
