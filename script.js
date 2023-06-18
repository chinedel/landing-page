// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  for (var i = 0; i < anchorLinks.length; i++) {
    anchorLinks[i].addEventListener('click', function(e) {
      e.preventDefault();
      var targetElement = document.querySelector(this.getAttribute('href'));
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
