const songs = document.querySelectorAll('.songs');

let songindex = -1;


const musicPlayer = document.querySelector('.music-player');


songs.forEach(song => {

    song.addEventListener('click', () => {

        songs.forEach(song => {

            if (song.classList.contains('active'))

                song.classList.remove('active');

        })

        musicPlayer.classList.add('menu-item-active');

        // menuBtn.addEventListener('click', () => {
        //     if (musicPlayer.classList.contains('menu-item-active'))
        //         musicPlayer.classList.remove('menu-item-active');

        // })

        song.classList.add('active');

        song.appendChild(itemSelector);

        songindex = parseInt(song.dataset.index);

    })

})

// keyboard support

