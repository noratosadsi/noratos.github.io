$(document).ready(function() {

  $('#js-submitBuscar').click(function(event) {
    event.preventDefault();
    var buscadorCadena = $('#js-buscador').val().trim();
    var todosItems, regex, temporal;

    if ( buscadorCadena.length > 2 ) {
      
      todosItems = $('#js-main').find('*').contents().filter(function() {
        return this.nodeType === 3;
      });
      
      regex = new RegExp(buscadorCadena, 'gi');
      
          todosItems.each(function() {
        if ( this.textContent.match(regex) ) {
          temporal = this.textContent.replace(regex, "<span class='textoBuscado'>" + buscadorCadena + "</span>");
          $(this).replaceWith(temporal);       
        }

      });
      
    }

  });

});