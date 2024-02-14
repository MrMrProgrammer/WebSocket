const socket = new WebSocket('ws://localhost:8000');

socket.onopen = function(event) {
    console.log('Connected to server');
};

socket.onmessage = function(event) {
    const messages = document.getElementById('messages');
    const li = document.createElement('li');
    li.textContent = event.data;
    messages.appendChild(li);
};

socket.onerror = function(event) {
    console.error('WebSocket error: ' + event);
};

socket.onclose = function(event) {
    console.log('Connection closed');
};