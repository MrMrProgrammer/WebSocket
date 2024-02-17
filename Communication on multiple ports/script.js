const socket = new WebSocket('ws://192.168.11.30:8000');

socket.onopen = function(event) {
    console.log('Connected to server');
};

socket.onmessage = function(event) {
    const random_port = event.data;
    console.log("Random port is -> " + random_port);

    const random_socket = new WebSocket('ws://192.168.11.30:' + random_port);

    console.log(random_socket);

    random_socket.onopen = function(event) {
        console.log('Connected to random port');
    };

    random_socket.onmessage = function(event) {
        const messages = document.getElementById('messages');
        const li = document.createElement('li');
        li.textContent = event.data;
        messages.appendChild(li);
    };

    random_socket.onerror = function(event) {
        console.error('WebSocket error: ' + event);
    };

    random_socket.onclose = function(event) {
        console.log('Connection to random port closed');
    };
};

socket.onerror = function(event) {
    console.error('WebSocket error: ' + event);
};

socket.onclose = function(event) {
    console.log('Connection closed');
};