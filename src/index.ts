import { app, BrowserWindow, Menu } from 'electron';
import path from 'path';

const publicPath = path.join(__dirname, 'public');

let main : BrowserWindow;
app.on('ready', () => {
    main = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        title: 'File Switch',
        show: false
    });
    Menu.setApplicationMenu(null);
    main.loadFile(path.join(publicPath, 'index.html'));
    main.on('ready-to-show', () => {
        main.show();
    });
});