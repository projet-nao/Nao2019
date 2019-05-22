function updateBattery(battery_value){
    var size = "-2x";
    $("#connectionStatus").removeClass();
    if(battery_value >= 80){
        $("#batteryIcon").removeClass();
        $("#batteryIcon").addClass("fas fa-battery-full fa-stack"+size);
        $("#batteryIcon").css("color","rgb(255, 255, 255)");
        $("#connectionStatus").css("visibility","hidden");
    }else if(battery_value >= 60){
        $("#batteryIcon").removeClass();
        $("#batteryIcon").addClass("fas fa-battery-three-quarters fa-stack"+size);
        $("#batteryIcon").css("color","rgb(255, 255, 255)");
        $("#connectionStatus").css("visibility","hidden");
    }else if(battery_value >= 40){
        $("#batteryIcon").removeClass();
        $("#batteryIcon").addClass("fas fa-battery-half fa-stack"+size);
        $("#batteryIcon").css("color","rgb(255, 255, 255)");
        $("#connectionStatus").css("visibility","hidden");
    }else if(battery_value >= 20){
        $("#batteryIcon").removeClass();
        $("#batteryIcon").addClass("fas fa-battery-quarter fa-stack"+size);
        $("#batteryIcon").css("color","rgb(255, 255, 132)");
        $("#connectionStatus").css("visibility","hidden");
    }else if(battery_value >= 0){
        $("#batteryIcon").removeClass();
        $("#batteryIcon").addClass("fas fa-battery-empty fa-stack"+size);
        $("#batteryIcon").css("color","rgb(255, 0, 0)");
        $("#connectionStatus").css("visibility","visible");
        $("#connectionStatus").addClass("fas fa-exclamation-triangle fa-stack"+size);
        $("#connectionStatus").css("color","rgb(255, 136, 0)");
    }else {
        $("#batteryIcon").removeClass();
        $("#batteryIcon").addClass("fas fa-battery-empty fa-stack"+size);
        $("#connectionStatus").css("visibility","visible");
        $("#connectionStatus").addClass("fas fa-ban fa-stack"+size);
    }
}