

function homeButton() {
    window.location.href = "https://mutoxicated.github.io/"
}

function githubButton() {
    window.location.href = "https://github.com/Mutoxicated"
}

function portofolioButton() {
    if (window.location.href.includes('127.0.0.1')) {
        window.location.href = "portofolio.html"
    }else {
        window.location.href = "https://mutoxicated.github.io/portofolio.html"
    }
}

function drawingButton(index) {
    switch (index) {
        case 0: window.location.href = "https://www.pixilart.com/art/a-mess-sr26cd2c314fa90?ft=user&ft_id=624167"; break;
        case 1: window.location.href = "https://www.pixilart.com/art/uh-f807ffeeac68?ft=user&ft_id=624167"; break;
        case 2: window.location.href = "https://www.pixilart.com/art/falcon-9-46532baca4e7fbf?ft=user&ft_id=624167"; break;
        case 3: window.location.href = "https://www.pixilart.com/art/alien-aquatic-sr265c8bdb034c8?ft=user&ft_id=624167"; break;
        case 4: window.location.href = "https://www.pixilart.com/art/something-bcec62ba62943b1?ft=user&ft_id=624167"; break;
        case 5: window.location.href = "https://www.pixilart.com/art/lightningstrike-sr2d8e6141f737a?ft=user&ft_id=624167"; break;
        case 6: window.location.href = "https://www.pixilart.com/art/fraulein-humps-sr5z079304483daws3?ft=user&ft_id=624167"; break;
        case 7: window.location.href = "https://www.pixilart.com/art/ophanim-angel-afa429beef5df75?ft=user&ft_id=624167"; break;
    }
}