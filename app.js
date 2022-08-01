$(() => {

//Click to reveal text: home page
$('body').hover(function(){
    $('.home').show(4000);
});

//Click to reveal text: bio
$('body').click(function(){
    $('.bio').show(2000);
});

//Click to reveal text: resume
$('body').click(function(){
    $("ul").show(2000);
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


// Get the modal
var modal = document.getElementsByClassName('modal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
btn[0].onclick = function() {
    modal[0].style.display = "block";
}

btn[1].onclick = function() {
    modal[1].style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
    modal[0].style.display = "none";
}

span[1].onclick = function() {
    modal[1].style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal[0]) {
         modal[0].style.display = "none";
     }
    if (event.target == modal[1]) {
         modal[1].style.display = "none";
     }  
}
})