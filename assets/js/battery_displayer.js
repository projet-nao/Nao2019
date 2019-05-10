var battery_value = 0 ;
console.log("battery_value : "+battery_value);
setInterval(function() {
    updateBattery(battery_value,true);
    battery_value +=10;
    if(battery_value == 100){battery_value = 0;}
}, 500);


async function updateBattery(battery_value){
    $("#connectionStatus").removeClass();
    if(battery_value >= 80){
        $("#batteryIcon").removeClass();
        $("#batteryIcon").addClass("fas fa-battery-full fa-stack-2x");
        $("#batteryIcon").css("color","rgb(255, 255, 255)");
    }else if(battery_value >= 60){
        $("#batteryIcon").removeClass();
        $("#batteryIcon").addClass("fas fa-battery-three-quarters fa-stack-2x");
        $("#batteryIcon").css("color","rgb(255, 255, 255)");
    }else if(battery_value >= 40){
        $("#batteryIcon").removeClass();
        $("#batteryIcon").addClass("fas fa-battery-half fa-stack-2x");
        $("#batteryIcon").css("color","rgb(255, 255, 255)");
    }else if(battery_value >= 20){
        $("#batteryIcon").removeClass();
        $("#batteryIcon").addClass("fas fa-battery-quarter fa-stack-2x");
        $("#batteryIcon").css("color","rgb(255, 255, 132)");
    }else if(battery_value >= 0){
        $("#batteryIcon").removeClass();
        $("#batteryIcon").addClass("fas fa-battery-empty fa-stack-2x");
        $("#batteryIcon").css("color","rgb(255, 0, 0)");
        $("#connectionStatus").addClass("fas fa-exclamation-triangle fa-stack-2x");
        $("#connectionStatus").css("color","rgb(255, 136, 0)");
    }else {
        $("#batteryIcon").removeClass();
        $("#batteryIcon").addClass("fas fa-battery-empty fa-stack-2x");
        $("#connectionStatus").addClass("fas fa-ban fa-stack-2x");
    }
}