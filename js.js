            $(document).ready(function(){
              $('#icon').click(function(){
                $('ul').toggleClass('show');
              });
            });


         $(document).ready(function(){
         $('.item-slider').slick({
             slidesToShow:1,
             slidesToScroll:1,
             dots:true,
             prevArrow:`<button type='button' class='slick-prev pull-left'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
            nextArrow:`<button type='button' class='slick-next pull-right'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
             });
                });
          $(document).ready(function(){
          $('.three_ipad').slick({
            centerMode: true,
            centerPadding: 0,
            slidesToShow: 3,
            prevArrow:false,
            nextArrow:false,
            focusOnSelect: true,
  // adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: 0,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: 0,
        slidesToShow: 1
      }
    }
  ]
                });
                });
                function openMission(evt, name) {
                    // Declare all variables
                    var i, tabcontent, tablinks;
                  
                    // Get all elements with class="tabcontent" and hide them
                    tabcontent = document.getElementsByClassName("tabcontent");
                    for (i = 0; i < tabcontent.length; i++) {
                      tabcontent[i].style.display = "none";
                    }
                  
                    // Get all elements with class="tablinks" and remove the class "active"
                    tablinks = document.getElementsByClassName("tablinks");
                    for (i = 0; i < tablinks.length; i++) {
                      tablinks[i].className = tablinks[i].className.replace(" active", "");
                    }
                  
                    // Show the current tab, and add an "active" class to the button that opened the tab
                    document.getElementById(name).style.display = "block";
                    evt.currentTarget.className += " active";
                  }
                  document.getElementById("defaultOpen").click();

                 
                  