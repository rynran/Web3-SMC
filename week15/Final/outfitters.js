//nav effect on scroll
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);            
});

//responsive sidebar nav
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
});
closeBtn.addEventListener("click",() => {
    menu.classList.remove('active');
});

//scroll reveal

window.addEventListener('scroll', reveal);
    
function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 200;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

//carousel target

$('.carousel').on('slid.bs.carousel', function () {
    var carouselData = $(this).data('bs.carousel');
    var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
  
    $('.result p')
      .removeClass('active-p')
      .eq(currentIndex)
      .addClass('active-p');
  });

  //highlights target

function changeImage(fileName) {
    let img = document.querySelector(".hlImg");
    img.setAttribute("src", fileName);
}
