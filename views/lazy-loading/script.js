//the JS source code
window.onload = function() {
  //todo


  window.addEventListener('DOMContentLoaded', lazyLoadImages)
  window.addEventListener('load', lazyLoadImages)
  window.addEventListener('resize', lazyLoadImages)
  window.addEventListener('scroll', lazyLoadImages)

  function lazyLoadImages () {
    var images = document.querySelectorAll(".uispark-lazyLoading__wrapper img[data-src]"),
    item;

    //[].forEach.call(images, function (item) {
    //});

    images.forEach(function (item) {
      if (isElementInViewport(item)) {
        item.setAttribute('src', item.getAttribute('data-src'))
        item.removeAttribute('data-src')

        console.log(item.getAttribute('src').replace(/images\//, '') + ' '+ 'loaded')
      }
    })

    if (images.length == 0) {
      window.removeEventListener("DOMContentLoaded", lazyLoadImages);
      window.removeEventListener("load", lazyLoadImages);
      window.removeEventListener("resize", lazyLoadImages);
      window.removeEventListener("scroll", lazyLoadImages);
    }


  }

  function isElementInViewport (el) {

    var rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
  }


};

