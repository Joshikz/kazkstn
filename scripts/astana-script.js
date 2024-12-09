$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $("#scrollToTopButton").fadeIn();
        } else {
            $("#scrollToTopButton").fadeOut();
        }
    });
    $("#scrollToTopButton").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });

    $(`#carousel-prev`).mouseover(function () {
        $(`.chevron-left`).css("fill", "#ffed2d");
    });
    $(`#carousel-prev`).mouseout(function () {
        $(`.chevron-left`).css("fill", "#00abc2");
    });
    $(`#carousel-next`).mouseover(function () {
        $(`.chevron-right`).css("fill", "#ffed2d");
    });
    $(`#carousel-next`).mouseout(function () {
        $(`.chevron-right`).css("fill", "#00abc2");
    });

    const prevButton = document.getElementById("carousel-prev");
    const nextButton = document.getElementById("carousel-next");
    const carousel = document.querySelector(".carousel-content");
    const underlines = document.querySelectorAll(".underline");

    let currentImageIndex = 0;
    underlines[currentImageIndex].classList.add("active");

    const images = [
        "../img/astana/celinograd1.jpg",
        "../img/astana/celinograd2.jpg",
        "../img/astana/celinograd3.jpg",
        "../img/astana/celinograd4.jpg",
        "../img/astana/celinograd5.jpg",
    ];

    function changeBackgroundImage() {
        carousel.style.backgroundImage = `url(${images[currentImageIndex]})`;

        underlines.forEach((underline) => {
            underline.classList.remove("active");
        });
        underlines[currentImageIndex].classList.add("active");
    }

    prevButton.addEventListener("click", () => {
        currentImageIndex--;
        if (currentImageIndex < 0) {
            currentImageIndex = images.length - 1;
        }
        changeBackgroundImage();
    });
    nextButton.addEventListener("click", () => {
        currentImageIndex++;
        if (currentImageIndex >= images.length) {
            currentImageIndex = 0;
        }
        changeBackgroundImage();
    });

    
});
