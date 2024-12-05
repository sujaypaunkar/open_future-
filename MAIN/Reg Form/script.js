document.getElementById('login-form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        // Send POST request to the API
        const response = await fetch('http://192.168.1.9:8090/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }), // Pass username and password
        });

        // Check if the response is successful
        const responseData = await response.text(); // API returns "success" or "failed"
        if (responseData === 'success') {
            alert('Login successful!');
            window.location.href = '/dashboard.html'; // Redirect to the dashboard
        } else {
            alert('Login failed. Please check your username and password.');
        }
    } catch (error) {
        console.error('Error:', error.message);
        alert('An error occurred. Please try again later.');
    }
});
