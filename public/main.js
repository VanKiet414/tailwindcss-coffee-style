//Author: https://vankietdev.com

const topMenu = document.getElementById('vkd-top-menu')
const toggleTopMenuIcon = document.getElementById('vkd-toggle-top-menu-icon')
document.addEventListener('click',(e) => {
    if(toggleTopMenuIcon.contains(e.target)) {
        //Click to Toggle top meenu icon
        topMenu.classList.toggle('vkd-topmenu-expanded')
        topMenu.classList.toggle('hidden')
    } else {
        //Click Outside from Toggle top meenu icon
        if(topMenu.classList.contains('vkd-topmenu-expanded')){
        topMenu.classList.remove('vkd-topmenu-expanded')
        topMenu.classList.add('hidden')
        }
    }
    
})