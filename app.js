$(() => {

//Hover to reveal text
$('.name').hover(function(){
     $("p").show(7000);
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
})