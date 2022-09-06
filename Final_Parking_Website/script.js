function toggle_state_1()
{
    var x = document.getElementById("ps_1_toggle");
    var y = document.getElementById("ps_1");
    if(x.innerHTML==="AVAILABLE")
    {
        x.innerHTML = "OCCUPIED";
        y.style.backgroundColor = "red";
        setTimeout(prompt_message(1,x,y),1000);
    }
}
function toggle_state_2()
{
    var x = document.getElementById("ps_2_toggle");
    var y = document.getElementById("ps_2");
    if(x.innerHTML==="AVAILABLE")
    {
        x.innerHTML = "OCCUPIED";
        y.style.backgroundColor = "red";
        setTimeout(prompt_message(2,x,y),1000);
    }
}
function toggle_state_3()
{
    var x = document.getElementById("ps_3_toggle");
    var y = document.getElementById("ps_3");
    if(x.innerHTML==="AVAILABLE")
    {
        x.innerHTML = "OCCUPIED";
        y.style.backgroundColor = "red";
        setTimeout(prompt_message(3,x,y),1000);
    }
}
function toggle_state_4()
{
    var x = document.getElementById("ps_4_toggle");
    var y = document.getElementById("ps_4");
    if(x.innerHTML==="AVAILABLE")
    {
        x.innerHTML = "OCCUPIED";
        y.style.backgroundColor = "red";
        setTimeout(prompt_message(4,x,y),1000);
    }
}

//prompt message
function prompt_message(slot,x,y)
{
    do
    {
        var veh_no = prompt("Enter your Vehicle No : ");

        if(veh_no==="")                                     //vehicle no hasn't been entered
            alert("Vehicle Number has not been entered \n \nPlease REENTER");

        if(veh_no === null)                     //user presses cancel button on prompt
        {
            //alert("You pressed cancel");
            x.innerHTML = "AVAILABLE";
            y.style.backgroundColor = "green";
            return;
        }
    }while(veh_no==="");

    localStorage.setItem("vehicle_no",veh_no);              //sending vehicle no to bill page
    localStorage.setItem("parking_slot",slot);

    send_data_1(veh_no,slot);
    send_data_2(slot);

    setTimeout(function() {
    window.location.href = "Bill_Receipt/bill_index.html";        //transfer user to bill page
    },1000);
}

function send_data_1(vehicle_no,park_slot)
{
    var http = new XMLHttpRequest();
    var url = 'https://api.thingspeak.com/update?api_key=ENK4C5ZQJIN4VLHB&field1=';

    var val = park_slot + "_" + vehicle_no;           //value to be send i.e. slot_vehicleno
    console.log(val);
    url = url+val;

    var params = 'orem=ipsum&name=binny';
    http.open('POST', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() {      //Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            //alert(http.responseText);
        }
    }
    http.send(params);
}

function send_data_2(park_slot)
{
    var http = new XMLHttpRequest();
    var url = 'https://api.thingspeak.com/update?api_key=F4N4BQHXL7WO6FSA&field1=';

    var val = park_slot + " " + "001";           //value to be send i.e. slot_vehicleno
    console.log(val);
    url = url+val;

    var params = 'orem=ipsum&name=binny';
    http.open('POST', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() {      //Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            //alert(http.responseText);
        }
    }
    http.send(params);
}