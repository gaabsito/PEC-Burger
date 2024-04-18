window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.classList.add("minimizado");
    } else {
        header.classList.remove("minimizado");
    }
});
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var spacer = document.querySelector('.spacer');
    
    if (window.scrollY > 0) {
        header.classList.add('minimizado');
        spacer.style.height = header.clientHeight + 'px';
    } else {
        header.classList.remove('minimizado');
        spacer.style.height = '0';
    }
});

