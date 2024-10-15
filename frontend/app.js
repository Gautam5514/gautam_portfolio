document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitBtn').addEventListener('click', async function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        const name = document.getElementById('name').value; // No # here
        const email = document.getElementById('email').value; // No # here
        const subject = document.getElementById('subject').value; // No # here
        const message = document.getElementById('message').value; // No # here

        // Send the form data to the backend API
        const response = await fetch('http://localhost:2000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, subject, message })
        });

        if (response.ok) {
            Toastify({
                text: "Message sent successfully",
                duration: 3000,  // Show toast for 3 seconds
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                backgroundColor: "green",
                stopOnFocus: true,  // Prevents dismissing on hover
            }).showToast();
            setTimeout(() => {
                window.location.reload();
            }, 3000);  // Refresh after the toast disappears
        } else {
            // Show error toast message
            Toastify({
                text: "Failed to send message",
                duration: 3000,  // Show toast for 3 seconds
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                backgroundColor: "red",
                stopOnFocus: true,  // Prevents dismissing on hover
            }).showToast();
        }
    });
});















