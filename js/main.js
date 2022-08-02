"use strict";

//============= 漢堡按鈕 =============//
$(function(){
    $(".hamburger_icon").on("click", function(e){
        e.preventDefault();
        $(this).toggleClass("-on"); //漢堡按鈕叉叉切換
        $("body").toggleClass("show_menu"); //漢堡按鈕選單切換
        $(".mask_trigger").toggleClass("mask"); //遮罩切換
    });
});

//============= 燈箱 =============//
//點擊遮罩
$(".other").on("click", function () {
    $(".overlay").fadeOut(100);
});

//點擊使用者fontawsome的icon
$(".lightbox_btn").on("click", function (e) {
    e.preventDefault();
    var href = $(this).attr("href");
    $(href).fadeIn(1000);
});

//點擊fontawsome的叉叉
$(".overlay_close").on("click", function () {
    $(".overlay").fadeOut(1000);
});

//點擊lightbox的登入按鈕
$(".login").on("click", function () {
    $(".signup_form").removeClass("-on");
    $(".login_form").removeClass("-off");
});

//點擊lightbox的註冊按鈕
$(".signup").on("click", function () {
    $(".login_form").addClass("-off");
    $(".signup_form").addClass("-on");
});

//============= 往上滑按鈕 =============//
$(function () {
    var $win = $(window);
    var $backtotop = $(".back_to_top");

    // 當使用者滾動到離頂部200像素時，展示回到頂部按鈕
    $win.scroll(function () {
        if ($win.scrollTop() > 200) {
            $backtotop.show();
        } else {
            $backtotop.hide();
        }
    });

    // 當使用者點擊按鈕時，通過動畫效果返回頭部
    $backtotop.click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });
});