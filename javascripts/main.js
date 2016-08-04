
$( document ).ready(function() {
    var some_json = $(".jsoncontent").text(); 
    console.log(some_json);
    console.log(typeof some_json)
    some_json.replace(/=/g, ':'); 
    some_json.replace(/>/g, ''); 
    console.log( some_json );
    var obj = jQuery.parseJSON( some_json );
    console.dir( obj.tests );
    console.dir( some_json );
    
});



