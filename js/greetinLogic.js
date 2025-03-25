
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("linkMain");
    const mobileMenu = document.createElement("div");
    
    mobileMenu.classList.add("mobile-menu");

    // Agregar los enlaces ocultos
    mobileMenu.innerHTML = `
        <a href="/html/home.html">Inicio</a>
        <a href="https://github.com/Xenolfair/WorkResponsive">GitHub</a>
        <a href="https://api.whatsapp.com/send/?phone=3148597543&text&type=phone_number&app_absent=0">Ayuda</a>
        <a href="#">Cuenta</a>
    `;

    // Insertar el menú en el body para que no altere la estructura del nav
    document.body.appendChild(mobileMenu);

    menuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("active"); // Mostrar/ocultar menú
    });
});
/* saludo */

document.addEventListener('DOMContentLoaded', () => {
    const userNameToShowElement = document.getElementById('Header_Title-Username');
    const loggedInUserName = localStorage.getItem('loggedInUser');
    const space = " ";

    if (loggedInUserName) {
        const greetingElement = document.getElementById('Header_Title');
        const greeting = getGreeting(loggedInUserName);
12
        greetingElement.innerHTML = `${greeting},&nbsp; <span class="Purple">${loggedInUserName}</span>`;

        userNameToShowElement.innerHTML = `<span class="Purple">${loggedInUserName}</span>`;
    }
});

function getGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting = "";

    if (hour >= 6 && hour < 12) {
        greeting = `Buenos días`;
    } else if (hour >= 12 && hour < 18) {
        greeting = `Buenas tardes`;
    } else {
        greeting = `Buenas noches`;
    }

    return `${greeting}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const loggedInUserName = localStorage.getItem('loggedInUser');
    const myNameElement = document.getElementById('myName');
    
    myNameElement.textContent = loggedInUserName;
});

function guardarEnlace() {
    const enlaceImagen = document.getElementById('enlaceImagen').value; // Obtiene el enlace de la imagen del input.
    
    document.getElementById('enlaceImagen').value = ''; // Limpia el campo de entrada de enlace de imagen.
    
    let imagenesGuardadas = JSON.parse(localStorage.getItem('imagenes')) || []; // Recupera las imágenes guardadas o inicializa un arreglo vacío.
    const contenedorImagenes = document.getElementById('imagenesGuardadas'); // Obtiene el contenedor donde se mostrarán las imágenes.
    contenedorImagenes.innerHTML = ''; // Limpia el contenedor de imágenes.

    imagenesGuardadas = [enlaceImagen]; // Crea un nuevo arreglo que solo contiene la nueva imagen.
    localStorage.setItem('imagenes', JSON.stringify(imagenesGuardadas)); // Guarda las imágenes en localStorage.
    mostrarImagenesGuardadas(); // Llama a la función para mostrar las imágenes guardadas.
}

function mostrarImagenesGuardadas() {
    const contenedorImagenes = document.getElementById('imagenesGuardadas'); // Obtiene el contenedor de imágenes guardadas.
    const imagenesGuardadas = JSON.parse(localStorage.getItem('imagenes')) || []; // Recupera las imágenes guardadas.

    contenedorImagenes.innerHTML = ''; // Limpia el contenedor de imágenes.

    // Si hay imágenes guardadas, muestra la última imagen.
    if (imagenesGuardadas.length > 0) {
        const imagen = document.createElement('img'); // Crea un nuevo elemento de imagen.
        imagen.src = imagenesGuardadas[imagenesGuardadas.length - 1]; // Asigna la última imagen guardada como fuente.
        contenedorImagenes.appendChild(imagen); // Agrega la imagen al contenedor.
    } else {
        // Si no hay imágenes guardadas, muestra una imagen por defecto.
        const imagenDefecto = document.createElement('img'); // Crea un nuevo elemento de imagen.
        imagenDefecto.src = 'https://jobsaca.com.cy/wp-content/uploads/2015/05/icon-user-default.png'; // Asigna la imagen por defecto.
        imagenDefecto.alt = 'Enlace por defecto'; // Asigna un texto alternativo a la imagen.
        contenedorImagenes.appendChild(imagenDefecto); // Agrega la imagen por defecto al contenedor.
    }
}

// Llama a la función para mostrar las imágenes guardadas al cargar la página.

mostrarImagenesGuardadas();

function mostrarImagenesGuardadas2() {
    const contenedorImagenes = document.getElementById('imgUserP'); // Obtiene el contenedor donde se mostrarán las imágenes del usuario.
    const imagenesGuardadas = JSON.parse(localStorage.getItem('imagenes')) || []; // Recupera las imágenes guardadas.

    contenedorImagenes.innerHTML = ''; // Limpia el contenedor de imágenes.

    // Si hay imágenes guardadas, muestra la última imagen.
    if (imagenesGuardadas.length > 0) {
        const imagen = document.createElement('img'); // Crea un nuevo elemento de imagen.
        imagen.src = imagenesGuardadas[imagenesGuardadas.length - 1]; // Asigna la última imagen guardada como fuente.
        contenedorImagenes.appendChild(imagen); // Agrega la imagen al contenedor.
    } else {
        // Si no hay imágenes guardadas, muestra una imagen por defecto.
        const imagenDefecto = document.createElement('img'); // Crea un nuevo elemento de imagen.
        imagenDefecto.src = 'https://jobsaca.com.cy/wp-content/uploads/2015/05/icon-user-default.png'; // Asigna la imagen por defecto.
        imagenDefecto.alt = 'Enlace por defecto'; // Asigna un texto alternativo a la imagen.
        contenedorImagenes.appendChild(imagenDefecto); // Agrega la imagen por defecto al contenedor.
    }
}

// Llama a la función para mostrar las imágenes guardadas del usuario.
mostrarImagenesGuardadas2();
