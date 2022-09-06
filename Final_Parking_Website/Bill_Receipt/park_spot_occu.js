send_park_occu();


function send_park_occu()
{
    
    var http2 = new XMLHttpRequest();
    var url = 'https://api.thingspeak.com/update?api_key=C423HAFYOQEE1D8F&field2=';

    var ps = localStorage.getItem("parking_slot");

    var val = ps + " " + "001";           //value to be send i.e. slot_vehicleno
    console.log(val);
    url = url+val;

    var params2 = 'orem=ipsum&name=binny';
    http2.open('POST', url, true);
    console.log("shishir");
    //Send the proper header information along with the request
    http2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http2.onreadystatechange = function() {      //Call a function when the state changes.
        if(http2.readyState == 4 && http2.status == 200) {
            alert(http2.responseText);
        }
    }
    http2.send(params2);
}