const {ipcRenderer} = require('electron');

const form = document.querySelector('form');
const filePicker = document.getElementById('filePicker');
const formButton = document.querySelector('.content__form-button');

formButton.addEventListener('click', () => {
    filePicker.dispatchEvent(new MouseEvent('click'));
});

filePicker.addEventListener('change', (e) => {
    const [file] = e.target.files;
    console.log(file);
    ipcRenderer.send('file', file.path);

    ipcRenderer.on('stat', (event, data) => {
        console.log(data);
    });
});




