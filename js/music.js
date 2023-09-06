const songs = document.querySelectorAll('.songs');

const albumArt = document.querySelector('.music-player > .album-art');

const songTitle = document.querySelector('.song-title');

const artist = document.querySelector('.artist');

const currentSong = document.getElementById('current-song');

const songStatus = document.getElementById('status');

const playPauseBtn = document.getElementById('play-pause-btn');

const forwardBtn = document.getElementById('forwards-btn');

const previousBtn = document.getElementById('previous-btn');

const songCount = document.getElementById('song-count');

let songindex = -1;

const musicPlayer = document.querySelector('.music-player');

albumArt.src = 'preview/music-icon.png';

function displaySongStatus(status) {

    songStatus.textContent = status;

    setTimeout(() => {

        songStatus.textContent = 'iPod';

    }, 5000);

}

playPauseBtn.addEventListener('click', () => {

    if (currentSong.classList.contains('play')) {

        currentSong.pause();

        currentSong.classList.replace('play', 'pause');

        displaySongStatus('Paused');

    }

    else if (currentSong.classList.contains('pause')) {

        currentSong.play();

        currentSong.classList.replace('pause', 'play');

        displaySongStatus('Now Playing')

    }

})



forwardBtn.addEventListener('click', () => {

    if (songindex == songs.length - 1) songindex = -1;

    console.log(songindex);

    songindex++;

    songs[songindex].click();

    songs[songindex].click();

})

previousBtn.addEventListener('click', () => {

    if (songindex == 0) songindex = songs.length;

    songindex--;

    songs[songindex].click();

    songs[songindex].click();

})

document.addEventListener('keydown', (event) => {

    if (event.which == 32) {

        if (musicPlayer.classList.contains('menu-item-active')) {

            playPauseBtn.click();

        }

    }

})



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

            songTitle.textContent = song.textContent.split('-')[0];

            artist.textContent = song.textContent.split('-')[1];

            albumArt.src = `music/albumart${songindex + 1}.png`;

            albumArt.style.padding = `unset`;

            currentSong.src = `music/song${songindex + 1}.mp3`;

            currentSong.play();

            currentSong.classList.add('play');

            songCount.textContent = `${songindex + 1} of ${songs.length}`

            displaySongStatus('Now Playing');


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

