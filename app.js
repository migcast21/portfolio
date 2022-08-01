$(() => {

//Hover to reveal text

$('html').hover(function(){
    $('.home').show(2000);
    $('.bio').show(2000);
    $("ul").show(2000);
    $('.headers').show(2000);
});


//Carousel

let currentImgIndex = 0
let numOfImages = $('.carousel-images').children().length -1
  
    $('.next').on('click', () => {
        $('.carousel-images').children().eq(currentImgIndex).css('display',' none')
          if(currentImgIndex < numOfImages) {
              currentImgIndex ++
             } else {
              currentImgIndex = 0
             }
          $('.carousel-images').children().eq(currentImgIndex).css('display',' block')
      })
      $('.prev').on('click', () => {
          $('.carousel-images').children().eq(currentImgIndex).css('display',' none')
          if(currentImgIndex > 0) {
              currentImgIndex --
             } else {
              currentImgIndex = numOfImages
             }
          $('.carousel-images').children().eq(currentImgIndex).css('display',' block')
      })

//Modal

const modal = document.getElementsByClassName('modal');


const btn = document.getElementsByClassName("myBtn");



const span = document.getElementsByClassName("close");

// open 
btn[0].onclick = function() {
    modal[0].style.display = "block";
}

btn[1].onclick = function() {
    modal[1].style.display = "block";
}

btn[2].onclick = function() {
    modal[2].style.display = "block";
}
// click x to close
span[0].onclick = function() {
    modal[0].style.display = "none";
}

span[1].onclick = function() {
    modal[1].style.display = "none";
}

span[2].onclick = function() {
    modal[2].style.display = "none";
}
// click outside to close
window.onclick = function(event) {
    if (event.target == modal[0]) {
         modal[0].style.display = "none";
     }
    if (event.target == modal[1]) {
         modal[1].style.display = "none";
     }
     if (event.target == modal[2]) {
        modal[2].style.display = "none";
    }    
}
})