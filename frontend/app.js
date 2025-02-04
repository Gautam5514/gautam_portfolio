document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitBtn').addEventListener('click', async function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        const name = document.getElementById('name').value; 
        const email = document.getElementById('email').value; 
        const subject = document.getElementById('subject').value; 
        const message = document.getElementById('message').value; 

        // Send the form data to the backend API
        const response = await fetch('https://gautam-portfolio-eight.vercel.app/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({ name, email, subject, message })
        });

        if (response.ok) {
            Toastify({
                text: "Message sent successfully",
                duration: 1000,  
                close: true,
                gravity: "top", 
                position: "right", 
                backgroundColor: "green",
                stopOnFocus: true,  
            }).showToast();
            setTimeout(() => {
                window.location.reload();
            }, 3000);  // Refresh after the toast disappears
        } else {
            // Show error toast message
            Toastify({
                text: "Failed to send message",
                duration: 1000,  
                close: true,
                gravity: "top", 
                position: "right", 
                backgroundColor: "red",
                stopOnFocus: true,  
            }).showToast();
        }
    });
});















