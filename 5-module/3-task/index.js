function initCarousel() {
    const carousel = document.querySelector('.carousel');
    const arrowRight = document.querySelector('.carousel__arrow_right');
    const arrowLeft = document.querySelector('.carousel__arrow_left');
    const caruselInner = document.querySelector('.carousel__inner');
    const caruselInnerWidth = caruselInner.offsetWidth;
    const slides = document.querySelectorAll('.carousel__slide');


    let i = 1;
    if (i === 1) {
        arrowLeft.style.display = 'none';
    }

    carousel.addEventListener('click', function(event) {
        let className = event.target.closest('div').className;
        let value = caruselInnerWidth * i;
        if (className.includes('carousel__arrow_right')) {
            caruselInner.style.transform = `translateX(${-value}px)`;
            i++;

            console.log(i);
        }

        if (className.includes('carousel__arrow_left')) {
            i--;
            value = caruselInnerWidth * (i - 1);
            caruselInner.style.transform = `translateX(${-value}px)`;

            console.log(i);
        }

        if (i != 1) {
            arrowLeft.style.display = '';
        } else {
            arrowLeft.style.display = 'none';
        }

        if (i === slides.length) {
            arrowRight.style.display = 'none';
        } else {
            arrowRight.style.display = '';
        }

    });
}