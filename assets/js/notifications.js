function closeNotification(numNotif){
    var idNotif= "#notification"+numNotif;
    var notifications = $(idNotif);
    if(notifications.length == 1){
        notifications.remove();
    }else{
        console.log("err in notifications selection");
    }
}

var numNotif=0;
function newNegativeNotification(message){
    var notifications = $(".notifications");
    numNotif++;
    var notification ="<div id=\"notification"+numNotif+"\"class=\"nao negative message\">\
        <i class=\"fas fa-exclamation-circle fa-2x\" style=\"margin-right: 10px;\"></i>\
        <div>"+message+"</div>\
        <i class=\"fas fa-times close-notification\" style=\"left:0px\" onclick=\"closeNotification("+numNotif+")\"></i></div>";
    notifications.prepend(notification);
    setTimeout("closeNotification("+numNotif+")",10000);
}

function newPositiveNotification(message){
    var notifications = $(".notifications");
    numNotif++;
    var notification ="<div id=\"notification"+numNotif+"\"class=\"nao positive message\">\
        <i class=\"fas fa-exclamation-circle fa-2x\" style=\"margin-right: 10px;\"></i>\
        <div>"+message+"</div>\
        <i class=\"fas fa-times close-notification\" style=\"left:0px\" onclick=\"closeNotification("+numNotif+")\"></i></div>";
    notifications.prepend(notification);
    setTimeout("closeNotification("+numNotif+")",10000);
}

function newNeutralNotification(message){
    var notifications = $(".notifications");
    numNotif++;
    var notification ="<div id=\"notification"+numNotif+"\"class=\"nao neutral message\">\
        <i class=\"fas fa-exclamation-circle fa-2x\" style=\"margin-right: 10px;\"></i>\
        <div>"+message+"</div>\
        <i class=\"fas fa-times close-notification\" style=\"left:0px\" onclick=\"closeNotification("+numNotif+")\"></i></div>";
    notifications.prepend(notification);
    setTimeout("closeNotification("+numNotif+")",10000);
}