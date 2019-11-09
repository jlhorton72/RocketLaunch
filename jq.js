var launch = "https://launchlibrary.net/1.4/launch?next=5";
            
var httpRequest = new XMLHttpRequest();
httpRequest.open("get", launch);
httpRequest.send();
httpRequest.onreadystatechange = aFunction;
var nxtLnch;

function aFunction(){    
    // var li = document.getElementsByTagName("li");
    // alert (li.length);
    if (httpRequest.readyState == 4 && httpRequest.status == 200){
        var jsObject = JSON.parse(httpRequest.responseText); 
        
            // this one did not build the list
            // would need to add ul and li to index.html
        // for(var i = 0; i < li.length; i++){
        //     var numLaunch = jsObject.launches[i];
        //     if (numLaunch != undefined){
        //         li[i].innerHTML = numLaunch.name + " | " + numLaunch.net;
        //     } // end of if
        //     else{
        //         li[i].innerHTML = "";
        //     }
        // } // end of for loop

            // this one builds the list
        var strOut = "<ul>";
        for(var i = 0; i < 5; i++){
            var numLaunch = jsObject.launches[i];
            if (numLaunch != undefined){
            strOut += "<li>" + numLaunch.name + " | " + numLaunch.net + "</li><br>";
            } // end of if
            else {
                strOut += "</ul>";
            } // end of else
        } // end of for loop
        
        document.getElementById('launches').innerHTML = strOut;
        nxtLnch = "Next Launch: " + jsObject.launches[0].net;
        document.getElementById('lead').innerHTML = nxtLnch;
    } // end of if

} // end of aFunction


$(document).ready(function(){

    $("button.next5").click(function(){
        httpRequest.abort();
        httpRequest.open("GET", "https://launchlibrary.net/1.4/launch?next=5" );
        httpRequest.send();
        document.getElementById("lead").innerHTML = nxtLnch;
    });

    $("button.falcon").click(function(){
        // launch = "https://launchlibrary.net/1.4/launch?name=falcon";
        // nextPage(launch);
        httpRequest.abort();
        httpRequest.open("GET", "https://launchlibrary.net/1.4/launch?name=falcon" );
        httpRequest.send();
        document.getElementById("lead").innerHTML = nxtLnch;   
    });

    $("button.ariane").click(function(){
        httpRequest.abort();
        // launch = "https://launchlibrary.net/1.4/launch?name=ariane";
        httpRequest.open("GET", "https://launchlibrary.net/1.4/launch?name=ariane");
        httpRequest.send();
        document.getElementById("lead").innerHTML = nxtLnch; 
    });

    $("button.lone").click(function(){
        httpRequest.abort();
        // launch = "https://launchlibrary.net/1.4/launch?next=5&name=launcherone";
        httpRequest.open("GET", "https://launchlibrary.net/1.4/launch?name=LauncherOne");
        httpRequest.send();
        document.getElementById("lead").innerHTML = nxtLnch; 
    });
}) // end of jquery stuff

