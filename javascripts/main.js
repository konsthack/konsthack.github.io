
$( document ).ready(function() {
    var some_json = $(".jsoncontent").text(), 
        parsed = some_json.replace(/=>/g, ':'), 
        obj = jQuery.parseJSON( parsed );
        var html_str = ""
        $.each(obj.tests, function(i, item) {
            html_str = html_str + 
                            "<h2>" + obj.tests[i].testName + 
                            "<small> Last update" + obj.tests[i].Date +"</small>"+ 
                            "</h2><hr>"+
                            "<div class='bs-callout bs-callout-danger'>" + 
                            "<h4>Assertion: " + obj.tests[i].Assert + "</h4>"+
                            "<div class='alert alert-danger'>" +
                                "<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>" +
                                "<span> "+ obj.tests[i].Status + " </span>" +
                                "</div>"+
                            "</div>";
        });
        $(".test-target").html(html_str); 
});
