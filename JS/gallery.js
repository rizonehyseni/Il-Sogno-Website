



//images load so they appear ma smooth



const images = document.querySelectorAll('.images_container');













const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    



    //images

    if (entry.target.classList.contains("images_container") && entry.isIntersecting) {
      entry.target.classList.add("show");
      
    }
  });
});


//to observe all images

images.forEach(i => observer.observe(i));



