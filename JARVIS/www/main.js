$(document).ready(function () {
    $('.text').textillate({
        loop: true,
        sync: true,
        in:{
            effect: "pulseIn",
        },
        out:{
            effect: "pulseOut",
        },
    })
});