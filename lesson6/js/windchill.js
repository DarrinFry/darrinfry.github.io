
function doInputOutput() {
    var temp = parseInt(document.getElementById("temp1").innerHTML);
    var wind = parseInt(document.getElementById("wind1").innerHTML);
    var result = windChill(temp, wind);
    document.getElementById("windchill").innerHTML = result;
}

function windChill(tempF, speed){
    if (tempF <= 50 && speed >= 3){
        var s = Math.pow(speed, 0.16);
        var t = tempF;
        var chill = 35.74 + (0.6215*t) - (35.75 * s) + (0.4275*t * s);
        chill = Math.round(chill.toFixed(1))
        return chill + "ºF";
    }
    else {
        return "N/A"
    }
}

doInputOutput()