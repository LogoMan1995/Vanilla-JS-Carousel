document.addEventListener('DOMContentLoaded', () => {
    let position = 0;
    let slidesToShow = 3;
    let slidesToScroll = 1;
    let container = document.querySelector('.slaider-container');
    let track = document.querySelector('.slaider-track');
    let items = document.querySelectorAll('.slaider-item');
    let itemsCount = items.length;
    let itemWidth = container.clientWidth / slidesToShow;
    let movePosition = slidesToScroll * itemWidth;

    items.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`;
    });

    document.querySelector('.slaider-prev').addEventListener('click', () => {
        position += movePosition;
        setPosition();
        checkBtns();
    });

    document.querySelector('.slaider-next').addEventListener('click', () => {
        position -= movePosition;
        setPosition();
        checkBtns();
    });

    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`;
    };

    const checkBtns = () => {
        const prevButton = document.querySelector('.slaider-prev');
        const nextButton = document.querySelector('.slaider-next');

        if (position === 0) {
            prevButton.disabled = true;
        } else {
            prevButton.disabled = false;
        }

        if (position <= -(itemsCount - slidesToShow) * itemWidth) {
            nextButton.disabled = true;
        } else {
            nextButton.disabled = false;
        }
    };

    checkBtns();
});

