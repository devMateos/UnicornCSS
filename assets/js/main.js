const wrapper = document.querySelector(".wrapper");


function iceCreamFalls() {
    let iceCreamContainer = document.querySelector('.ice-cream-container');
    let position = iceCreamContainer.getBoundingClientRect().top;

    if (position <= 100) {
        iceCreamContainer.classList.add('ice-cream-animation');
    }
};

window.addEventListener('scroll', iceCreamFalls);
wrapper.addEventListener('scroll', iceCreamFalls);

