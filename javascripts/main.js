
$( document ).ready(function() {
    var some_json = $(".jsoncontent").text(), 
        parsed = some_json.replace(/=>/g, ':'), 
        obj = jQuery.parseJSON( parsed );
        var html_str = ""
        $.each(obj.tests, function(i, item) {
            html_str = html_str + 
            "<div class='bs-callout bs-callout-danger'>" + 
            "<h3>Test: " + obj.tests[i].testName + 
            "</h3><hr>"+
            "<h4>Assertion: " + obj.tests[i].Assert + "</h4><hr>"+
                "<div class='alert alert-danger'>" +
                    "<span> Progress: " + obj.tests[i].Progression + "%</span> | " +
                    "<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span> | " +
                    "<span> "+ obj.tests[i].Status + " </span> | " +
                    "<small> Last update: " + obj.tests[i].Date +"</small>"+ 
                    "</div>"+
                "<div class='progress'>"+
                    "<div class='progress-bar progress-bar-success progress-bar-striped' role='progressbar' aria-valuenow='" + obj.tests[i].Progression +"' aria-valuemin='0' aria-valuemax='100' style='width:" + obj.tests[i].Progression +"%'>"+
                        "<span class='sr-only'>" + obj.tests[i].Progression +"% Complete (success)</span>"+
                    "</div>"+
                "</div>";
                if (obj.tests[i].Images.length > 0) {
                    html_str = html_str + "<div>"
                    $.each(obj.tests.Images, function(i, item) {
                    html_str = html_str + "<img src="+item+" >";
                    html_str = html_str + "</div>"

                } else {
                    console.log("no images")
                }
            html_str = html_str + "</div>";
        });
        $(".test-target").html(html_str); 
});
