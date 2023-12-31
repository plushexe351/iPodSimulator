const imgContainer = document.querySelector('.preview-screen');
const duplicates = document.querySelectorAll('.preview-screen img');

let canCoverflow = false;

function createPreviewImg(src, className) {
    while (imgContainer.hasChildNodes())
        imgContainer.removeChild(imgContainer.firstChild);
    let previewImg = document.createElement('img');
    previewImg.src = src;
    previewImg.classList.add(className);
    imgContainer.appendChild(previewImg);
}

function coverflow() {
    createPreviewImg('music/albumart1.png', 'album-art');
    setTimeout(() => {
        canCoverflow ? createPreviewImg('music/albumart2.png', 'album-art') : null
    }, 5000);
    setTimeout(() => {
        canCoverflow ? createPreviewImg('music/albumart3.png', 'album-art') : null;
    }, 10000);
    setTimeout(() => {
        canCoverflow ? createPreviewImg('music/albumart4.png', 'album-art') : null;
    }, 15000);
    setTimeout(() => {
        canCoverflow ? createPreviewImg('music/albumart5.png', 'album-art') : null;
    }, 20000);
    setTimeout(() => {
        canCoverflow ? createPreviewImg('music/albumart6.png', 'album-art') : null;
    }, 25000);
    setTimeout(() => {
        canCoverflow ? createPreviewImg('music/albumart7.png', 'album-art') : null;
    }, 30000);
    setTimeout(() => {
        canCoverflow ? createPreviewImg('music/albumart8.png', 'album-art') : null;
    }, 35000);
    setTimeout(() => {
        canCoverflow ? createPreviewImg('music/albumart9.png', 'album-art') : null;
    }, 40000);
    setTimeout(() => {
        canCoverflow ? createPreviewImg('music/albumart10.png', 'album-art') : null;
    }, 45000);
    setTimeout(() => {
        canCoverflow ? createPreviewImg('music/albumart11.png', 'album-art') : null;
    }, 50000);
    setTimeout(() => {
        canCoverflow ? createPreviewImg('music/albumart12.png', 'album-art') : null;
    }, 55000);
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        canCoverflow = item == menuItems[0] ? true : false;
        if (item == menuItems[0]) { coverflow(); }
        else if (item == menuItems[1]) createPreviewImg('preview/podcast-icon.png', 'preview-img');
        else if (item == menuItems[3]) createPreviewImg(albumArt.src, 'icon-preview');
        else createPreviewImg('preview/music-icon.png', 'icon-preview');

    })
})

//  alternate-working code in case i mess up

// menuItems[0].addEventListener('click', () => {
//     coverflow = true;
//     createPreviewImg('albumart1.png', 'album-art');

//     menuItems[1].addEventListener('click', () => {
//         coverflow = false;
//         createPreviewImg('brand.png', 'preview');

//     })


//     setTimeout(() => {
//         if (coverflow == true) {
//             while (imgContainer.hasChildNodes())
//                 imgContainer?.removeChild(imgContainer.firstChild);

//             createPreviewImg('albumart2.png', 'album-art')
//         }
//         else return;

//     }, 10000);




// })
