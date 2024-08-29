function respond(answer) {
    if (answer === 'Sí') {
        document.getElementById('mainMessage').textContent = '¡Sabía que aceptarías, guapo!';
        document.getElementById('subMessage').classList.add('hidden');
        document.getElementById('buttonsContainer').classList.add('hidden');
        document.getElementById('heartContainer').classList.remove('hidden');
    } else {
        const noButton = document.getElementById('noButton');
        const randomX = Math.floor(Math.random() * 200) - 100; // Genera un movimiento aleatorio en X
        const randomY = Math.floor(Math.random() * 200) - 100; // Genera un movimiento aleatorio en Y
        noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }
}

