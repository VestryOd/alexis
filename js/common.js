$(document).ready(function() {
   
    var win_w = $(window).width();
    var win_h = $(window).height();
    console.log(win_w);
    console.log(win_h);
    
    //header nav offset top
    var navOffsetTop = $("#navigation").offset().top;
    if (navOffsetTop > 75) {
        $("#navigation").removeClass("no_scroll").addClass("scrolled");
        $("#navigation #logo a").css("color", "#3D3E48");
    } else {
        $("#navigation").removeClass("scrolled").addClass("no_scroll");
        $("#navigation #logo a").css("color", "#fff");
    };
    
    //header nav scroll
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 75) {
            $("#navigation").removeClass("no_scroll").addClass("scrolled");
            $("#navigation #logo a").css("color", "#3D3E48");
        } else {
            $("#navigation").removeClass("scrolled").addClass("no_scroll");
            $("#navigation #logo a").css("color", "#fff");
        }
    });
//    //smoth scroll
    $("#navigation ul").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top-75;//анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
    
    var teamMembersSet = $("#team .team_member");
    var meberInfoSet = $("#team .member_info");
    
    $("#team_members").on("click", ".team_member", function() {
        var n = teamMembersSet.index(this);
        console.log(n);
        $("#team .team_member .triangle").fadeOut(500, function() {
            $(teamMembersSet[n]).find(".triangle").fadeIn(500);
        });
        $(meberInfoSet).fadeOut(500, function() {
            $(meberInfoSet[n]).fadeIn(500);
        });
    });
    
    var menuLink = $("#menu_link");
    var menu = $("#header #navigation ul");
    console.log(menu);
    
    menuLink.click(function() {
        menuLink.toggleClass("menu_active");
        menu.toggleClass("menu_show");
    });
    
    menu.on("click", "a", function() {
        menuLink.toggleClass("menu_active");
        menu.toggleClass("menu_show");
    });
});