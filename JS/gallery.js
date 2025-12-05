//jquery per me add classes

$(document).ready(function () {

    const $images = $(".images_container");


    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {

            if ($(entry.target).hasClass("images_container") && entry.isIntersecting) {
                $(entry.target).addClass("show");
                observer.unobserve(entry.target);
            }

        });
    });

    // qe me observe krejt fotot
    $images.each(function () {
        observer.observe(this);
    });

});
