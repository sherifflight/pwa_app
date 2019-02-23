$(document).ready(function () {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    window.addEventListener('resize', function() {
        windowWidth = $(window).width();
        windowHeight = $(window).height();
        clearBackground();
        updateBackground();
    });

    updateBackground();

    function updateBackground()
    {
        var rowsCount = windowHeight/80;
        var colsCount = windowWidth/100;

        var type = '';
        for (var i = 1; i <= rowsCount; i++) {
            if (i & 1) {
                type = 'even';
            } else {
                type = 'noteven';
            }
            $(".wrapper").append("<div class='row " + i + " " + type + "'></div>");

            for (var j = 1; j <= colsCount; j++) {
                $(".row." + i).append("<div class='hexagon "+ j + "'></div>");
            }
        }
    }

    function clearBackground() {
        $(".wrapper").empty();
    }
});