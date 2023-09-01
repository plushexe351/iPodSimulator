
const buttonRing = document.querySelector('.button-ring');
const controlBtns = document.querySelectorAll('.control-btn');
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

            document.querySelector('.flex-screen').classList.toggle('split-screen');


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

    if (menuItems[i].classList.contains('active') && event.keyCode == 13)

        document.querySelector('.flex-screen').classList.toggle('split-screen');

    if (event.keyCode == 40) {

        i = i == menuItems.length - 1 ? 0 : i += 1;

        menuItems.forEach(function callback(ele, index) {

            if (ele.classList.contains('active')) {

                ele.classList.remove('active');

            }

            menuItems[i].classList.add('active');

            menuItems[i].appendChild(itemSelector);

        })


    }
    else if (event.keyCode == 38) {

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


controlBtns.forEach(controlBtn => {

    controlBtn.addEventListener('mousedown', () => {

        if (controlBtn.getAttribute('id') == 'menu') gradientDirection = `to bottom`

        else if (controlBtn.getAttribute('id') == 'previous') gradientDirection = 'to right'

        else if (controlBtn.getAttribute('id') == 'play-pause') gradientDirection = 'to top'

        else gradientDirection = 'to left'

        if (ipod.classList.contains('active')) {

            buttonRing.style.background = `linear-gradient(${gradientDirection}, #d7d7d7, #ffffff 90%)`

            controlBtn.classList.toggle('press');

        }

    })
    controlBtn.addEventListener('mouseup', () => {

        controlBtn.classList.remove('press');

        buttonRing.style.background = `#ffffff`

    })

});
