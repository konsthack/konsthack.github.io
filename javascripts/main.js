
$( document ).ready(function() {
    var some_json = $(".jsoncontent").text(), 
        parsed = some_json.replace(/=>/g, ':'), 
        obj = jQuery.parseJSON( parsed );
        var html_str = ""
        var l = obj.tests.length;
        var title = $(".page_title").text().trim() || "love";
        $.each(obj.tests, function(i, item) {
            html_str = html_str + 
            "<div class='bs-callout bs-callout-'; 
            
                if (obj.tests[i].Progression == "Success") {
                    html_str = html_str +'info>'; }
                else {
                    html_str = html_str +'danger>'; 
                }    
            
                html_str = html_str + 
                "<h4>T_" + l + ": "+ obj.tests[i].testName + 
                 " | <small> Last update: " + obj.tests[i].Date + " | Test Id:  "+ title + "_Test_" + l + " | </small>" + 
                "</h4><hr>"+
                "<h5>Assertion: " + obj.tests[i].Assert + "</h5><hr>"+
                    "<div class='alert alert-";
                
                if (obj.tests[i].Progression == "Success") {
                    html_str = html_str +'info>'; }
                else {
                    html_str = html_str +'danger>'; 
                }                
                
                html_str = html_str + 
                    "<span > Progress: " + obj.tests[i].Progression + "%</span> | " +
                    "<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span> | " +
                    "<span> "+ obj.tests[i].Status + " </span> | " +
                    "<small> Last update: " + obj.tests[i].Date +"</small>"+ 
                    "</div>"+
                "<div class='progress'>"+
                    "<div class='progress-bar progress-bar-success progress-bar-striped' role='progressbar' aria-valuenow='" + obj.tests[i].Progression +"' aria-valuemin='0' aria-valuemax='100' style='width:" + obj.tests[i].Progression +"%'>"+
                        "<span class='sr-only'>" + obj.tests[i].Progression +"% Complete (success)</span>"+
                    "</div>"+
                "</div>";
                if (obj.tests[i].Comments.length > 0) {
                    html_str = html_str + "<hr><div>Comment(s): <ul>";
                    $.each(obj.tests[i].Comments, function(i, item) {
                        html_str = html_str + "<li>" + item + "</li>";
                    });
                    html_str = html_str + "</ul></div><hr>";
                } else {
                    console.log("no comments");
                }
                
                if (obj.tests[i].Links.length > 0) {
                    html_str = html_str + "<div>Link(s): <ul>";
                    $.each(obj.tests[i].Links, function(i, item) {
                        html_str = html_str + "<li><a href="+item+">"+item+"</a></li>";
                    });
                    html_str = html_str + "</ul></div><hr>";
                } else {
                    console.log("no links");
                }
                
                if (obj.tests[i].Images.length > 0) {
                    html_str = html_str + "<div>";
                    $.each(obj.tests[i].Images, function(i, item) {
                        html_str = html_str + "<img src="+item+" width='30%' >";
                    });
                    html_str = html_str + "</div><hr>";

                } else {
                    console.log("no images");
                }
            html_str = html_str + "</div>";
            l = l - 1;
        });
        $(".test-target").html(html_str); 
});
