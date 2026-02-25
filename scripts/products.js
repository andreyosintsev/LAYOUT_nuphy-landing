const slider = document.querySelector('.products__cards');

slider.addEventListener('wheel', (e) => {
    e.preventDefault();
    slider.scrollLeft += e.deltaY*2;
    console.log(slider.scrollLeft);
}, { passive: false });