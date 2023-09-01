const toggleSwitch = document.querySelector('.power-btn');
const ipod = document.querySelector('.ipod');
const screen = document.querySelector('.screen');

toggleSwitch.onclick = () => {

    screen.classList.toggle('active')

    toggleSwitch.classList.toggle('active');

    setTimeout(() => {

        ipod.classList.toggle('active');

    }, 500);

}
