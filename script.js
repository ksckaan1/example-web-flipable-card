var card = document.querySelector('.wordCard');
card.addEventListener('click', () => {
    card.classList.toggle('flipped');
});
var okBtn = document.querySelector(".okBtn");

okBtn.addEventListener('click', () => {
    card.style.transform = "translateY(-100px)";
    card.style.opacity = "0";
    okBtn.style.transform = "translateY(100px)";
    okBtn.style.opacity = "0";
});
