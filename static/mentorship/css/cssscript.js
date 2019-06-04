var angle = 0;
setInterval(function() {
    $("#center-icon")
        .css('-webkit-transform', 'rotate('+angle+'deg)')
        .css('-moz-transform', 'rotate('+angle+'deg)')
        .css('-ms-transform', 'rotate('+angle+'deg)');
    angle++; angle++; angle++;
}, 50);
