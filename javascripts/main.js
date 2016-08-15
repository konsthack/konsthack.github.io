
$( document ).ready(function() {
    // show list of resent tests
    var list_active = $(".last li")|| 0;   
    var list_title = $(".titles li") || 0;  
    var list_url = $(".urls li") || 0; 
    var iter_div = $(".iteration") || 0;
    var iter_json = $(".iter") || 0;
    var iter_json = $(".post_title") || 0;    
    
    var html_str = "";
    
    if (iter_div != 0)  {
        console.dir(iter_div);
        $.each(iter_json , function(i, item) {
            var parsed = iter_json[i].innerText.replace(/=>/g, ':'); 
            obj = jQuery.parseJSON( parsed );
            iter_div[i].intertext = "iternations: "+ obj.length; 
            console.log(post_title[i].intertext)
        }); 
                
    }
        if (list_active != 0) {  
            $.each(list_active , function(i, item) {
                var parsed = list_active[i].innerText.replace(/=>/g, ':'); 
                obj = jQuery.parseJSON( parsed );

                 html_str =  html_str + 
                "<row><div class='col-sm-8'><div class='bs-callout bs-callout-"; 

                    if (obj.tests[0].Status == "Success") {
                        html_str = html_str +"success'>"; 
                    } else if (obj.tests[0].Status == "Fail") {
                        html_str = html_str +"danger'>"; 
                    } else {
                        html_str = html_str +"warning'>"; 
                    }    
                
                html_str = html_str + 
                "<h4><a href='"+list_url[i].innerText+"'>"+list_title[i].innerText+" - T_" + obj.tests.length + ": "+ obj.tests[0].testName + 
                 "</a><br> | <small> Last update: " + obj.tests[0].Date + " | Test Id:  "+  list_title[i].innerText + "_Test_" + obj.tests.length + " | </small>" + 
                "</h4><hr>"+
                "<p>Expect: " + obj.tests[0].Assert + "</p><hr>"+
                "<div class='alert alert-";
                    
                    if (obj.tests[0].Status == "Success") {
                        html_str = html_str +"info'>"; }
                    else {
                        html_str = html_str +"danger'>"; 
                    }                
                    
                    html_str = html_str + 
                        "<span > Progress: " + obj.tests[0].Progression + "%</span> | " +
                        "<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span> | " +
                        "<span> "+ obj.tests[0].Status + " </span> | " +
                        "<small> Last update: " + obj.tests[0].Date +"</small>"+ 
                        "</div></div></div></row>"
            }); 
            $(".last-target").html(html_str); 
      
        }
        
    // show a project detail 
    var some_json = $(".jsoncontent").text() || 0;
        // if exist
        if (some_json != 0) {
            var parsed = some_json.replace(/=>/g, ':'), 
            obj = jQuery.parseJSON( parsed ),
            html_str = "";
            var l = obj.tests.length;
            var title = $(".page_title").text().trim() || "love";
            $.each(obj.tests, function(i, item) {
                html_str =  html_str + 
                "<row><div class='col-sm-8'><div class='bs-callout bs-callout-"; 
                
                    if (obj.tests[i].Status == "Success") {
                        html_str = html_str +"success'>"; 
                    } else if (obj.tests[i].Status == "Fail") {
                        html_str = html_str +"danger'>"; 
                    } else {
                        html_str = html_str +"warning'>"; 
                    }    
                
                html_str = html_str + 
                "<h4>T_" + l + ": "+ obj.tests[i].testName + 
                 "<br> | <small> Last update: " + obj.tests[i].Date + " | Test Id:  "+ title + "_Test_" + l + " | </small>" + 
                "</h4><hr>"+
                "<p>Expect: " + obj.tests[i].Assert + "</p><hr>"+
                "<div class='alert alert-";
                    
                    if (obj.tests[i].Status == "Success") {
                        html_str = html_str +"info'>"; }
                    else {
                        html_str = html_str +"danger'>"; 
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
                    
    
                html_str = html_str + "</div></div><div class='col-sm-4'>";
                
                    if (obj.tests[i].Images.length > 0) {
                        html_str = html_str + "<div>";
                        $.each(obj.tests[i].Images, function(i, item) {
                            html_str = html_str + "<hr><a href="+item+"><img src="+item+" width='100%' ></a>";
                        });
                        html_str = html_str + "</div>";
    
                    } else {
                        console.log("no images");
                    }
                    
                html_str = html_str + "</div></row>";
                l = l - 1;
            });
            $(".test-target").html(html_str); 
        }
});
