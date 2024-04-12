window.addEventListener('resize', function() {
  var parentWidth = document.querySelector('.dashboard_container-history_links').offsetWidth;
  var cardContent = document.getElementById('cardContent');
  var originalContent = cardContent.getAttribute('data-original-content');
  
  if (!originalContent) {
    originalContent = cardContent.textContent;
    cardContent.setAttribute('data-original-content', originalContent);
  }
  
  if (parentWidth < 400) {
    var firstFour = originalContent.substr(0, 4);
    var lastFour = originalContent.substr(-4);
    cardContent.textContent = firstFour + '...' + lastFour;
  } else {
    cardContent.textContent = originalContent; // Восстанавливаем исходное содержимое
  }
});