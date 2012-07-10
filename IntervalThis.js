window.setInterval("runThis()", 3000);

var duration1 = 1500;
var duration2 = 1500;

runThis = function() {
    $('.intThis').animate({
        opacity: 1
    }, duration1, function() {
        $(this).animate({
            opacity: 0
        }, duration2);
    });
};

runThis();
​