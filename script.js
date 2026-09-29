// Contact Form
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        formMessage.textContent =
            "Thank you for your message! I will get back to you soon.";

        contactForm.reset();

    });

}