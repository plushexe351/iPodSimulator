
const buttonRing = document.querySelector('.button-ring');
const controlBtns = document.querySelectorAll('.control-btn');
const menuBtn = document.querySelector('#menu-btn');
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

menuBtn.addEventListener('click', () => {

    if (menuItems[i].classList.contains('active'))

        document.querySelector('.flex-screen').classList.remove('split-screen');
})

let gradientDirection;

const menuItems = [
    document.getElementById('music'),
    document.getElementById('videos'),
    document.getElementById('photos'),
    document.getElementById('podcasts'),
    document.getElementById('extras'),
    document.getElementById('settings'),
    document.getElementById('shuffle-songs'),
    document.getElementById('now-playing'),
]

const itemSelector = document.createElement('i');

itemSelector.classList.add('fa-solid');

itemSelector.classList.add('menu-item-selector');

itemSelector.classList.add('fa-chevron-right');

menuItems[0].appendChild(itemSelector);



let i = 0;
let opindex = 0;
menuItems.forEach(ele => {

    ele.addEventListener('click', () => {

        if (ele.classList.contains('active'))

            document.querySelector('.flex-screen').classList.add('split-screen');


        menuItems.forEach(ele => {

            ele.classList.remove('active');

        })

        ele.classList.add('active');

        ele.appendChild(itemSelector);

        i = parseInt(ele.dataset.index);

    })

})

// keyboard support

document.body.addEventListener('keydown', (event) => {

    if (menuItems[i].classList.contains('active') && event.key === "Enter")

        document.querySelector('.flex-screen').classList.add('split-screen');

    if (event.key === "ArrowDown") {

        i = i == menuItems.length - 1 ? 0 : i += 1;

        menuItems.forEach(function callback(ele, index) {

            if (ele.classList.contains('active')) {

                ele.classList.remove('active');

            }

            menuItems[i].classList.add('active');

            menuItems[i].appendChild(itemSelector);

        })


    }
    else if (event.key === "ArrowUp") {

        i = i == 0 ? menuItems.length - 1 : i -= 1;

        menuItems.forEach(function callback(ele, index) {

            if (ele.classList.contains('active')) {

                ele.classList.remove('active');

            }

            menuItems[i].classList.add('active');

            menuItems[i].appendChild(itemSelector);


        })

    }

})

let mouseEvent1;
let mouseEvent2;
controlBtns.forEach(controlBtn => {

    if (navigator.maxTouchPoints > 1) {
        mouseEvent1 = 'mouseenter';
        mouseEvent2 = 'mouseout';
    }
    else {
        mouseEvent1 = 'mousedown';
        mouseEvent2 = 'mouseup';
    }


    controlBtn.addEventListener(mouseEvent1, () => {

        if (controlBtn.getAttribute('id') == 'menu-btn') gradientDirection = `to bottom`

        else if (controlBtn.getAttribute('id') == 'previous-btn') gradientDirection = 'to right'

        else if (controlBtn.getAttribute('id') == 'play-pause-btn') gradientDirection = 'to top'

        else gradientDirection = 'to left'

        if (ipod.classList.contains('active')) {

            buttonRing.style.background = `linear-gradient(${gradientDirection}, #d7d7d7, #ffffff 90%)`

            controlBtn.classList.toggle('press');

        }

    })
    controlBtn.addEventListener(mouseEvent2, () => {

        controlBtn.classList.remove('press');

        buttonRing.style.background = `#ffffff`

    })

});

