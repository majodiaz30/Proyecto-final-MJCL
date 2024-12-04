
document.addEventListener("DOMContentLoaded", function() {
    const verificarBtn = document.getElementById("verificarBtn");
    const calcularBtn = document.getElementById("calcularBtn");
    const resultado = document.getElementById("resultado");

    verificarBtn.addEventListener("click", function() {
        const nombre = document.getElementById("nombre").value; 
        const cedula = document.getElementById("Cedula").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const ciudad = document.getElementById("ciudad").value;

        if (nombre && cedula && email && telefono && ciudad) {
            resultado.innerHTML = `<strong>¡Bienvenido, ${nombre}!, ya puedes colocar tu consumo electrico. </strong>`;
        } else {
            resultado.textContent = "Por favor, completa todos los campos.";
        }
    });

    calcularBtn.addEventListener("click", calculateRenewablePercentage);
});
