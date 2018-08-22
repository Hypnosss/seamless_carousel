var n = 1;

$("#images > img:nth-child(1)").addClass("current");
$("#images > img:nth-child(2)").addClass("enter");


setInterval(function(){
    $("#images > img:nth-child(" + n + ")").addClass("leave").removeClass("current");
    $("#images > img:nth-child(" + ((n+1)%4===0?4:(n+1)%4) + ")").addClass("current").removeClass("enter");
    $("#images > img:nth-child(" + ((n+2)%4===0?4:(n+2)%4) + ")").addClass("enter").removeClass("leave");
    n = (n+1)%4===0?4:(n+1)%4;
}, 3000);