let img = document.querySelector('.img-box');
let text = document.querySelector('.text');
let textActive = document.querySelector('.active');

img.addEventListener('click', () => {
    text.classList.add('active')
})
text.addEventListener('click', () => {
    text.innerHTML = 'а что так можно было?';
})
