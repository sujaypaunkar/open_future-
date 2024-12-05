// Selecting elements
const chatIcon = document.getElementById('chat-icon');
const chatContainer = document.getElementById('chat-container');
const closeBtn = document.getElementById('close-btn');
const sendBtn = document.getElementById('send-btn');
const chatBody = document.getElementById('chat-body');
const userInput = document.getElementById('user-input');
const responseBox = document.getElementById('response-box'); // New element for responses
 
// Variable to track bot responses
let responseStep = 0; // Tracks the stage of the conversation
 
// Predefined questions
const predefinedQuestions = [
    "Tell me more about your company",
    "Where are your offices located",
    "How can I apply for a job",
    "How can I share my feedback",
    "How can I contact your support team"
];
 
// Predefined answers
const responses = {
    "tell me more about your company": "We are OpenFuture Technologies Private Limited, a progressive IT solutions provider committed to driving innovation across industries.",
    "where are your offices located": "Our offices are located in Nagpur.",
    "how can i apply for a job": "You can apply for a job by visiting our careers page on our website.",
    "how can i share my feedback": "You can share feedback through our feedback form on the website or via email.",
    "how can i contact your support team": "You can contact our support team at support@openfuturetech.com or via our helpline."
};
 
// Show the chatbox when the chat icon is clicked
chatIcon.addEventListener('click', () => {
    chatContainer.style.display = 'block';  // Show the chatbox
    chatIcon.style.display = 'none';        // Hide the chat icon
});
 
// Hide the chatbox when the close button is clicked
closeBtn.addEventListener('click', () => {
    chatContainer.style.display = 'none';   // Hide the chatbox
    chatIcon.style.display = 'block';       // Show the chat icon again
    responseStep = 0;                       // Reset the conversation
    chatBody.innerHTML = '';                // Clear chat history
    responseBox.innerHTML = '';             // Clear response box
});
 
// Handle sending a message when the Send button is clicked
sendBtn.addEventListener('click', () => {
    const userText = userInput.value.trim(); // Get and sanitize user input
 
    if (userText !== '') {
        appendMessage(userText, 'user');  // Append the user's message
        userInput.value = '';  // Clear the input field
 
        // Simulate bot response based on the response step
        setTimeout(() => {
            handleBotResponse(userText);
        }, 1000);
    }
});
 
// Handle bot responses
function handleBotResponse(userText) {
    if (responseStep === 0) {
        appendMessage('Hello, Welcome to OpenFuture Tech.', 'bot');
        responseStep++;
    } else if (responseStep === 1) {
        appendMessage(
            'Thank you for reaching out. Please select one of the following options:',
            'bot'
        );
        showPredefinedQuestions(); // Show predefined questions
        responseStep++;
    } else {
        const lowerCaseText = userText.toLowerCase();
        let responseFound = false;
 
        // Match user query with predefined responses
        for (const query in responses) {
            if (lowerCaseText.includes(query)) {
                appendMessage(responses[query], 'bot');
                updateResponseBox(query); // Update the separate response box
                responseFound = true;
                break;
            }
        }
 
        if (!responseFound) {
            appendMessage("I'm sorry, I didn't understand that. Could you please clarify your query?", 'bot');
        }
    }
}
 
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
 
// Function to show predefined questions as buttons
function showPredefinedQuestions() {
    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question-container');
 
    predefinedQuestions.forEach(question => {
        const questionButton = document.createElement('button');
        questionButton.textContent = question;
        questionButton.classList.add('question-button');
       
        // Handle question button click
        questionButton.addEventListener('click', () => {
            appendMessage(question, 'user'); // Show selected question as user's message
            handleBotResponse(question);    // Handle the response for the selected question
        });
 
        questionContainer.appendChild(questionButton);
    });
 
    chatBody.appendChild(questionContainer);
    // Scroll to the bottom of the chat
    chatBody.scrollTop = chatBody.scrollHeight;
}
 
// Function to update the response box
function updateResponseBox(query) {
    responseBox.innerHTML = ''; // Clear previous content
 
    const responseText = document.createElement('p');
    responseText.textContent = responses[query.toLowerCase()];
    responseText.classList.add('response-text');
 
    responseBox.appendChild(responseText);
}
 
 