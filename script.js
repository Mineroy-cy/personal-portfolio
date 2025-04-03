// Dark Mode Toggle
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    let button = document.querySelector("button");
    button.classList.toggle("dark-mode-btn");
}

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    
    // Reset form after submission
    document.getElementById("contact-form").reset();
});

// Button Click Animation
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function() {
        this.classList.add("button-clicked");
        setTimeout(() => {
            this.classList.remove("button-clicked");
        }, 200);
    });
});
