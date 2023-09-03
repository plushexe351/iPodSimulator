const helpBtn = document.querySelector('.help-btn');
const instructions = document.querySelector('.how-to-use');
const closeInstructions = document.querySelector('.close-instruction-window');

helpBtn.onclick = () => {

    instructions.classList.add('active');
    closeInstructions.classList.add('show');
    helpBtn.classList.add('hide');

}

closeInstructions.onclick = () => {

    instructions.classList.remove('active');
    closeInstructions?.classList.remove('show');
    helpBtn.classList.remove('hide');

}