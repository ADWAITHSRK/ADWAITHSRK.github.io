document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you, ' + name + '! Your message has been sent.');
        // Here you can add functionality to send the form data to your email or server
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all the fields.');
    }
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('nav');
    header.classList.toggle('sticky', window.scrollY > 0);
});
