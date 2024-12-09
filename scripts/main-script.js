$(document).ready(function () {
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
    const carousel = document.querySelector(".carousel");
    const underlines = document.querySelectorAll(".underline");

    let currentImageIndex = 1;
    underlines[currentImageIndex].classList.add("active");

    const images = [
        "./img/history.jpg",
        "./img/priroda.jpg",
        "./img/gosti.jpeg",
        "./img/eda.jpg",
        "./img/fonstola.ru_178378.jpg",
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
});
