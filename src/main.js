

function homeButton() {
    if (window.location.href.includes('127.0.0.1')) {
        window.location.href = "index.html"
    }else {
        window.location.href = "https://mutoxicated.github.io/"
    }
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