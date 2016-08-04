console.log('This would be the main JS file.');
$( document ).ready(function() {
    console.log( "ready!" );
    var some_json = $(".jsoncontent").text(); 
    console.log( some_json );
    var obj = jQuery.parseJSON( some_json );
    console.log( obj.tests );
    console.log( some_json );
    
});



