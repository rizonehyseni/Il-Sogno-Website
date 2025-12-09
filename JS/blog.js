document.addEventListener("DOMContentLoaded", function () {
  const text = `Welcome to Il Sogno, where every dish is crafted with passion, bringing the true flavors of Italy straight to your table.
Join us and savor moments made memorable.`;
  
  const typingText = document.getElementById("divider-name");

  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      typingText.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 30);
    }
  }

  typeWriter(); 
});