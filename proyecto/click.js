
document.addEventListener ("DOMContentLoaded", () => {
    const botonVerficar = document.getElementById("verificarBtn");
    botonVerficar.addEventListener("click", () => {

        let consumoUsuario = document.getElementById("consumoUsuario").value;
        let datoSolar = 0.32;
        let totalUsoTWh = consumoUsuario/1000*12;
        let totalConsumoEnerg = totalUsoTWh/datoSolar;

        document.getElementById("totalConsumoEnerg").innerText = `Total Consumo Energético: ${totalConsumoEnerg.toFixed(2)} %`;


    })
})