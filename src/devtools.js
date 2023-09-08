const timeout = 15; // <-- Play with me

chrome.devtools.panels.elements.createSidebarPane('POC', (sidebarPane) => {
    sidebarPane.setPage('devtools.html');

    let interval = null;
    let window = null;

    sidebarPane.onShown.addListener((win) => {
        window = win;
        const effect = new KeyframeEffect(
            window.document.querySelector('.box'),
            {
                translate: [`0 0 0`, `calc(100vw - 100%) calc(100vh - 100%) 0`],
            },
            {
                fill: 'both',
                duration: 1000000,
            }
        );
        
        const anim = new Animation(effect);
        anim.startTime = 0;
        anim.pause();

        interval = window.setInterval(() => {
            window.requestAnimationFrame(() => {
                window.document.querySelector('.box').getAnimations()[0].currentTime = 1000000 * Math.random();
            });
        }, timeout);
    });

    sidebarPane.onHidden.addListener(() => {
        window.clearInterval(interval);
    });
});