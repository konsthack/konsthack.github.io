
$( document ).ready(function() {
    console.log( "ready!" );
    $("=>").replaceAll(":");
   
    var some_json = $(".jsoncontent").text(); 
    
    console.log( some_json );
    var obj = jQuery.parseJSON( some_json );
    console.log( obj.tests );
    console.log( some_json );
    
});



