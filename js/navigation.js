const buttonRing = document.querySelector('.button-ring');
const controlBtns = document.querySelectorAll('.control-btn');
const menuBtn = document.querySelector('#menu-btn');
const itemStatus = document.querySelector('.menu-item-brief');
const statusBar = document.querySelector('.status-bar');
const menuItemsContainer = document.querySelector('.menu-items');
const musicScreen = document.querySelector('.music-screen');

let splitScreen = false;

const menuItems = [
    document.getElementById('music'),
    // document.getElementById('videos'),
    // document.getElementById('photos'),
    document.getElementById('podcasts'),
    // document.getElementById('extras'),
    // document.getElementById('settings'),
    document.getElementById('shuffle-songs'),
    document.getElementById('now-playing'),
]

function addSplitScreen() {

    document.querySelector('.flex-screen').classList.add('split-screen');
    statusBar.classList.add('split-screen');

    splitScreen = true;

}

function removeSplitScreen() {

    if (menuItems[index].classList.contains('active')) {

        document.querySelector('.flex-screen').classList.remove('split-screen');

        statusBar.classList.remove('split-screen');

    }

    splitScreen = false;

}

function resetStatusBar() {

    statusBar.classList.remove('split-screen');

}

menuBtn.addEventListener('click', removeSplitScreen);

menuBtn.addEventListener('click', () => {


    menuItems.forEach(ele => {

        ele.classList.remove('active2');

    })

    removeSplitScreen();
    musicScreen.classList.remove('menu-item-active');


})

document.body.addEventListener('keydown', (e) => (e.key == 'Escape' ? menuBtn.click() : null))

const itemSelector = document.createElement('i');

itemSelector.classList.add('fa-solid');

itemSelector.classList.add('menu-item-selector');

itemSelector.classList.add('fa-chevron-right');

// menuItems[0].appendChild(itemSelector);

let index = -1;

function displayItemBrief(item) {

    itemStatus.textContent = item.dataset.brief;

}

menuItems.forEach(ele => {

    ele.addEventListener('click', () => {

        displayItemBrief(ele)

        while (imgContainer.hasChildNodes()) {

            imgContainer.removeChild(imgContainer.firstChild);

        }

        addSplitScreen();

        if (ele.classList.contains('active2') && splitScreen) {

            musicScreen.classList.add('menu-item-active');
            resetStatusBar();

        }

        menuItems.forEach(ele => {

            if (ele.classList.contains('active'))

                ele.classList.remove('active');

        })

        menuItems.forEach(ele => {

            if (ele.classList.contains('active2'))

                ele.classList.remove('active2');

        })

        ele.classList.add('active');

        ele.classList.add('active2');

        ele.appendChild(itemSelector);

        index = parseInt(ele.dataset.index);

    })

})

// keyboard support

document.body.addEventListener('keydown', (event) => {

    if (event.key === "Enter") {

        menuItems[index].click();

    }


    if (event.key === "ArrowDown") {

        index = index == menuItems.length - 1 ? 0 : index += 1;

        menuItems.forEach(function callback(ele, index) {

            ele.classList.remove('active');

        })

        menuItems[index].classList.add('active');

        menuItems[index].appendChild(itemSelector);

    }

    else if (event.key === "ArrowUp") {

        index = index == 0 ? menuItems.length - 1 : index -= 1;

        menuItems.forEach(function callback(ele, index) {

            ele.classList.remove('active');

        })

        menuItems[index].classList.add('active');

        menuItems[index].appendChild(itemSelector);

    }

})

let mouseEvent1;
let mouseEvent2;
let gradientDirection;

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

        buttonRing.style.background = `#ffffff`;

    })

});

