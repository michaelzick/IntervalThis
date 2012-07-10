window.setInterval("intThis()", 3000);

var duration1 = 1500;
var duration2 = 1500;

intThis = function() {
    $('.intThis').animate({
        opacity: 1
    }, duration1, function() {
        $(this).animate({
            opacity: 0
        }, duration2);
    });
};

intThis();