$(document).ready(function() {
  $("form").submit(function(event) {

      event.preventDefault();
      var numOfSanitizer = $("select#sanitizer").val();
      var numOfFormula = $("select#formula").val();
      var numOfPickled = $("select#pickled").val();
      var numOfCollector = $("select#collector").val();
      var numOfKittenJr = $("select#kittenJr").val();
      var numOfKandle = $("select#kandle").val();

      $("#output1").text(numOfSanitizer);
      $(".output").text(numOfFormula);
      $(".output").text(numOfPickled);
      $(".output").text(numOfCollector);
      $(".output").text(numOfKittenJr);
      $(".output").text(numOfKandle);
  });

});
