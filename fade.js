$(document).ready(function() {
    $('body').addClass('fade-in');
});

$(document).on('click', 'a', function(event) {
    event.preventDefault();
    var newLocation = $(this).attr('href');
    $('body').removeClass('fade-in');

    setTimeout(function() {
        window.location = newLocation;
    }, 1);
});
