$(document).ready(function(){
    $('.slider').slick({
        fade: true,
        autoplay: true,
        speed:4800,
        arrows: false,
    });

    $('.menu').click(e => {
        e.preventDefault();
        window.scroll({
            top: $(`#${e.target.dataset.target}`).offset()['top'],
            behavior:'smooth'
        });
    });

    $('#icono-menu').click(e => {
        $('#main-menu').toggle( "slow");
    });

});