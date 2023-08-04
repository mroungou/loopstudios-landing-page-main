function displayMenu() {
    const menu = document.getElementById('overlay')

    menu.classList.add('open');
    menu.style.height = '100vh';
}

function closeMenu() {
    const menu = document.getElementById('overlay')
    
    menu.classList.remove('open');
    menu.style.height = '0vh';
}

window.addEventListener('DOMContentLoaded', function() {
    const openButton = document.getElementById('open-button');
    const closeButton = document.getElementById('close-button');

    openButton.addEventListener('click', displayMenu)
    closeButton.addEventListener('click', closeMenu)
})