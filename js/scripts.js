
(function() {
  $("button").click( function() {
  $.getJSON( "https://raw.githubusercontent.com/substack/node-browserify/master/package.json", function(obj) {

  $.each(obj, function(key,value) {
  $("#keys").append("<li>"+key+"</li>");


});

$.each(obj, function(key,value) {
if (typeof value === 'string' || value instanceof String){
   console.log(value);

   $("#values").append("<li>"+value+"</li>");

 }
else if ( value instanceof Array)
  {
    var len = value.length;
   console.log(len);
   $("#values").append("<li>"+len+"</li>");
  console.log("array");

} else if (typeof value === 'object'){
  console.log(value);
  var lenght = Object.keys(obj).length

  $("#values").append("<li>"+lenght+"</li>");

}




});

$.each(obj, function(key,value) {
$("#type").append("<li>"+key+"</li>");
$("#type").append("<li>"+value+"</li>");

});








});
});

})();
