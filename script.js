window.onload = () => {
    setTimeout(() => {
        document.querySelector('body').classList.add('display');
    }, 4000);
    scrollFunction();
}

document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('change');
});

function openNav() {
    document.getElementById('sidebar', 'menu').style.display = "block";
}

function closeNav() {
    document.getElementById('sidebar', 'menu').style.display = "none";
}

scrollToTop = document.getElementById('scrollToTopBtn');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

