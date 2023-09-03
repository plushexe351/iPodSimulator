const toggleSwitch = document.querySelector('.power-btn');
const ipod = document.querySelector('.ipod');
const iPodScreen = document.querySelector('.screen');
const showinstructions = document.querySelector('.instruction');


toggleSwitch.onclick = () => {


    iPodScreen.classList.toggle('active');

    toggleSwitch.classList.toggle('active');

    setTimeout(() => {

        showinstructions.classList.toggle('active');

        ipod.classList.toggle('active');

    }, 500);

}
