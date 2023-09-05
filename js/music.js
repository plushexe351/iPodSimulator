const songs = document.querySelectorAll('.songs');

let songindex = -1;


const musicPlayer = document.querySelector('.music-player');


songs.forEach(song => {

    song.addEventListener('click', () => {

        while (imgContainer.hasChildNodes()) {

            imgContainer.removeChild(imgContainer.firstChild);

        }

        if (song.classList.contains('active')) {

            menuItemsScreen.forEach(screen => {
                screen.style.display = 'none';
            })
            musicPlayer.classList.add('menu-item-active');
        }

        songs.forEach(song => {

            if (song.classList.contains('active'))

                song.classList.remove('active');

        })

        songs.forEach(song => {

            if (song.classList.contains('active2'))

                song.classList.remove('active2');

        })


        song.classList.add('active');

        song.classList.add('active2');

        song.appendChild(itemSelector);

        songindex = parseInt(song.dataset.index);

    })

})

// keyboard support

