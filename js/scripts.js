
        //When DOM loaded we attach click event to button
        $(document).ready(function() {

            //after button is clicked we download the data
            $('.button').click(function(){

                //start ajax request
                $.ajax({
                  var url ='https://raw.githubusercontent.com/substack/node-browserify/master/package.json',
                    //force to handle it as text
                    dataType: "text",
                    success: function(data) {

                        //data downloaded so we call parseJSON function
                        //and pass downloaded data
                        var json = $.parseJSON(data);
                        //now json variable contains data in json format
                        //let's display a few items
                        $('#results').html('Plugin name: ' + json.name + '<br />Author: ' + json.author.name);
                    }
                });
            });
        });
