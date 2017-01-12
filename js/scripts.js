$(document).ready(function() {
  $("form").submit(function(event) {

      event.preventDefault();
      var numOfSanitizer = $("select#sanitizer").val();
      var numOfFormula = $("select#formula").val();
      var numOfPickled = $("select#pickled").val();
      var numOfCollector = $("select#collector").val();
      var numOfKittenJr = $("select#kittenJr").val();
      var numOfKandle = $("select#kandle").val();

      $("#output1").toggle();
      $("#output1").text(numOfSanitizer);
      $("#output2").text(numOfFormula);
      $("#output3").text(numOfPickled);
      $("#output4").text(numOfCollector);
      $("#output5").text(numOfKittenJr);
      $("#output6").text(numOfKandle);
  });

});
