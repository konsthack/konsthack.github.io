
$( document ).ready(function() {
    var some_json = $(".jsoncontent").text(), 
        parsed = some_json.replace(/=>/g, ':'), 
        obj = jQuery.parseJSON( parsed );
        var html_str = ''
        $.each(obj.tests, function(i, item) {
            html_str = html_str + "<div><h2>"+  obj.tests[i].testName + "</h2><hr><div class='bs-callout bs-callout-danger'> "+ obj.tests[i].Assert + " </div><hr><div class='alert alert-anger' role='alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'>"+ obj.tests[i].Status +"</span></div></div>";
        });
        $(".test-target").html(html_str); 
});
