//Filtro do Portifólio

$('filter-btn').on('click', function() {

    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'dsg-btn') {
      eachboxes('dsg', boxes)
    }

});

function eachboxes(type, boxes) {

    if(type == 'all') {
        $(boxes).fadeIn();
    } else {
        $(boxes).each(function() {
        if(!$(this).hasClass(type)) {
           $(this).fadeOut('slow');
        } else {
            $(this).fadeIn();
        }    

