
function scrollToElement(id){
  document.getElementById('Projects');
  var topPos = document.getElementById(id).offsetTop;

  window.scrollTo({
  top: topPos,
  behavior: 'smooth'
  });
}
