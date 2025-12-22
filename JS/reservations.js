//koha
flatpickr("#time-picker", {
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
  time_24hr: true,
  minuteIncrement: 15,
});

//data
flatpickr("#date-picker", {
  dateFormat: "Y-m-d",
  minDate: "2025-12-23",
  maxDate: "2026-01-31",
});










// //Validimi per full name
// document.addEventListener("DOMContentLoaded", () => {
//   const name = document.querySelector('input[placeholder="Full Name"]');

//   name.addEventListener("input", () => {
//     name.value = name.value
//       .replace(/[0-9]/g, "")           // hiq numrat
//       .slice(0, 30)                    // maksimum 20 karaktere gjithsej
//       .replace(/\b\w/g, c => c.toUpperCase()); // cdo fjale me shkronje te madhe
//   });
// });



// /*pop up */ 

// // Kur klikohet "BOOK TABLE"

// document.querySelector("form").addEventListener("submit", function (e) {
//   e.preventDefault();

 
//   if (!this.checkValidity()) {
//     this.reportValidity();  // fuhsat me i kontrollu
//     return;
//   }

//   // Shfaqe pop upin
//   document.getElementById("successPopup").style.display = "flex";
//   this.reset();
// });

// // Butoni close
// document.getElementById("closePopup").addEventListener("click", () => {
//   document.getElementById("successPopup").style.display = "none";
// });



// const form = document.getElementById("bookingForm");
// const fullName = document.getElementById("fullname");
// const phone = document.getElementById("phone");
// const email = document.getElementById("email");
// const comments = document.getElementById("comments");

// const successPopup = document.getElementById("successPopup");
// const closePopup = document.getElementById("closePopup");





// //funksionet
// const nameValid = validateFullName();
// const phoneValid = validatePhone();
// const emailValid = validateEmail();
// const commentsValid = validateComments();

// //Validimi i emrit

// function validateFullName() {

//   const regex = /^[A-Za-z]+(\s[A-Za-z]+)+$/;
//   return regex.test(value);
// }


// //Validimi i emailit

// function validateEmail() {
//   const value = email.value.trim();
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return regex.test(value);
// }
// //Validimi i numrit
// function validatePhone() {
//   const value = phone.value.trim();
//   const regex = /^[0-9]{9,15}$/;
//   return regex.test(value);
// }


// //Submiti

// form.addEventListener("submit", function(e) {
//   e.preventDefault();


//    const nameValid = validateFullName();
//   const phoneValid = validatePhone();
//   const emailValid = validateEmail();
//   const commentsValid = validateComments();

//   const dateValid = document.getElementById("date-picker").value.trim() !== "";
//   const timeValid = document.getElementById("time-picker").value.trim() !== "";
//   const peopleValid = document.getElementById("people").value.trim() !== "";

//   if (nameValid && phoneValid && emailValid && commentsValid && dateValid && timeValid && peopleValid) {
//     successPopup.style.display = "flex";
//     form.reset();
//   }
// });

// closePopup.addEventListener("click", () => {
//   successPopup.style.display = "none";
// });


// const form = document.getElementById("bookingForm");
// const fullName = document.getElementById("fullname");
// const phone = document.getElementById("phone");
// const email = document.getElementById("email");
// const datePicker = document.getElementById("date-picker");
// const timePicker = document.getElementById("time-picker");
// const people = document.getElementById("people");
// const successPopup = document.getElementById("successPopup");
// const closePopup = document.getElementById("closePopup");

// // Capitalize first letter of each word
// function capitalizeFullName(name) {
//   return name
//     .trim()
//     .split(" ")
//     .filter(word => word)
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//     .join(" ");
// }

// // Validate functions
// function validateFullName() {
//   let value = fullName.value.trim();
//   value = capitalizeFullName(value);
//   fullName.value = value;
//   const regex = /^[\p{L}]+(?:\s[\p{L}]+)+$/u;


//   if (value === "") {
//     fullName.setCustomValidity("Full name is required");
//     fullName.reportValidity();
//     return false;
//   } else if (!regex.test(value)) {
//     fullName.setCustomValidity("Enter your full name (first and last)");
//     fullName.reportValidity();
//     return false;
//   } else {
//     fullName.setCustomValidity("");
//     return true;
//   }
// }

// function validateEmail() {
//   const value = email.value.trim();
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   if (value === "") {
//     email.setCustomValidity("Email is required");
//     email.reportValidity();
//     return false;
//   } else if (!regex.test(value)) {
//     email.setCustomValidity("Enter a valid email with @ and .");
//     email.reportValidity();
//     return false;
//   } else {
//     email.setCustomValidity("");
//     return true;
//   }
// }

// function validatePhone() {
//   const value = phone.value.trim();
//   const regex = /^[0-9]{9,15}$/;

//   if (value === "") {
//     phone.setCustomValidity("Phone number is required");
//     phone.reportValidity();
//     return false;
//   } else if (!regex.test(value)) {
//     phone.setCustomValidity("Phone must be 9-15 digits");
//     phone.reportValidity();
//     return false;
//   } else {
//     phone.setCustomValidity("");
//     return true;
//   }
// }



// function validateDate() {
//   if (datePicker.value.trim() === "") {
//     datePicker.setCustomValidity("Date is required");
//     datePicker.reportValidity();
//     return false;
//   } else {
//     datePicker.setCustomValidity("");
//     return true;
//   }
// }

// function validateTime() {
//   if (timePicker.value.trim() === "") {
//     timePicker.setCustomValidity("Time is required");
//     timePicker.reportValidity();
//     return false;
//   } else {
//     timePicker.setCustomValidity("");
//     return true;
//   }
// }

// function validatePeople() {
//   if (people.value.trim() === "") {
//     people.setCustomValidity("Number of people is required");
//     people.reportValidity();
//     return false;
//   } else if (people.value < 1 || people.value > 20) {
//     people.setCustomValidity("Enter between 1 and 20");
//     people.reportValidity();
//     return false;
//   } else {
//     people.setCustomValidity("");
//     return true;
//   }
// }

// // Submit event
// form.addEventListener("submit", function(e) {
//   e.preventDefault();

//   const valid =
//     validateFullName() &
//     validateEmail() &
//     validatePhone() &
//     validateComments() &
//     validateDate() &
//     validateTime() &
//     validatePeople();

//   if (valid) {
//     successPopup.style.display = "flex";
//     form.reset();
//   }
// });

// // Close popup
// closePopup.addEventListener("click", () => {
//   successPopup.style.display = "none";
// });

