
$( document ).ready(function() {
    var some_json = $(".jsoncontent").text(), 
        parsed = some_json.replace(/=>/g, ':'), 
        obj = jQuery.parseJSON( parsed );
        var html_str = ''
        $.each(obj.tests, function(i, item) {
            html_str = html_str + data[i].testName;
        });
        
    $(".test-target").html(html_str); 
 
});



