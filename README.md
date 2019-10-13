# Electron Widevine CDM
Easy import for WidevineCDM Plugin to electron

### What is WidevineCDM?
"Widevine is a content decryption module (CDM) for the digital rights management (DRM) of the Google Chrome web browser and Android MediaDRM originally created by Widevine Technologies, which was purchased by Google in 2010"  
  
Source: https://en.wikipedia.org/wiki/Widevine

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
```
