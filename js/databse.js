document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form data
    let formData = new FormData(this);
    
    // Send formData to Google Apps Script function for processing
    fetch('https://script.google.com/macros/s/AKfycbxvBhuxbaBh7pfGgLinOSRG1sdgOw3mD_1wXWKIgz8kP9uF9d1doEJTogiOWk4vBRAGYQ/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Optionally, display a success message to the user
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle errors, e.g., display an error message to the user
    });
});
