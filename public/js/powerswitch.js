const toggleSwitch = document.querySelector('.power-btn');
const ipod = document.querySelector('.ipod');
const screen = document.querySelector('.screen');

toggleSwitch.onclick = () => {
    screen.classList.toggle('active')
    setTimeout(() => {
        ipod.classList.toggle('active');
    }, 500);
}
toggleSwitch.addEventListener('mouseenter', () => {
    if (ipod.classList.contains('active'))
        toggleSwitch.style.color = 'rgb(256,0,0)';
    else
        toggleSwitch.style.color = 'rgb(0,256,0)';
})
toggleSwitch.addEventListener('mouseleave', () => {
    toggleSwitch.style.color = 'unset';
})