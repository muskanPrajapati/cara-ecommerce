const menuLi = ' ul li ';
$(menuLi).click(function () {

    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).children('p').hide(100);
        return;
    }
    // reset
    $(menuLi).removeClass('active');
    $(menuLi).children('p').hide(500);
   

    // set current active
    $(this).addClass('active');
    $(this).children('p').fadeIn(1500);
});