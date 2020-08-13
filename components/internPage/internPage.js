const navLinks = document.getElementById("navLinks");
const menuBtn = document.getElementById("menuBtn");
const goTopPageBtn = document.getElementById("goTopPageBtn");


toogleMenuLinks = () => {
    navLinks.classList.toggle("sideDrawer");
    navLinks.classList.toggle("hiddenLinks");
}

function stickyNavbar() {
    if (document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50) {
        goTopPageBtn.classList.add("sticky")
    } else {
        goTopPageBtn.classList.remove("sticky");
    }
}

window.onscroll = () => {
    stickyNavbar();
};
menuBtn.addEventListener("click", toogleMenuLinks);