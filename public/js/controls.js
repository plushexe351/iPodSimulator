
const buttonRing = document.querySelector('.button-ring');
const controlBtns = document.querySelectorAll('.control-btn');
let gradientDirection;
controlBtns.forEach(controlBtn => {
    controlBtn.addEventListener('mousedown', () => {
        if (controlBtn.getAttribute('id') == 'menu')
            gradientDirection = `to bottom`
        else if (controlBtn.getAttribute('id') == 'previous')
            gradientDirection = 'to right'
        else if (controlBtn.getAttribute('id') == 'play-pause')
            gradientDirection = 'to top'
        else gradientDirection = 'to left'

        buttonRing.style.background = `linear-gradient(${gradientDirection}, #d7d7d7, #ffffff 90%)`
        controlBtn.classList.toggle('press');
    })
    controlBtn.addEventListener('mouseup', () => {
        controlBtn.classList.remove('press');
        buttonRing.style.background = `#ffffff`
    })
});