let allButtons = $("#buttons > span");
var currentImgIndex = 1;
var n = 0;
let $images = $("#images").children("img");
let $firstCopy = $images.eq(0).clone(true);
let $lastCopy = $images.eq($images.length - 1).clone(true);
$("#images").append($firstCopy);
$("#images").prepend($lastCopy);
$("#images").css({
    transform:"translateX(-500px)"
});

//点击对应按钮跳转图片
for(let i = 0; i < allButtons.length; i++){
    $(allButtons[i]).on("click",function(x){
        n = $(x.currentTarget).index();
        if(currentImgIndex === 1 && n === allButtons.length - 1){
            //console.log("41");
            $("#images").css({
                transform:"translateX(0px)"
            }).one("transitionend",function(){
                $("#images").hide().offset();
                $("#images").css({
                    transform:"translateX(" + -500 * ($(x.currentTarget).index() + 1) + "px)"
                }).show();
            })
        }else if(currentImgIndex === allButtons.length && n === 0){
            $("#images").css({
                transform:"translateX(" + -500 * (allButtons.length + 1) + "px)"
            }).one("transitionend",function(){
                $("#images").hide().offset();
                $("#images").css({
                    transform:"translateX(-500px)"
                }).show();
            })
        }else{
            $("#images").css({
                transform:"translateX(" + -500 * ($(x.currentTarget).index() + 1) + "px)"
            })
        }
        currentImgIndex = n + 1;   
    })
}

//自动轮播
var setTimer = setInterval(function(){
    $(allButtons[n % allButtons.length]).trigger("click");
    n++;
}, 2000);

//鼠标移入/移出或切出/切入网页时打断/继续轮播
$("#images,#buttons").on("mouseenter",function(){
    window.clearInterval(setTimer);
    console.log("enter");
})

$("#images,#buttons").on("mouseleave",function(){
    setTimer = setInterval(function(){
        $(allButtons[n % allButtons.length]).trigger("click");
        n++;;
        console.log(n);
    }, 2000);
    console.log("leave");
})

document.addEventListener("visibilitychange",function(){
    console.log(document.hidden);
    if(document.hidden){
        window.clearInterval(setTimer);
    }else{
        setTimer = setInterval(function(){
            $(allButtons[n % allButtons.length]).trigger("click");
            n++;
        }, 2000);
    }
})