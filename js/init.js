
function initSize(){
  wWidth = window.innerWidth;
  wHeight = window.innerHeight;
}


$(document).ready(function(){
  initSize();

  // 메인 스크롤시 위치잡기
  $(".main .article-wrap").height(wHeight - 240);


  // 레이아웃 잡기
  //$(".banner, .banner-wrap").height(wHeight);


  $(".main h1 a").click(function(e){
    e.preventDefault();

    $(".main .article-wrap").addClass("load-left");
    setTimeout(function(){
      $(".main .article-wrap").removeClass("load-left");
    }, 1200);
  });

  $("article .work a").click(function(e){
    e.preventDefault();
    $(".main .article-wrap").addClass("load-left");
    var moveUrl = $(this).attr("href");
    setTimeout(function(){
      window.location.href = moveUrl;
    }, 500);
  });



  // 메뉴
  $(".open-btn").click(function(e){
    e.preventDefault();
    $("nav").animate({
      right: 0,
      opacity: 1
    }, 500);
  });

  $(".close-btn").click(function(e){
    e.preventDefault();
    $("nav").animate({
      right: "-100%",
      opacity: 0
    }, 500);
  });


  // 상단 위로 이동
  $(".top-btn").click(function(e){
    e.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, 700);
  });






  $(window).scroll(function(){
    wHeightHalf = wHeight / 2;
    var thisScroll = $(window).scrollTop();

    if( thisScroll > (wHeightHalf * 1) ) mainScrollAction(".article-2 .work-view img", ".article-2 .work-desc .desc-head", ".article-2 .work-desc .desc-body");
    if( thisScroll > (wHeightHalf * 3) ) mainScrollAction(".article-3 .work-view img", ".article-3 .work-desc .desc-head", ".article-3 .work-desc .desc-body");
    if( thisScroll > (wHeightHalf * 5) ) mainScrollAction(".article-4 .work-view img", ".article-4 .work-desc .desc-head", ".article-4 .work-desc .desc-body");
    if( thisScroll > (wHeightHalf * 7) ) mainScrollAction(".article-5 .work-view img", ".article-5 .work-desc .desc-head", ".article-5 .work-desc .desc-body");
  });


  // $(window).resize(function(){
  //   initSize();
  //
  //   $(".banner").css({
  //     "width": wWidth,
  //     "height": wHeight
  //   });
  // });





}); // Document ready end


// main scroll action
function mainScrollAction(wV, wH, wB) {
  $(wV).animate({
    marginTop: 0,
    opacity: 1
  }, 1000, function(){
    return false;
  });

  $(wH).animate({
    top: "50px",
    opacity: 1
  }, 1000, function(){
    return false;
  });

  $(wB).animate({
    opacity: 1
  }, 1000, function(){
    return false;
  });
}
