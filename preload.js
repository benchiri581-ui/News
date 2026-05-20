const { contextBridge, ipcRenderer } = require('electron');

// Expose safe APIs to the renderer process
contextBridge.exposeInMainWorld('electronAPI', {
    checkOnlineStatus: () => ipcRenderer.send('check-online-status'),
    onOnlineStatusChanged: (callback) => {
        ipcRenderer.on('online-status-changed', (event, isOnline) => {
            callback(isOnline);
        });
    },
    isElectron: true
});
