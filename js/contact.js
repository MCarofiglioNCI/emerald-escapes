// 1. Get the form and listen for "submit"
const contactForm = document.getElementById("contact-form")
const successMessage = document.getElementById("form-success")

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