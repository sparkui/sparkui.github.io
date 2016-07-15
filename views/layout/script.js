//the JS source code
window.onload = function() {
  //todo
  document.querySelector('.uispark-layout__sidebar__toggle--js').addEventListener('click', function(evt){
    var sidebarNode = evt.srcElement.parentElement;
    sidebarNode.classList.toggle("uispark-layout__sidebar--on");
  });
};
