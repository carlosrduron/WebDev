document.addEventListener("DOMContentLoaded", function() {
    var lens = document.getElementsByClassName("sliderLens")[0];
    var trail = document.getElementsByClassName("sliderTrail")[0];
    var frame = document.getElementsByClassName("sliderFrame");
    var images = document.querySelectorAll("[data-srcset], [data-src]");
    var load = 0;
    var direction = 1;
    var slideIndex = 0;
    var currentSlide = 0;
    var timeRef = null;

    var pointHolder = document.createElement("div");
    pointHolder.className = "pointHolder";
    lens.append(pointHolder);

    console.log("Imagenes" + images.length);
    //LOAD
    for (var i = 0; i < images.length; i++) {
        var currentImg = images[i];
        if ('srcset' in currentImg.dataset) {
            currentImg.srcset = currentImg.dataset.srcset;
        }
        if ('src' in currentImg.dataset) {
            currentImg.addEventListener('load', function(e) {
                load -= 1;
                if (load == 0) {
                    console.log("Animacion del slider");
                    initSlider();
                }
            });
            load += 1;
            currentImg.src = currentImg.dataset.src;
        }
    }

    //FUNCIONES
    function initSlider() {
        trail.style.width = (frame.length * 100) + "vw";
        for (var i = 0; i < frame.length; i++) {
            console.log("Punteros");
            var newPointer = document.createElement("div");
            newPointer.className = "pointer";
            newPointer.dataset.index = (i);
            newPointer.addEventListener("click", onPointerClick.bind(this));
            pointHolder.append(newPointer);
        }
        tick();
    }

    function onPointerClick(e) {
        e.preventDefault();
        e.stopPropagation();
        var pointerIndex = Number(e.target.dataset.index);
        clearTimeout(timeRef);
        moveTo(pointerIndex);
        tick();
    }

    function moveTo(index) {
        trail.style.left = (index * -100) + "vw";
        currentSlide = index;
    }

    function tick() {
        timeRef = setTimeout(
            function() {
                if (direction == 1 && slideIndex == (frame.length - 1)) {
                    direction = -1;
                }
                if (direction == -1 && slideIndex == 0) {
                    direction = 1;
                }
                var nextSlide = slideIndex + direction;
                moveSliderTo(nextSlide);
                tick();
            },
            5000
        )
    }

    function moveSliderTo(slideTo) {
        trail.style.left = (slideTo * -100) + "vw";
        slideIndex = slideTo;
    }
})