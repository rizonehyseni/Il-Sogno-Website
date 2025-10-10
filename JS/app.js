const text = `"Music is the cup which holds the wine of silence."`;
const text2='- Robert Fripp';
const typingText = document.getElementById("divider_quote");
const typingText2 = document.getElementById("divider_author");

let i = 0; //rritet qaq shkronja sa i ka
let j=0;
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

}




const observer = new IntersectionObserver(entries => { //a pe sheh useri
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasTyped) { //nese elementi po doket edhe nuk katype hala, boja tpe
      hasTyped = true;
      typeWriter();
    }
  });
}, { threshold: 0.6 }); // kur eshte 60% i dukshem teksti ja nis mu type

observer.observe(typingText);
//dej qitu animacioni

