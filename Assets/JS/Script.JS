
// Manejo de Evento
var cardLinks = document.querySelectorAll('.card-link');
// console.log(cardLinks);
cardLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    window.location.href = './Detalles.html';
  });
});
// manejo del dom cn js
// QuerySelectorAll selecciona todos los elementos. En este caso todos los que tienen clase nav-link.... marcando la pagina activa
var links = document.querySelectorAll('.nav-link');
console.log(links);
links.forEach(function(link) {
  if (link.href === window.location.href) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
}); 

