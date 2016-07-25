//the JS source code
window.onload = function() {
  //todo

  window.addEventListener('scroll', function() {
    var scrollTop = document.body.scrollTop;
    if (scrollTop >= 50) {
      document.querySelector(".uispark-floatBanner__banner").classList.add("uispark-floatBanner-fixed");
    } else {
      document.querySelector(".uispark-floatBanner__banner").classList.remove("uispark-floatBanner-fixed");
    }
  }, false);

};
