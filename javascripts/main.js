
$( document ).ready(function() {
    var some_json = $(".jsoncontent").text(); 
    console.log(some_json);
    console.log(typeof some_json)
    var parsed = some_json.replace(/=>/g, ':'); 
     
    console.log(parsed );
    var obj = jQuery.parseJSON( parsed );
    console.dir( obj.tests );
    console.dir( some_json );
    
});



