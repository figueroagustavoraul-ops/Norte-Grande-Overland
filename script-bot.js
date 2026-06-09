function toggleChat() {
    document.getElementById('chat-window').classList.toggle('active');
}

function enviarMensaje() {
    const input = document.getElementById('chat-input');
    const texto = input.value.trim();
    if(!texto) return;

    const body = document.getElementById('chat-body');
    
    // Mensaje de Usuario
    const msgUser = document.createElement('div');
    msgUser.className = 'mensaje usuario';
    msgUser.textContent = texto;
    body.appendChild(msgUser);
    
    input.value = '';
    body.scrollTop = body.scrollHeight;

    // Simulación del Analizador de Palabras Clave
    setTimeout(() => {
        const msgBot = document.createElement('div');
        msgBot.className = 'mensaje bot';
        const lowerText = texto.toLowerCase();
        
        if (lowerText.includes('hilux') || lowerText.includes('srx')) {
            msgBot.textContent = "Tenemos la Hilux SRX 0KM disponible para entrega física inmediata en nuestro showroom. ¿Te gustaría agendar un peritaje para tu usado actual como parte de pago?";
        } else if (lowerText.includes('sw4') || lowerText.includes('usado')) {
            msgBot.textContent = "La Toyota SW4 Diamond está impecable, con service oficial certificado. Podés ver las opciones de financiación prendaria en pesos dentro de su ficha.";
        } else if (lowerText.includes('cotizar') || lowerText.includes('tasar')) {
            msgBot.textContent = "Para tasar tu vehículo actual, ingresá a la página 'Cotizá tu Usado' en el menú principal y completá la ficha mecánica para obtener tu valor aproximado.";
        } else {
            msgBot.textContent = "Excelente consulta. Recordá que todas nuestras transacciones operan en Pesos Argentinos con encriptación segura. ¿Querés que un asesor te contacte por WhatsApp?";
        }
        
        body.appendChild(msgBot);
        body.scrollTop = body.scrollHeight;
    }, 1000);
}