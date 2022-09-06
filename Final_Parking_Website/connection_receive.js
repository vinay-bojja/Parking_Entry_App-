receive_data();             //function call before page loading
var all_spots_full = true;
setTimeout(function check_all_spots()
{
    console.log(all_spots_full);
    if(all_spots_full)          //all parking spots are full
    {
        alert('SORRY!!! ALL PARKING SPOTS ARE FULL!!!');
    }
},4000);

function receive_data()
{
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://api.thingspeak.com/channels/719292/feeds.json?api_key=6I5U4WWDLW91SI99&results=5', true);

    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response);

        if (request.status >= 200 && request.status < 400) 
        { 
            console.log(data);
            
            var flag1,flag2,flag3,flag4;
            flag1=flag2=flag3=flag4=0;

            for(var i=4;i>=0;i--)
            {
                    var parking_spot = data.feeds[i].field1.split(" ")[0];
                    var available = data.feeds[i].field1.split(" ")[1];         //000 = available , 001 = unavailable

                    console.log(parking_spot+"_"+available+"_"+data.feeds[i].entry_id);

                    if(parking_spot==="1" && flag1===0)
                    {
                        console.log(i);
                        park_1(available);
                        flag1=1;
                    }
                    if(parking_spot==="2" && flag2===0)
                    {
                        console.log(i);
                        park_2(available);
                        flag2=1;
                    }
                    if(parking_spot==="3" && flag3===0)
                    {
                        console.log(i);
                        park_3(available);
                        flag3=1;
                    }
                    if(parking_spot==="4" && flag4===0)
                    {
                        console.log(i);
                        park_4(available);
                        flag4=1;
                    }
                }
            
        } 
        else 
        {
            console.log('error');
        }
    }
    // Send request
    request.send();
}

function park_1(available)
{
    if(available === "000")         //available
    {
        document.getElementById("ps_1").style.background = "green";   
        document.getElementById("ps_1_toggle").innerHTML = "AVAILABLE";  
        all_spots_full = false;  
    }
    else                            //occupied
    {
        document.getElementById("ps_1").style.background = "red";
        document.getElementById("ps_1_toggle").innerHTML = "OCCUPIED";     
    }
}

function park_2(available)
{
    
    if(available === "000")         //available
    {
        document.getElementById("ps_2").style.background = "green";     
        document.getElementById("ps_2_toggle").innerHTML = "AVAILABLE";
        all_spots_full = false;   
    }
    else                            //occupied
    {
        document.getElementById("ps_2").style.background = "red";
        document.getElementById("ps_2_toggle").innerHTML = "OCCUPIED";     
    }
}
function park_3(available)
{
    if(available === "000")         //available
    {
        document.getElementById("ps_3").style.background = "green";   
        document.getElementById("ps_3_toggle").innerHTML = "AVAILABLE"; 
        all_spots_full = false;   
    }
    else                            //occupied
    {
        document.getElementById("ps_3").style.background = "red";
        document.getElementById("ps_3_toggle").innerHTML = "OCCUPIED";     
    }
}
function park_4(available)
{
    if(available === "000")         //available
    {
        document.getElementById("ps_4").style.background = "green";   
        document.getElementById("ps_4_toggle").innerHTML = "AVAILABLE";  
        all_spots_full = false;  
    }
    else                            //occupied
    {
        document.getElementById("ps_4").style.background = "red";
        document.getElementById("ps_4_toggle").innerHTML = "OCCUPIED";     
    }
}
