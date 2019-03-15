const Contact = {
    template: `
    <div class="site-section" data-aos="fade">
        <div class="container-fluid">
        
            <div class="row justify-content-center">
                <div class="col-md-7">
                <div class="row mb-5">
                    <div class="col-12 ">
                    <h2 class="site-section-heading text-center">Contact Us</h2>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-8 mb-5">
                    <form action="#">
                    

                        <div class="row form-group">
                        <div class="col-md-6 mb-3 mb-md-0">
                            <label class="text-black" for="fname">First Name</label>
                            <input type="text" id="fname" class="form-control">
                        </div>
                        <div class="col-md-6">
                            <label class="text-black" for="lname">Last Name</label>
                            <input type="text" id="lname" class="form-control">
                        </div>
                        </div>

                        <div class="row form-group">
                        
                        <div class="col-md-12">
                            <label class="text-black" for="email">Email</label> 
                            <input type="email" id="email" class="form-control">
                        </div>
                        </div>

                        <div class="row form-group">
                        
                        <div class="col-md-12">
                            <label class="text-black" for="subject">Subject</label> 
                            <input type="subject" id="subject" class="form-control">
                        </div>
                        </div>

                        <div class="row form-group">
                        <div class="col-md-12">
                            <label class="text-black" for="message">Message</label> 
                            <textarea name="message" id="message" cols="30" rows="7" class="form-control" placeholder="Write your notes or questions here..."></textarea>
                        </div>
                        </div>

                        <div class="row form-group">
                        <div class="col-md-12">
                            <input type="submit" value="Send Message" class="btn btn-primary py-2 px-4 text-white">
                        </div>
                        </div>

            
                    </form>
                    </div>
                    <div class="col-lg-3 ml-auto">
                    <div class="mb-3 bg-white">
                        <p class="mb-0 font-weight-bold">Address</p>
                        <p class="mb-4">203 Fake St. Mountain View, San Francisco, California, USA</p>

                        <p class="mb-0 font-weight-bold">Phone</p>
                        <p class="mb-4"><a href="#">+1 232 3235 324</a></p>

                        <p class="mb-0 font-weight-bold">Email Address</p>
                        <p class="mb-0"><a href="#">youremail@domain.com</a></p>

                    </div>
                    
                    </div>
                </div>
                </div>
            
            </div>
        </div>
    </div>
    `,

    mounted() {
        AOS.init({
            duration: 800,
            easing: 'slide',
            once: true
        });
       
       jQuery(document).ready(function($) {
       
           "use strict";
       
           
       
           var siteMenuClone = function() {
       
               $('.js-clone-nav').each(function() {
                   var $this = $(this);
                   $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
               });
       
       
               setTimeout(function() {
                   
                   var counter = 0;
             $('.site-mobile-menu .has-children').each(function(){
               var $this = $(this);
               
               $this.prepend('<span class="arrow-collapse collapsed">');
       
               $this.find('.arrow-collapse').attr({
                 'data-toggle' : 'collapse',
                 'data-target' : '#collapseItem' + counter,
               });
       
               $this.find('> ul').attr({
                 'class' : 'collapse',
                 'id' : 'collapseItem' + counter,
               });
       
               counter++;
       
             });
       
           }, 1000);
       
               $('body').on('click', '.arrow-collapse', function(e) {
             var $this = $(this);
             if ( $this.closest('li').find('.collapse').hasClass('show') ) {
               $this.removeClass('active');
             } else {
               $this.addClass('active');
             }
             e.preventDefault();  
             
           });
       
               $(window).resize(function() {
                   var $this = $(this),
                       w = $this.width();
       
                   if ( w > 768 ) {
                       if ( $('body').hasClass('offcanvas-menu') ) {
                           $('body').removeClass('offcanvas-menu');
                       }
                   }
               })
       
               $('body').on('click', '.js-menu-toggle', function(e) {
                   var $this = $(this);
                   e.preventDefault();
       
                   if ( $('body').hasClass('offcanvas-menu') ) {
                       $('body').removeClass('offcanvas-menu');
                       $this.removeClass('active');
                   } else {
                       $('body').addClass('offcanvas-menu');
                       $this.addClass('active');
                   }
               }) 
       
               // click outisde offcanvas
               $(document).mouseup(function(e) {
               var container = $(".site-mobile-menu");
               if (!container.is(e.target) && container.has(e.target).length === 0) {
                 if ( $('body').hasClass('offcanvas-menu') ) {
                           $('body').removeClass('offcanvas-menu');
                       }
               }
               });
           }; 
           siteMenuClone();
       
       
           var sitePlusMinus = function() {
               $('.js-btn-minus').on('click', function(e){
                   e.preventDefault();
                   if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
                       $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
                   } else {
                       $(this).closest('.input-group').find('.form-control').val(parseInt(0));
                   }
               });
               $('.js-btn-plus').on('click', function(e){
                   e.preventDefault();
                   $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
               });
           };
           // sitePlusMinus();
       
       
           var siteSliderRange = function() {
           $( "#slider-range" ).slider({
             range: true,
             min: 0,
             max: 500,
             values: [ 75, 300 ],
             slide: function( event, ui ) {
               $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
             }
           });
           $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
             " - $" + $( "#slider-range" ).slider( "values", 1 ) );
           };
           // siteSliderRange();
       
       
           var siteMagnificPopup = function() {
               $('.image-popup').magnificPopup({
               type: 'image',
               closeOnContentClick: true,
               closeBtnInside: false,
               fixedContentPos: true,
               mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
                gallery: {
                 enabled: true,
                 navigateByImgClick: true,
                 preload: [0,1] // Will preload 0 - before current, and 1 after the current image
               },
               image: {
                 verticalFit: true
               },
               zoom: {
                 enabled: true,
                 duration: 300 // don't foget to change the duration also in CSS
               }
             });
       
             $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
               disableOn: 700,
               type: 'iframe',
               mainClass: 'mfp-fade',
               removalDelay: 160,
               preloader: false,
       
               fixedContentPos: false
             });
           };
           siteMagnificPopup();
       
       
           var siteCarousel = function () {
               if ( $('.nonloop-block-13').length > 0 ) {
                   $('.nonloop-block-13').owlCarousel({
                   center: false,
                   items: 1,
                   loop: false,
                       stagePadding: 0,
                   margin: 20,
                   nav: true,
                       navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
                   responsive:{
                   600:{
                       margin: 20,
                     items: 2
                   },
                   1000:{
                       margin: 20,
                       stagePadding: 0,
                     items: 2
                   },
                   1200:{
                       margin: 20,
                       stagePadding: 0,
                     items: 3
                   }
                   }
                   });
               }
       
               $('.slide-one-item').owlCarousel({
               center: false,
               items: 1,
               loop: true,
                   stagePadding: 0,
               margin: 0,
               autoplay: true,
               pauseOnHover: false,
               nav: true,
               navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
             });
           };
           siteCarousel();
       
           var siteStellar = function() {
               $(window).stellar({
               responsive: false,
               parallaxBackgrounds: true,
               parallaxElements: true,
               horizontalScrolling: false,
               hideDistantElements: false,
               scrollProperty: 'scroll'
             });
           };
           siteStellar();
       
           var siteCountDown = function() {
       
               $('#date-countdown').countdown('2020/10/10', function(event) {
                 var $this = $(this).html(event.strftime(''
                   + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
                   + '<span class="countdown-block"><span class="label">%d</span> days </span>'
                   + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
                   + '<span class="countdown-block"><span class="label">%M</span> min </span>'
                   + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
               });
                       
           };
           siteCountDown();
       
           var siteDatePicker = function() {
       
               if ( $('.datepicker').length > 0 ) {
                   $('.datepicker').datepicker();
               }
       
           };
           siteDatePicker();
       
           var swiperSetting = function() {
               var mySwiper = new Swiper ('.swiper-container', {
               // Optional parameters
               // direction: 'horizontal',
               // loop: true,
       
               // If we need pagination
               pagination: {
                 el: '.swiper-pagination',
               },
       
               // Navigation arrows
               navigation: {
                 nextEl: '.swiper-button-next',
                 prevEl: '.swiper-button-prev',
               },
               mousewheel: {
                     invert: false,
                     forceToAxis: true,
                     releaseOnEdges: true,
                 },
       
                 // direction: 'vertical',
                 freeMode: true,
             // slidesPerView: 'auto',
             spaceBetween: 30,
             mousewheel: true,
             pagination: {
               el: '.swiper-pagination',
               clickable: true,
             },
       
               // And if we need scrollbar
               // scrollbar: {
               //   el: '.swiper-scrollbar',
               // },
       
               slidesPerView: 3,
                   breakpoints: {
                       668: {
                           slidesPerView: 1
                       },
                       1024: {
                           slidesPerView: 2 
                       }
                   },
                   // paginationClickable: false,
                   spaceBetween: 20,
                   // freeMode: true,
                   // grabCursor: true,
                   // mousewheelControl: true
       
             })
           }
           swiperSetting();
       
       });

       $(document).ready(function(){
            $('#lightgallery').lightGallery();
        });
    }
}
