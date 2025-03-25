// Obtiene el nombre de usuario almacenado en localStorage.
const userLocal = localStorage.getItem('loggedInUser');

// Obtiene el elemento h2 donde se mostrará el nombre de usuario.
const h2Username = document.getElementById('Header_Title-Username2');

// Asigna el nombre de usuario al elemento h2, o muestra 'Usuario' si no hay nombre almacenado.
h2Username.textContent = userLocal || 'Usuario';

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
