const buttonRing = document.querySelector('.button-ring');
const controlBtns = document.querySelectorAll('.control-btn');
const menuBtn = document.querySelector('#menu-btn');
const itemStatus = document.querySelector('.menu-item-brief');
const artistPreview = document.querySelector('.song-artist-preview');
const statusBar = document.querySelector('.status-bar');
const menuItemsContainer = document.querySelector('.menu-items');
const musicScreen = document.querySelector('.music-screen');
const shufflePlayScreen = document.querySelector('.shuffle-play-screen');
const NowPlayingScreen = document.querySelector('.now-playing-screen');
const menuItemsScreen = document.querySelectorAll('.menu-item-screen');
const menuItems = document.querySelectorAll('.menu-item');
const flexScreen = document.querySelector('.flex-screen');
const previewScreen = document.querySelector('.preview-screen');

let splitScreen = false;

let shuffle = false;

let f = 0;

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

menuBtn.addEventListener('click', () => {

    shuffle = false;

    if (musicPlayer.classList.contains('menu-item-active') && f == 0) {

        menuItemsScreen.forEach(screen => {

            screen.style.display = 'unset';

        })

        musicPlayer.classList.remove('menu-item-active');

    }

    else {

        menuItemsScreen.forEach(screen => {

            screen.style.display = 'unset';

        })

        musicPlayer.classList.remove('menu-item-active');

        flexScreen.style.display = 'unset';

        previewScreen.style.display = 'flex';

        menuItems.forEach(ele => {

            ele.classList.remove('active2');

        })

        removeSplitScreen();

        menuItemsScreen.forEach(screen => {

            screen.classList.remove('menu-item-active');


        })
    }



})

document.body.addEventListener('keydown', (e) => (e.key == 'Backspace' ? menuBtn.click() : null))

const itemSelector = document.createElement('i');

itemSelector.classList.add('fa-solid');

itemSelector.classList.add('menu-item-selector');

itemSelector.classList.add('fa-chevron-right');


let index = -1;

function displayItemBrief(item) {

    // itemStatus.textContent = item.dataset.brief;

    // itemStatus.innerHTML = item == menuItems[3] ? `${songTitle.textContent}-${artist.textContent}` : item.dataset.brief || '';

    if (item == menuItems[3]) {
        itemStatus.textContent = songTitle.textContent;
        artistPreview.textContent = artist.textContent;
        previewScreen.style.justifyContent = 'center';
    }
    else {
        previewScreen.style.justifyContent = 'flex-start';
        itemStatus.textContent = item.dataset.brief || '';
        artistPreview.textContent = '';
    }


}

menuItems.forEach(ele => {

    ele.addEventListener('click', () => {

        displayItemBrief(ele);

        while (imgContainer.hasChildNodes()) {

            imgContainer.removeChild(imgContainer.firstChild);

        }

        addSplitScreen();

        if (ele.classList.contains('active2') && splitScreen) {

            if (ele != menuItems[1]) {
                flexScreen.style.display = 'none';
                previewScreen.style.display = 'none';
            }


            ele != menuItems[1] ? resetStatusBar() : null;
            ele == menuItems[0] ? menuItemsScreen[0].classList.add('menu-item-active') : null;
            // ele == menuItems[2] ? menuItemsScreen[1].classList.add('menu-item-active') : null;

            if (ele != menuItems[0] && ele != menuItems[1]) {
                // menuItemsScreen[2].classList.add('menu-item-active');
                f = 1;
                if (ele == menuItems[2]) {

                    shuffle = true;

                    songindex = Math.floor(Math.random() * (songs.length));

                    console.log(songindex);

                    musicPlayer.classList.add('menu-item-active');

                    songs[songindex].click();

                    songs[songindex].click();

                }
                else
                    musicPlayer.classList.add('menu-item-active');

                itemStatus.textContent = '';
                artistPreview.textContent = '';
            }
            else f = 0;

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

    if (menuItemsScreen[0].classList.contains('menu-item-active')) {

        if (event.key === "Enter") {

            songs[songindex].click();

        }


        if (event.key === "ArrowDown") {

            songindex = songindex == songs.length - 1 ? 0 : songindex += 1;

            songs.forEach(function callback(song, index) {

                song.classList.remove('active');

            })

            songs[songindex].classList.add('active');

            songs[songindex].appendChild(itemSelector);


        }

        else if (event.key === "ArrowUp") {

            songindex = songindex == 0 ? songs.length - 1 : songindex -= 1;

            songs.forEach(function callback(song, index) {

                song.classList.remove('active');

            })

            songs[songindex].classList.add('active');

            songs[songindex].appendChild(itemSelector);


        }
    }
    else {
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

