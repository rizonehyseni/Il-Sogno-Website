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




//Validimi per full name
document.addEventListener("DOMContentLoaded", () => {
  const name = document.querySelector('input[placeholder="Full Name"]');

  name.addEventListener("input", () => {
    name.value = name.value
      .replace(/[0-9]/g, "")           // hiqi numrat
      .slice(0, 30)                    // maksimum 30 karaktere gjithsej
      .replace(/\b\w/g, c => c.toUpperCase()); // cdo fjale me shkronje te madhe
  });
});


