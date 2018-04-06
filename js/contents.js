$(function(){
  // swiper
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  skillCount();







  // horizontal Slide(scroll) Layout - (S)
  var $body = $("body");
  var currSlide = 0;
  var $slides = $(".h-slides");
  var $slide = $(".h-slide");

  $(".sub-menu a").click(function(e) {
    // When link clicked, find slide it points to
    var newslide = parseInt($(this).attr("href")[1]);
    // find how far it is from current slide
    var diff = newslide - currSlide - 1;
    showSlide(diff); // show that slide
    e.preventDefault();
  });

  $(window).resize(function() {
    // Keep current slide to left of window on resize
    var displacment = window.innerWidth * currSlide;
    $slides.css("transform", "translateX(-" + displacment + "px)");
  });

  // give active class to first link
  $($(".sub-menu a")[0]).addClass("active");

  // add event listener for mousescroll
  $body.bind("mousewheel DOMMouseScroll", mouseEvent);


  function showSlide(n) {
    // n is relative position from current slide (n is -1 or 1)

    // unbind event listener to prevent retriggering
    $body.unbind("mousewheel DOMMouseScroll");

    // increment slide number by n and keep within boundaries
    currSlide = Math.min(Math.max(0, currSlide + n), $slide.length - 1);

    var displacment = window.innerWidth * currSlide;
    // translate slides div across to appropriate slide
    $slides.css("transform", "translateX(-" + displacment + "px)");
    // delay before rebinding event to prevent retriggering
    setTimeout(bind, 700);

    // change active class on link
    $(".sub-menu a.active").removeClass("active");
    $($(".sub-menu a")[currSlide]).addClass("active");
  }

  function bind() {
    // IE, Chrome, Opera, Safari - mousewheel
    // firefox - DOMMouseScroll
    $body.bind("mousewheel DOMMouseScroll", mouseEvent);
  }

  function mouseEvent(e, delta) {
    var E = e.originalEvent;
    delta = 0;
    //console.log(E);

    if (E.detail) {
      delta = E.detail * -40;
      //console.log(delta);
    } else {
      delta = E.wheelDelta;
      //console.log(delta);
    }

    // On down scroll, show next slide otherwise show prev slide
    showSlide(delta >= 0 ? -1 : 1);
    e.preventDefault();
  }
  // horizontal Slide(scroll) Layout - (E)











});


// svg progress - skill count
function skillCount() {
  var forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]);
    }
  };

  var max = -219.99078369140625;

  forEach(document.querySelectorAll('.progress'), function (index, value) {
    percent = value.getAttribute('data-progress');
    value.querySelector('.fill').setAttribute('style', 'stroke-dashoffset: ' + ((100 - percent) / 100) * max);

    var j = 0;
    var setInt = setInterval(count, 20)
    function count(){
      if ( j == percent ) {
        clearInterval(setInt);
      } else {
        j++;
        value.querySelector('.value').innerHTML = j + '%';
      }
    }

  });
}
