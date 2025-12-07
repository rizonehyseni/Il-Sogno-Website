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


//validimi i numri te telefonit






//Validimi per full name
document.addEventListener("DOMContentLoaded", () => {
  const name = document.querySelector('input[placeholder="Full Name"]');

  name.addEventListener("input", () => {
    name.value = name.value
      .replace(/[0-9]/g, "")           // hiq numrat
      .slice(0, 30)                    // maksimum 20 karaktere gjithsej
      .replace(/\b\w/g, c => c.toUpperCase()); // cdo fjale me shkronje te madhe
  });
});



/*pop up */ 

// Kur klikohet "BOOK TABLE"

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

 
  if (!this.checkValidity()) {
    this.reportValidity();  // fuhsat me i kontrollu
    return;
  }

  // Shfaqe pop upin
  document.getElementById("successPopup").style.display = "flex";
  this.reset();
});

// Butoni close
document.getElementById("closePopup").addEventListener("click", () => {
  document.getElementById("successPopup").style.display = "none";
});



