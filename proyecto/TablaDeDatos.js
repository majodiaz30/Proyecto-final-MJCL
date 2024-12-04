async function cargarCSV() {
  try {
    const respuesta = await fetch("datosProyecto.csv");
    if (!respuesta.ok) throw new Error("Error al cargar el archivo CSV");

    const texto = await respuesta.text();

    const lineas = texto.split("\n");
    const encabezados = lineas[0].split(",");
    const cuerpo = lineas.slice(1);

    const tbody = document.querySelector("#tablaDatosHistoricos tbody");

    cuerpo.forEach((linea) => {
      const columnas = linea.split(",");

      if (columnas.length === encabezados.length && columnas[0]) {
        const fila = document.createElement("tr");

        columnas.forEach((dato) => {
          const celda = document.createElement("td");
          celda.textContent = dato.trim();
          fila.appendChild(celda);
        });
        tbody.appendChild(fila);
      }
    });
  } catch (error) {
    console.error("Error al cargar el archivo CSV", error);
  }
}
cargarCSV();
