document.getElementById("validationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let inputs = document.querySelectorAll(".form-group input");
    let isValid = true;

    inputs.forEach(input => {
        let parent = input.closest(".form-group");

        if (input.value.trim() === "") {
            parent.classList.add("error"); // Show error state
            isValid = false;
        } else {
            parent.classList.remove("error"); // Remove error state
        }
    });

    if (isValid) {
        alert("Form submitted successfully!");
    }
});
