

document.getElementById('toggle-menu').addEventListener('click', function () {
    const menu = document.getElementById('main-menu');

    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';

    if (menu.style.display === 'flex') {
        window.scrollTo(0, 0);
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

document.getElementById('menu').addEventListener('click', function () {
    const menu = document.getElementById('main-menu');
    menu.style.display = 'none';
    document.body.style.overflow = 'auto';
});

const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
    .forEach((item, index) => {
        item.onmouseover = () => {
            menu.dataset.activeIndex = index;
        }
    });

document.addEventListener("DOMContentLoaded", function () {
    const toggleMenuButton = document.getElementById("toggle-menu");
    const menu = document.getElementById("menu");
    const closeMenuButton = document.getElementById("closebtn");

    toggleMenuButton.addEventListener("click", function () {
        menu.classList.add("menu-visible");
    });

    closeMenuButton.addEventListener("click", function () {
        menu.classList.remove("menu-visible");
    });

    // Close the menu when clicking outside the menu
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && event.target !== toggleMenuButton) {
            menu.classList.remove("menu-visible");
        }
    });
});
    




    

    
