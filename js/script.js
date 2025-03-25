//prueba del tamaño
function updateSize() {
    const h3 = document.getElementById("dimensions");
    h3.textContent = `Ancho: ${window.innerWidth}px, Alto: ${window.innerHeight}px`;
}
window.addEventListener("resize", updateSize);
updateSize(); // Llamado inicial

function toggleBackgroundPart() {
    const backgroundParts = document.getElementsByClassName("backgroundPart");

    for (let i = 0; i < backgroundParts.length; i++) {
        if (window.innerWidth < 766) {
            backgroundParts[i].style.display = "none"; // Oculta el div si el ancho es menor a 558px
        } else {
            backgroundParts[i].style.display = ""; // Restablece el estilo por defecto cuando el ancho es mayor o igual a 558px
        }
    }
}

// Agregar el evento resize
window.addEventListener("resize", toggleBackgroundPart);

// Llamado inicial para asegurar que se oculte o muestre correctamente al cargar la página
toggleBackgroundPart();