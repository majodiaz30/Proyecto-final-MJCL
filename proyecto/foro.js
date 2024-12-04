document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores del formulario
    const username = document.getElementById('username').value.trim();
    const comment = document.getElementById('comment').value.trim();

    // Validar que los campos no estén vacíos
    if (username === '' || comment === '') {
        alert('Por favor completa todos los campos.');
        return;
    }

    // Crear un nuevo elemento de lista para el comentario
    const commentItem = document.createElement('li');
    
    // Agregar el contenido al elemento
    commentItem.innerHTML = `<strong>${username}</strong>: ${comment}`;

    // Agregar el nuevo comentario a la lista de comentarios
    document.getElementById('commentsList').appendChild(commentItem);

    // Limpiar el formulario
    document.getElementById('commentForm').reset();
});