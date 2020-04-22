let loc = window.pageYOffset;
window.onscroll = function () {
    let loc2 = window.pageYOffset;

    if (loc >= loc2) {
        document.getElementById('menu').style.top = '0';
    } else {
        document.getElementById('menu').style.top = '-200px';
    }

    loc = loc2;

}