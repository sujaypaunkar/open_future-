// Selecting elements
const chatIcon = document.getElementById('chat-icon');
const chatContainer = document.getElementById('chat-container');
const closeBtn = document.getElementById('close-btn');
const sendBtn = document.getElementById('send-btn');
const chatBody = document.getElementById('chat-body');
const userInput = document.getElementById('user-input');

// Show the chatbox when the chat icon is clicked
chatIcon.addEventListener('click', () => {
    chatContainer.style.display = 'block';  // Show the chatbox
    chatIcon.style.display = 'none';        // Hide the chat icon
});

// Hide the chatbox when the close button is clicked
closeBtn.addEventListener('click', () => {
    chatContainer.style.display = 'none';   // Hide the chatbox
    chatIcon.style.display = 'block';       // Show the chat icon again
});

// Handle sending a message when the Send button is clicked
sendBtn.addEventListener('click', () => {
    const userText = userInput.value; // Get the input text

    if (userText.trim() !== '') {
        appendMessage(userText, 'user');  // Append the user's message
        userInput.value = '';  // Clear the input field

        // Simulate a bot response (You can replace this with an actual API call)
        setTimeout(() => {
            appendMessage('Hello,Welcome to the OpenFuture tech! You can Connect with us with ', 'bot');  // Append bot's message
        }, 1000);
    }
});

// Function to append a message to the chat body
function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    
    const messageContent = document.createElement('p');
    messageContent.textContent = message;
    
    messageElement.appendChild(messageContent);
    chatBody.appendChild(messageElement);

    // Scroll to the bottom of the chat
    chatBody.scrollTop = chatBody.scrollHeight;
}
