function postMessage() {
    let message = document.getElementById('message').value.trim();
    if (message === '') return;

    // Save to localStorage
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push({ text: message, date: new Date().toLocaleString() });
    localStorage.setItem('messages', JSON.stringify(messages));

    // Clear input and refresh board
    document.getElementById('message').value = '';
    loadMessages();
}

function loadMessages() {
    let board = document.getElementById('board');
    board.innerHTML = '';
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.forEach(msg => {
        let div = document.createElement('div');
        div.classList.add('message');
        div.innerHTML = `<p>${msg.text}</p><small>${msg.date}</small>`;
        board.appendChild(div);
    });
}

loadMessages(); // Load on page load
