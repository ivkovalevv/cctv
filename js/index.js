document.addEventListener('DOMContentLoaded', function(){
    /* Dropdown menu */

    let btnBenefit = document.getElementById('btn-benefit');
    let btnInfo = document.getElementById('btn-info');

    let benefitMenu = document.getElementById('benefit-list');
    let infoMenu = document.getElementById('info-list');

    btnBenefit.addEventListener('click', function(){
        benefitMenu.classList.toggle('list-open');
    });

    btnInfo.addEventListener('click', function(){
        infoMenu.classList.toggle('list-open');
    });

    document.body.addEventListener('click', function(event){
        if (event.isClick == true ||
            event.target.classList.contains('header__nav-item-link') == true) 
            return

        benefitMenu.classList.remove('list-open');
        infoMenu.classList.remove('list-open');
    });
})