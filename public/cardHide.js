window.addEventListener('resize', function() {
  // Получаем все элементы с классом "cardContent"
  var cardContents = document.querySelectorAll('.cardContent');

  // Проходимся по каждому элементу
  cardContents.forEach(function(cardContent) {
    var parentWidth = cardContent.closest('.dashboard_container-history_links').offsetWidth; // Получаем ширину родительского элемента
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
});