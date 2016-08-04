
$( document ).ready(function() {
    var some_json = $(".jsoncontent").text(), 
        parsed = some_json.replace(/=>/g, ':'), 
        obj = jQuery.parseJSON( parsed );
        var html_str = ""
        $.each(obj.tests, function(i, item) {
            html_str = html_str + 
                            "<h2>" + obj.tests[i].testName + 
                            "</h2><hr>"+
                            "<div class='bs-callout bs-callout-danger'>" + 
                            "<h4>Assertion: " + obj.tests[i].Assert + "</h4>"+
                                "<div class='alert alert-danger'>" +
                                    "<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>" +
                                    "<span> "+ obj.tests[i].Status + " </span>" +
                                    "<small> Last update" + obj.tests[i].Date +"</small>"+ 
                                    "</div>"+
                                "<div class='progress'>"+
                                    "<div class='progress-bar progress-bar-success progress-bar-striped' role='progressbar' aria-valuenow='40' aria-valuemin='0' aria-valuemax='100' style='width: 40%'>"+
                                        "<span class='sr-only'>40% Complete (success)</span>"+
                                    "</div>"+
                                "</div>"+
                            "</div>";
        });
        $(".test-target").html(html_str); 
});
