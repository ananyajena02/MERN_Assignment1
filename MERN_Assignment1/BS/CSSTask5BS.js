document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Select all input fields
    let inputs = document.querySelectorAll(".form-group input");
    let isValid = true;

    inputs.forEach(input => {
        let parent = input.closest(".form-group");

        if (input.value.trim() === "") {
            parent.classList.add("error"); // Add error styling
            isValid = false;
        } else {
            parent.classList.remove("error");
        }
    });

    if (isValid) {
        alert("Form submitted successfully!");
    }
});
