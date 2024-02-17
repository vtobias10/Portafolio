const body = document.body;
const darkModeToggle = document.getElementById('darkModeToggle');
const lightModeIcon = document.querySelector('.light-mode-icon');
const darkModeIcon = document.querySelector('.dark-mode-icon');

document.addEventListener('DOMContentLoaded', () => {
    const currentMode = localStorage.getItem('darkMode');

    if (currentMode === 'dark') {
        enableDarkMode();
    }

    darkModeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
});

function enableDarkMode() {
    body.classList.add('dark-mode');
    lightModeIcon.style.opacity = '0';
    darkModeIcon.style.opacity = '1';
    localStorage.setItem('darkMode', 'dark');
}

function disableDarkMode() {
    body.classList.remove('dark-mode');
    lightModeIcon.style.opacity = '1';
    darkModeIcon.style.opacity = '0';
    localStorage.setItem('darkMode', 'light');
}

function descargarCv() {
    var urlPDF = 'ruta/del/tu-archivo.pdf';

    var link = document.createElement('a');
    link.href = urlPDF;
    link.download = 'nombre-del-archivo.pdf';
    link.target = '_blank';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
}

function enviarCorreo() {
    var destinatario = 'tobivelazquez80@gmail.com';
            var asunto = 'Asunto del correo';
    var cuerpo = 'Cuerpo del correo';

    var enlaceCorreo = 'mailto:' + destinatario + '?subject=' + encodeURIComponent(asunto) + '&body=' + encodeURIComponent(cuerpo);

    window.location.href = enlaceCorreo;
}

function copiarAlPortapapeles() {
    var campoEntrada = document.getElementById('floatingInputDisabled');
            
    ampoEntrada.select();
            
    document.execCommand('copy');
            
    campoEntrada.setSelectionRange(0, 0);
}