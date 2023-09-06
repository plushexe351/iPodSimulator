document.addEventListener('visibilitychange', () => {
    if (document.visibilityState != 'visible') {
        iPodScreen.classList.remove('active');

        toggleSwitch.classList.remove('active');

        setTimeout(() => {

            ipod.classList.remove('active');

        }, 500);
    }
})