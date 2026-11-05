// 1. Get the form and listen for "submit"
const contactForm = document.getElementById("contact-form")
const successMessage = document.getElementById("form-success")

const minMessageLength = 20


function showError(fieldId, message) {
    document.getElementById(fieldId + "-error").textContent = message
    document.getElementById(fieldId).classList.add("invalid")
}

function clearErrors() {
    const errorElements = document.querySelectorAll(".error")
    for (const element of errorElements) {
        element.textContent = ""
    }

    const invalidFields = document.querySelectorAll(".invalid")
    for (const field of invalidFields) {
        field.classList.remove("invalid")
    }
}

function handleSubmit(event) {
    
    // Stops the browser from reloading the page on submit since this exercise is offline and we're not submitting the form values anywhere
    event.preventDefault()

    clearErrors()
    successMessage.hidden = true

    const emailField = document.getElementById("email")
    const phoneField = document.getElementById("phone")
    const querySelect = document.getElementById("query-type")

    const name = document.getElementById("name").value.trim()
    const email = emailField.value.trim()
    const phone = phoneField.value.trim()
    const queryType = querySelect.value
    const message = document.getElementById("message").value.trim()

    let isValid = true

    //I'm using browser native client-side validation, reference is the following MDN article: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation
    if (name === "") {
        showError("name", "Please enter your name.")
        isValid = false
    }

    if (email === "") {
        showError("email", "Please enter your email address.")
        isValid = false
    } else if (emailField.validity.typeMismatch) {
        showError("email", "Please enter a valid email address, e.g. name@example.com.")
        isValid = false
    }

    if (phone === "") {
        showError("phone", "Please enter your phone number.")
        isValid = false
    } else if (phoneField.validity.patternMismatch) {
        showError("phone", "Please enter a valid phone number, e.g. 087 123 4567.")
        isValid = false
    }

    if (queryType === "") {
        showError("query-type", "Please choose a query type.")
        isValid = false
    }

    if (message === "") {
        showError("message", "Please enter a message.")
        isValid = false
    } else if (message.length < minMessageLength) {
        showError("message", `Your message must be at least ${minMessageLength} characters (currently ${message.length}).`)
        isValid = false
    }

    if (isValid) {
        const queryLabel = querySelect.options[querySelect.selectedIndex].text

        successMessage.textContent = `Thank you, ${name}! Your ${queryLabel} enquiry has been sent. We'll reply to ${email} within 24 hours.`
        successMessage.hidden = false
        contactForm.reset()
    }
}

contactForm.addEventListener("submit", handleSubmit)


// 2. In the handler:
//    - event.preventDefault()
//    - clear all previous error messages and hide the success message
//    - read and .trim() each field value
//    - let isValid = true

// 3. One check per field; on failure call showError(...) and set isValid = false
//    - name: not empty
//    - email: not empty, then matches the email regex
//    - phone: not empty, then matches the phone regex
//    - query type: not empty
//    - message: not empty, then at least 20 characters

// 4. If isValid: show the success message (with the person's name), then form.reset()

// Helper: showError(fieldId, message)
//    - put the message in the matching "-error" element
//    - add an "invalid" class to the field so CSS can give it a red border