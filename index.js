document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission to handle with JS

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const reservationDate = document.getElementById('reservation-date').value;

    // Basic validation
    if (!name || !email || !reservationDate) {
        alert("Please fill in all the fields.");
        return;
    }

    // Display confirmation
