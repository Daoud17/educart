const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Check if all fields are filled
    const inputs = form.querySelectorAll("input, textarea");
    let valid = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            valid = false;
        }
    });

    if (!valid) {
        message.style.color = "red";
        message.textContent = "Please fill in all fields.";
        return;
    }

    // Success message
    message.style.color = "green";
    message.textContent = "Message received successfully!";

    // Reset form
    form.reset();
});