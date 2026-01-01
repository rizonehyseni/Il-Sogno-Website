document.addEventListener("DOMContentLoaded", function () {

  const lines = document.querySelectorAll(".line");

  lines.forEach(function(line) {
    line.style.width = "100%";
  });

  const text = `SEE OUR LOCATION`;
  const typingText = document.getElementById("find-us-header");

  let i = 0;
  let hasTyped = false;

  function typeWriter() {
    if (i < text.length) {
      typingText.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 90);
    }
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const element = entry.target;

      if (element.id === "find-us-header" && entry.isIntersecting && !hasTyped) {
        hasTyped = true;
        typeWriter();
      }
    });
  });

  observer.observe(typingText);

    const text1 = `Would you like to contact us for further information?`;
  const typingText1 = document.getElementById("contactus");

  let i1 = 0;
  let hasTyped1 = false;

  function typeWriter1() {
    if (i1 < text1.length) {
      typingText1.textContent += text1.charAt(i1);
      i1++;
      setTimeout(typeWriter1, 40);
    }
  }

  const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const element = entry.target;

      if (element.id === "contactus" && entry.isIntersecting && !hasTyped1) {
        hasTyped1 = true;
        typeWriter1();
      }
    });
  });

  observer1.observe(typingText1);
  const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    const privacyChecked = document.getElementById("privacy").checked;
    
    if(name.split(" ").length < 2) {
        alert("Please enter your full name (first and last).");
        return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    const phonePattern = /^\+?\d{7,15}$/;
    if(!phonePattern.test(phone)) {
        alert("Please enter a valid phone number (7-15 digits, optional +).");
        return;
    }
    if(message.length < 10) {
        alert("Message must be at least 10 characters long.");
        return;
    }
    if(!privacyChecked) {
        alert("You must agree to the privacy policy.");
        return;
    }

    alert("Your message has been sent successfully!");
    form.reset();
});

});

