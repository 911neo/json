
(function() {

  $("button").click( function() {
    var link = $('#link').val();
    $.getJSON(link,function(obj) {

// keys
    $.each(obj, function(key,value) {
    $("#keys").append("<tr class="info"><td>"+key+"</td></tr>");


});

$.each(obj, function(key,value) {
if (typeof value === 'string' || value instanceof String){
    console.log(value);
    $("#values").append("<tr class="info"><td>"+value+"</td></tr>");

 }
 else if ( value instanceof Array){
    var len = value.length;
    console.log(len);
    $("#values").append("<tr class="info"><td>"+len+"</td></tr>");
    console.log(value);

} else if (typeof value === 'object'){
    console.log(value);
    var lenght = Object.keys(value).length
    $("#values").append("<tr class="info"><td>"+lenght+"</td></tr>");

}
});
// types
$.each(obj, function(key,value) {
  if (typeof value === 'string' || value instanceof String){
    console.log(value);
    var type = "String"
    $("#type").append("<tr class="info"><td>"+type+"</td></tr>");

   }
  else if ( value instanceof Array){
    var len = value.length;
    console.log(len);
    var type = "Array";
    $("#type").append("<tr class="info"><td>"+type+"</td></tr>");
    console.log(value);

  } else if (typeof value === 'object'){
    console.log(value);
    var type = "Object"
    $("#type").append("<tr class="info"><td>"+type+"</td></tr>");

  }

});
});
});
})();
