document.body.classList.add('loading');//e shtojna qe me ja caktu klasen bodyt loading qe mos me mujt me bo scroll(e kena definu ncss)

  window.addEventListener('load', () => { //load o e vetja(js)
    const intro = document.querySelector('.intro_container');
    setTimeout(() => {
      intro.style.display = 'none';
      document.body.classList.remove('loading');
    }, 3500); //mas kohes 3500 ms hiqe klasen loading prej bodyt edhe intron hiqe
  });





//navbari me kan scroll responsive

let scrollFundit = window.scrollY;//scrolly dmth sa e ke scroll windowsin vertikalisht
const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {
  if (window.scrollY > scrollFundit && window.scrollY > 100) {//kur scroll ma shume se 100px, me mshef navin
    
    navbar.classList.add("hidden");
  } else {//kur kthehesh me show navin
    
    navbar.classList.remove("hidden");
  }
  scrollFundit = window.scrollY;
});






//type animacion


const text = `"Music is the cup which holds the wine of silence."`;
const text2='- Robert Fripp';
const text3=' Discover the inspirations behind our seasonal dishes, chef’s stories, and wine pairings.';
const typingText = document.getElementById("divider_quote");
const typingText2 = document.getElementById("divider_author");
const typingText3 = document.getElementById("blog_info");

let i = 0; //rritet qaq shkronja sa i ka
let j=0;
let k=0;
let hasTyped = false;//kjo qe mos mu run funksioni pa e bo scroll te section


function typeWriter() {
  if (i < text.length) {
    typingText.textContent += text.charAt(i); //kontenti + shkronja me radhe
    i++;
    setTimeout(typeWriter, 40); //sa kohe vonon me shkru 1 shkronje
  }
  
    else if(j<text2.length){//mas tparit qe me bo i dyti e bon me else
     typingText2.textContent+=text2.charAt(j);
     j++;
     setTimeout(typeWriter,40);
  }

  
    else if(k<text3.length){//mas tparit qe me bo i dyti e bon me else
     typingText3.textContent+=text3.charAt(k);
     k++;
     setTimeout(typeWriter,40);
  }

  
}





//pi bojna me ni observer krejt animacionet qe shkojne kur i shohum gjate scrollit ne website

const aboutText = document.querySelector(".about_image_text");

const aboutCard = document.querySelectorAll(".about_card")

const menuImage= document.querySelector(".menu_img");

const menuTitle=document.querySelector(".menu_title");

const menuDesc=document.querySelector(".menu_desc");

const menuBtn=document.querySelector(".menu_button");

const dividerImage=document.querySelector(".divider_1");

const blogImage=document.querySelector(".blog_image");




const observer = new IntersectionObserver(entries => { //a pe sheh useri
  entries.forEach(entry => {

    const element=entry.target;
    
   

   //per about image textin
   
    if(element.classList.contains("about_image_text")){
         if (entry.isIntersecting) {
      aboutText.classList.add("show");
      observer.unobserve(element);// qikjo e len qe me u show veq 1 here
     }
  
    }

    //per about cards

    if (element.classList.contains("about_card")) {
      if (entry.isIntersecting) {
        aboutCard.forEach((card, index) => {//indexi dmth indexi i card-it
          setTimeout(() => {
            card.classList.add("show");
          }, index * 200);//delay ne ms
        });
        observer.unobserve(element);
      }
    }


    //menu seksioni animacionet per krejt

    if(element.classList.contains("menu_img")){
      if(entry.isIntersecting){
        menuImage.classList.add("show");
        observer.unobserve(element);
      }
    }

        if(element.classList.contains("menu_title")){
      if(entry.isIntersecting){
        menuTitle.classList.add("show");
        observer.unobserve(element);
      }
    }

        if(element.classList.contains("menu_desc")){
      if(entry.isIntersecting){
        menuDesc.classList.add("show");
        observer.unobserve(element);
      }
    }

        if(element.classList.contains("menu_button")){
      if(entry.isIntersecting){
        menuBtn.classList.add("show");
        observer.unobserve(element);
      }
    }


    //divideri

    if(element.classList.contains("divider_1")){
      if(entry.isIntersecting){
        dividerImage.classList.add("show");
        observer.unobserve(element);

      }
    }


    //per quotein te divideri ma poshte

    if (element.id === "divider_quote") {
      if (entry.isIntersecting && !hasTyped) { //nese elementi po doket edhe nuk katype hala, boja tpe
        hasTyped = true;
        typeWriter();
      }
    }


    //blogu typing
    if(element.id==="blog_info"){
      if(entry.isIntersecting && !hasTyped){
        hasTyped=true;
        typeWriter();
      }
    }

    //blog image 

    if(element.classList.contains("blog_image")){
      if(entry.isIntersecting){
        element.classList.add("show");
        observer.unobserve(element);
      }
    }
    
  });
}, { threshold: 0.1 }); // kur eshte 60% i dukshem teksti ja nis mu type



observer.observe(aboutText);

aboutCard.forEach(aboutCard => observer.observe(aboutCard));

observer.observe(menuImage);
observer.observe(menuTitle);
observer.observe(menuDesc);
observer.observe(menuBtn);


observer.observe(typingText);
observer.observe(dividerImage);

observer.observe(typingText3);

observer.observe(blogImage);