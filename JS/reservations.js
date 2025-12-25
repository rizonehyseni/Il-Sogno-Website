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
      .replace(/[^a-zA-ZÀ-ÿ '-]/g, "")         // hiqi krejt qka sjane shkronja
      .slice(0, 30)                    // maksimum 30 karaktere gjithsej
      .replace(/\b\w/g, c => c.toUpperCase()); // cdo fjale me shkronje te madhe
  });
});


//Validimi i "additional comments"- jo me shume se 100 fjale 
document.addEventListener("DOMContentLoaded", () => {
  const commentsInput = document.getElementById("comments");

  commentsInput.addEventListener("input", () => {
   
    let words = commentsInput.value.split(" ");

    if (words.length > 100) {
      commentsInput.value = words.slice(0, 100).join(" ");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const phoneInput = document.getElementById("phone");

  phoneInput.addEventListener("input", () => {
    
    phoneInput.value = phoneInput.value
      .replace(/[^0-9]/g, "")  //vec numra me mujt me shkru
      .slice(0, 15);        //mi mbajte veq deri 15 shifra  
  });
});

