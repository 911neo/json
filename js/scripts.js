
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
  console.log(value);

} else if (typeof value === 'object'){
  console.log(value);
  var lenght = Object.keys(obj).length

  $("#values").append("<li>"+lenght+"</li>");

}




});

$.each(obj, function(key,value) {
  if (typeof value === 'string' || value instanceof String){
     console.log(value);
    var type = "String"
     $("#type").append("<li>"+type+"</li>");

   }
  else if ( value instanceof Array)
    {
      var len = value.length;
     console.log(len);
     var type = "Array";
     $("#type").append("<li>"+type+"</li>");
    console.log(value);

  } else if (typeof value === 'object'){
    console.log(value);
    var type = "Object"
    var lenght = Object.keys(obj).length

    $("#type").append("<li>"+type+"</li>");

  }





});








});
});

})();
