
(function() {

  $("button").one('click',function() {
    var link = $('#link').val();
    $.getJSON(link,function(obj) {

// keys
    $.each(obj, function(key,value) {
    $("#keys").append("<tbody><tr><td>"+key+"</td></tr></tbody>");


});

$.each(obj, function(key,value) {
if (typeof value === 'string' || value instanceof String){
    console.log(value);
    $("#values").append("<tbody><tr ><td>"+value+"</td></tr></tbody>");

 }
 else if ( value instanceof Array){
    var len = value.length;
    console.log(len);
    $("#values").append("<tbody><tr ><td>"+len+"</td></tr></tbody>");
    console.log(value);

} else if (typeof value === 'object'){
    console.log(value);
    var lenght = Object.keys(value).length
    $("#values").append("<tbody><tr ><td>"+lenght+"</td></tr></tbody>");

}
});
// types
$.each(obj, function(key,value) {
  if (typeof value === 'string' || value instanceof String){
    console.log(value);
    var type = "String"
    $("#type").append("<tbody><tr ><td>"+type+"</td></tr></tbody>");

   }
  else if ( value instanceof Array){
    var len = value.length;
    console.log(len);
    var type = "Array";
    $("#type").append("<tbody><tr ><td>"+type+"</td></tr></tbody>");
    console.log(value);

  } else if (typeof value === 'object'){
    console.log(value);
    var type = "Object"
    $("#type").append("<tbody><tr ><td>"+type+"</td></tr></tbody>");

  }

});
});

});
})();
