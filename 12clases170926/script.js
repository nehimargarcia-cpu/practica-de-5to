// Escuchar el evento de envío del formulario
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que la página se recargue

    // Obtener los valores de los inputs
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const genero = document.getElementById('genero').value;

    // Calcular la edad exacta
    const edad = calcularEdad(fechaNacimiento);

    // Agregar el estudiante a la tabla
    agregarEstudianteATabla(nombre, apellido, fechaNacimiento, edad, genero);

    // Limpiar el formulario para un nuevo ingreso
    document.getElementById('studentForm').reset();
});

// Función para calcular la edad basada en la fecha actual
function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const cumpleanos = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    const mes = hoy.getMonth() - cumpleanos.getMonth();

    // Ajustar si el cumpleaños no ha pasado este año todavía
    if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}

// Función para insertar una nueva fila en la tabla HTML
function agregarEstudianteATabla(nombre, apellido, fecha, edad, genero) {
    const tabla = document.getElementById('tablaEstudiantes');

    // Crear una nueva fila (tr)
    const fila = document.createElement('tr');

    // Insertar las celdas (td) con los datos correspondientes
    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${fecha}</td>
        <td>${edad} años</td>
        <td>${genero}</td>
    `;

    // Añadir la fila al cuerpo de la tabla
    tabla.appendChild(fila);
}