const toggleSwitch = document.querySelector('.power-btn');
const ipod = document.querySelector('.ipod');
const iPodScreen = document.querySelector('.screen');

toggleSwitch.onclick = () => {

    iPodScreen.classList.toggle('active')

    toggleSwitch.classList.toggle('active');

    setTimeout(() => {

        ipod.classList.toggle('active');

    }, 500);

}
