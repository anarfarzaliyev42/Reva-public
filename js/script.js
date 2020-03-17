"use strict";


// Animation start and will continue 5 times
var i = 0;
var countOfAnimation=0;
var textArray=['Frontend developer.','Web designer.','Graphic designer.'];
var j=0;
setTimeout(typeWriter,1000);
function typeWriter() {

if(j<textArray.length){
  if (i < textArray[j].length) {
    document.querySelector(".anime-text").innerHTML +=  textArray[j].charAt(i);
    i++;
    setTimeout(typeWriter, 150);

    
  }
  else if(i ==  textArray[j].length){
     setTimeout(reverseType,2000);
   
     
  }
}
    
  }

function reverseType() {
    
    if(i>0){
        document.querySelector(".anime-text").innerHTML =  textArray[j].slice(0,i-1);
        i--;
        setTimeout(reverseType, 50);
       
    }
    else if(i==0){
      j++;
      if(j!=3){
        typeWriter();
      }
    
     
     if(j==3&&countOfAnimation!=5){
       j=0;
       countOfAnimation++;
       setTimeout(typeWriter, 2000);

       
     }
     console.log(countOfAnimation);
    }

    
}  
   

// Animation end

        $(document).ready(function() {
          let counter = 1;
          $(document).on("click", ".fa-chevron-circle-left", function() {
            $(".name-menu").hide();
            let margin=49+"px";
            $('.right-side').css('margin-right',`${margin}`);
            $(".navbar-nav").width(70 + "px");
            let height= 291+'px';
            let right=61+'px';
            $('.right-slider').css('right',`${right}`);
            $(".navbar-nav").css('height',`${height}`)
            $(".social-media").hide();
            $(".navbar").width(100 + "px");
            $(".right-slider").addClass("margin-slider");
            $(".navbar-nav").addClass("margin-nav-bar");
            let leftCircleRight=53+'px';
            let leftCircleTop=15+'px';
            $(this).css('right',`${leftCircleRight}`);
            $(this).css('top',`${leftCircleTop}`);
            $(".fa-chevron-circle-left").hide();
            $(".fa-chevron-circle-right").show();
            $(".logo").addClass("logo-top");
          });
          $(document).on("click", ".fa-chevron-circle-right", function() {
            $(".name-menu").show();
            let margin=0+"px";
            $('.right-side').css('margin-right',`${margin}`);
            let height=433+'px';
            let right=24+'px';
            $('.right-slider').css('right',`${right}`);
            $(".navbar-nav").css('height',`${height}`)
            $(".navbar-nav").width(110 + "px");
            $(".social-media").show();
            let navbarWidth=220+'px';
            $(".navbar").css('width',`${navbarWidth}`);
            $(".right-slider").removeClass("margin-slider");
            $(".navbar-nav").removeClass("margin-nav-bar");
            let leftCircleRight=9+'px';
            let leftCircleTop=20+'px';
            $('.fa-chevron-circle-left').css('right',`${leftCircleRight}`);
            $('.fa-chevron-circle-left').css('top',`${leftCircleTop}`);
            $(".fa-chevron-circle-left").show();
            $(".fa-chevron-circle-right").hide();
            $(".logo").removeClass("logo-top");
          });
          //Slider buttons
          let timer;
          function sliderTimer() {
            counter++;
            let sliderImages = $(".lent div img");
            sliderImages.each(function(index, element) {
              $(element).removeClass("opacity-slider-active");
            });
            if (counter == 4) {
              counter = 1;
            }
            $($(".lent div img")[counter - 1]).addClass("opacity-slider-active");
          }

          timer = setInterval(sliderTimer, 7000);
          // $(document).on('mouseenter','.frame',function () {
          //     clearInterval(timer);
          //   console.log('asds');

          // })
          // $(document).on('mouseleave','.frame',function () {
          //     timer=setInterval(sliderTimer,3000)

          // })

          $(document).on("click", ".right-btn", function() {
            counter++;
            let sliderImages = $(".lent div img");
            sliderImages.each(function(index, element) {
              $(element).removeClass("opacity-slider-active");
            });
            if (counter == 4) {
              counter = 1;
            }
            $($(".lent div img")[counter - 1]).addClass("opacity-slider-active");
          });
          $(document).on("click", ".left-btn", function() {
            if (counter > 0) {
              counter--;
            }

            let sliderImages = $(".lent div img");
            sliderImages.each(function(index, element) {
              $(element).removeClass("opacity-slider-active");
            });
            if (counter == 0) {
              counter = 3;
            }
            $($(".lent div img")[counter - 1]).addClass("opacity-slider-active");
          });
          //Slider buttons end
          let bool = true;

          $(document).on("click", ".gear-check", function() {
            
            if (bool) {
              $('.color-option').css('opacity',1);
              $(".color-option").addClass("option-box-extended");
              $(".gear-check").addClass("gear-check-extended");
              bool = false;
            } else {
              $('.color-option').css('opacity',0);
              $(".color-option").removeClass("option-box-extended");
              $(".gear-check").removeClass("gear-check-extended");
              bool = true;
            }
          });
          let togglerMenu=false;
          $(document).on("click", ".navbar-toggler", function() {
            
            if(!togglerMenu){
              let menuLine1=$('.menu .line1');
              menuLine1.hide();
              let menuLine2=$('.menu .line2');
              let menuLine3=$('.menu .line3');
              let line2Rotate=(45+'deg');
              menuLine2.css('transform',`rotate(${line2Rotate})`);

              let line3Rotate=(-45+'deg');
              let line3Top=10+'px';

              menuLine3.css('transform',`rotate(${line3Rotate})`);
              menuLine3.css('top',`${line3Top}`);
              let leftOfNavbar=0+'px';
              $('.navbar').css('left',`${leftOfNavbar}`);
              togglerMenu=true;
            }
            else{
            let menuLine1=$('.menu .line1');
            menuLine1.show();
            let menuLine2=$('.menu .line2');
            let menuLine3=$('.menu .line3');
            let line2Rotate=(0+'deg');
            menuLine2.css('transform',`rotate(${line2Rotate})`);

            let line3Rotate=(0+'deg');
            let line3Top=18+'px';

            menuLine3.css('transform',`rotate(${line3Rotate})`);
            menuLine3.css('top',`${line3Top}`);
              let leftOfNavbar=-220+'px';
              $('.navbar').css('left',`${leftOfNavbar}`);
              togglerMenu=false;
            }
           
              
          });
          $(document).on("click", ".navbar-nav li", function() {
            let allLeftLiTags = $(".navbar-nav li");
            let allRightPages = $(".right-side .page");

            let currentIndex = $(this).index();
            allRightPages.each(function(index, element) {
              if (index == currentIndex) {
                $(element).addClass("right-page-active");
              } else {
                $(element).removeClass("right-page-active");
              }
            });

            allLeftLiTags.each(function(index, element) {
              $(element).removeClass("active-nav");
              $(element)
                .find("i")
                .removeClass("active-nav-logo");
              $(element)
                .find("span")
                .removeClass("active-nav-logo");
            });
            $(this)
              .find("span")
              .addClass("active-nav-logo");
            $(this)
              .find("i")
              .addClass("active-nav-logo");
            $(this).addClass("active-nav");
          });
          $(document).on("click", ".about-ul li", function() {
            let allAboutUlLiTags = $(".about-ul li");
            let currentIndex = $(this).index();
            allAboutUlLiTags.each(function(index, element) {
              $(element).removeClass("about-li-active");
              $(element)
                .find("i")
                .removeClass("active-nav-logo");
              $(element)
                .find("span")
                .removeClass("active-nav-logo");
            });
            $(this)
              .find("span")
              .addClass("active-nav-logo");
            $(this)
              .find("i")
              .addClass("active-nav-logo");
            $(this).addClass("about-li-active");
            let allTabContents = $(".tab-content .content");

            allTabContents.each(function(index, element) {
              $(element).removeClass("active-tab-content");
              
              if ($(element).index() == currentIndex) {
                $(element).addClass("active-tab-content");
              } 
            });
          });
          //Shuffle disable cards written here
          $(document).on("click", ".shuffle ul li", function() {
            let allShuffleLiTags = $(".shuffle ul li");
            allShuffleLiTags.each(function(index, element) {
              $(element).removeClass("shuffle-li-active");
            });
            $(this).addClass("shuffle-li-active");
            let currenClass = $(this).attr("data-class");

            let allItems = $(".gallery .item");
            allItems.each(function(index, element) {
              if (currenClass == "all") {
                $(element).removeClass("disable-shuffle-item");
              } else if (!$(element).hasClass(`${currenClass}`)) {
                $(element).addClass("disable-shuffle-item");
              } else {
                $(element).removeClass("disable-shuffle-item");
              }
            });
          });
          $(document).on("click", ".over i", function() {
            let allOverITags = $(".over i");
            let currentImageSource = $(this)
              .closest(".item")
              .find("img")
              .attr("src");
            $(".portfolio-image-modal").show();
            $(".modal-image img").attr("src", `${currentImageSource}`);
          });
          $(document).on("click", ".modal-image span", function() {
            $(".portfolio-image-modal").hide();
          });
          $(document).on('click','.test-page .list-tabs ul li', function() {
                  let allTabPanes=$('.test-page .tab-content .tab-pane');
                  let currentIndex=$(this).index();
                 allTabPanes.each(function (index,element) {
                   $(element).removeClass('active');
                 })
                  allTabPanes.eq(currentIndex).addClass('active')
                  
                 let allListTabLiTags=$('.test-page .list-tabs ul li');
                  allListTabLiTags.each(function (index,element) {
                    $(element).removeClass('active');
                  })
                  $(this).addClass('active');
                 
         
          });
          $(document).on('click','.open-map',function () {
            $('.close-map').addClass('active-map-span');
            $(this).removeClass('active-map-span');
            $('.google-map iframe').slideDown();
          })
          $(document).on('click','.close-map',function () {
            $('.open-map').addClass('active-map-span');
            $(this).removeClass('active-map-span');
            $('.google-map iframe').slideUp();
          })
          // Color change
          $(document).on('click','.colors .row div',function () {
        
            let currentColor=$(this).attr('class');
            $('#color-change-css').attr('href',`css/${currentColor}.css`);
           
        
           

            
          })
          $(document).on('click','.theme .row div',function () {
            
            let currentColor=$(this).attr('class');
            console.log(currentColor);
            
            $('#theme').attr('href',`css/${currentColor}.css`);
            
          })

          $(document).on('click','.btn-home',function () {
            let allRightPages = $(".right-side .page");

           
            allRightPages.each(function(index, element) {
              
          
                $(element).removeClass("right-page-active");
              
            });
            $('.portfolio-page').addClass('right-page-active');
            let allLeftLiTags = $(".navbar-nav li");
           


            allLeftLiTags.each(function(index, element) {
              $(element).removeClass("active-nav");
              $(element)
                .find("i")
                .removeClass("active-nav-logo");
              $(element)
                .find("span")
                .removeClass("active-nav-logo");
            });
            $('#work')
              .find("span")
              .addClass("active-nav-logo");
            $('#work')
              .find("i")
              .addClass("active-nav-logo");
            $('#work').addClass("active-nav");
          })
        });
