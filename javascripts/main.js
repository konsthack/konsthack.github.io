
$( document ).ready(function() {
    console.log( "ready!" );
    var some_json = $(".jsoncontent").text(); 
    var some_json = some_json("=>").replaceAll(":");
   
    console.log( some_json );
    var obj = jQuery.parseJSON( some_json );
    console.log( obj.tests );
    console.log( some_json );
    
});



