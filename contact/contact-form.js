// contact-from.ts
// Get a reference to the form element
var contactForm = document.getElementById('contact-form');
if (contactForm) {
    // Add a submit event listener to the form
    contactForm.addEventListener('submit', function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        // Get the form data
        var formData = new FormData(contactForm);
        // Display a comfirmation message 
        alert('Form submitted successfully!');
        // Add this line to check if the event listener is reached
        console.log('Event listener added to the form');
        // Add this line to check if the form submission is prevented
        console.log('Form submission prevented');
    });
}
