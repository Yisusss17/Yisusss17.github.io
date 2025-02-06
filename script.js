window.onload = function () {
var mapa = L.map('mapa').setView([7.7705, -72.2250], 13);

// Cargar el mapa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(mapa);

// Lista de puntos de reciclaje
var puntosReciclaje = [
    { nombre: "Contenedor de Reciclaje Latino", lat: 7.787682, lng: -72.213308, tipo: "Plásticos, Vidrios y Cartones" },
    { nombre: "Contenedor de reciclaje Av. LOS AGUSTINOS", lat: 7.795312, lng: -72.208105, tipo: "Plásticos, Vidrios y Cartones" },
    { nombre: "Contenedor de reciclaje Urb Los Teques", lat: 7.796605, lng: -72.215992, tipo: "Plásticos, Vidrios y Cartones" },
    { nombre: "Contenedor de Reciclaje ULA", lat: 7.791245, lng: -72.214252, tipo: "Cartón y Vidrio" },
    { nombre: "Contenedor de reciclaje CARABOBO - FERRERO", lat: 7.776032, lng: -72.222017, tipo: "Cartón, Vidrio, Aluminio, Papel y Plástico" },
];

// Agregar marcadores al mapa al iniciar
puntosReciclaje.forEach(punto => {
    L.marker([punto.lat, punto.lng])
        .addTo(mapa)
        .bindPopup(`<b>${punto.nombre}</b><br>Materiales: ${punto.tipo}`);

        // Seleccionamos el formulario
document.getElementById("form-reciclaje").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue
  
    
    
    

    // Obtener los valores del formulario
    let nombre = document.getElementById("nombre").value;
    let latitud = Number(document.getElementById("latitud").value);
    let longitud = Number(document.getElementById("longitud").value);
    
    let tipo = document.getElementById("tipo").value;

    // Verificar que los valores sean correctos
    if (!nombre || isNaN(latitud) || isNaN(longitud) || !tipo) {
        alert("Por favor, completa todos los campos correctamente.");
        return;
    }
    console.log("Intentando agregar marcador en:", latitud, longitud);
    // Agregar un nuevo marcador al mapa
    L.marker([latitud, longitud])
        .addTo(mapa)
        .bindPopup(`<b>${nombre}</b><br>Materiales: ${tipo}`);

    // Limpiar el formulario
    document.getElementById("form-reciclaje").reset();
});

});

};