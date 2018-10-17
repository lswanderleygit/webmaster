$(function(){

    $('nav.menu-mobile i').click(function(){
        $('nav.menu-mobile > ul').slideToggle('slow');
        // $(this).parent().find('ul:not(.submenu-mobile)').slideToggle();

    })

})