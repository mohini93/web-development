function validateForm() {
    let isValid = true;

    // Name validation
    const name = document.getElementById("name").value;
    const nameError = document.getElementById("nameError");
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
        nameError.textContent = "Please enter a valid name.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Date of Joining validation
    const dateOfJoining = document.getElementById("dateOfJoining").value;
    const dateError = document.getElementById("dateError");
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dateOfJoining)) {
        dateError.textContent = "Please enter a valid date in YYYY-MM-DD format.";
        isValid = false;
    } else {
        dateError.textContent = "";
    }

    // Email ID validation
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Phone Number validation
    const phone = document.getElementById("phone").value;
    const phoneError = document.getElementById("phoneError");
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        phoneError.textContent = "Please enter a valid 10-digit phone number.";
        isValid = false;
    } else {
        phoneError.textContent = "";
    }

    // Address validation
    const address = document.getElementById("address").value;
    const addressError = document.getElementById("addressError");
    if (address.trim() === "") {
        addressError.textContent = "Address cannot be empty.";
        isValid = false;
    } else {
        addressError.textContent = "";
    }

    // Pin Code validation
    const pinCode = document.getElementById("pinCode").value;
    const pinCodeError = document.getElementById("pinCodeError");
    const pinCodeRegex = /^\d{6}$/;
    if (!pinCodeRegex.test(pinCode)) {
        pinCodeError.textContent = "Please enter a valid 6-digit pin code.";
        isValid = false;
    } else {
        pinCodeError.textContent = "";
    }

    // Final submission check
    if (isValid) {
        alert("Form submitted successfully!");
    } else {
        alert("Please fix the errors in the form.");
    }
}
