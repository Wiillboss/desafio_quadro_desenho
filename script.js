let currentCollor = 'black';

document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});

function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color');
    currentCollor = color;

    document.querySelector('.color.active').classList.remove('acitve');
    e.target.classList.add('active');
}