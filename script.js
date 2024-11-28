

const navToggle = document.getElementById('menu-btn');
const navBody = document.getElementById('mobilenav');

navToggle.addEventListener('click', ()=>{

    let btn = navToggle.getAttribute('src')

    if (btn === 'images/icon-hamburger.svg') {
        navToggle.setAttribute('src', 'images/icon-close.svg');
        navBody.style.display = 'flex';
    }else{
        navToggle.setAttribute('src', 'images/icon-hamburger.svg');
        navBody.style.display = 'none'
    }

})