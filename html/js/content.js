
document.getElementById("onoff").addEventListener("click",function(){send('onoff')});
document.getElementById("minus").addEventListener("click",function(){send('bminus')});
document.getElementById("plus").addEventListener("click",function(){send('bplus')});
document.getElementById("white").addEventListener("click",function(){send('white')});
document.getElementById("change").addEventListener("click",function(){send('cc')});

$(document).ready(function() {
    update();
});

function send(action) {
    $.get("http://pokepi/smartroom/api/lights/send/" + action);
}

function update() {
    if(document.hasFocus()) {
        $.get("http://pokepi/smartroom/api/sensors/getSensorData", function(data, status){    
            $("#light").asPieProgress('go', data["lightLevel"]/5.3);
            $("#hum").asPieProgress('go', data["humidity"]);
            $("#tempval").html(Math.trunc(data["analogTemperature"]) + '&#176;C');
            $("#temp").asPieProgress('go', data["analogTemperature"]);
        });
    }

    setTimeout(update, 1000);
}
