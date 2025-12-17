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
});

