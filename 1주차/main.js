const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
    },
});

function toggle(id) {
    let check = "https://res.kurly.com/pc/service/common/2006/ico_checkbox.svg";
    let checked = "https://res.kurly.com/pc/service/common/2006/ico_checkbox_checked.svg";
    let img=document.getElementById(id).src
    if(img==check){
        document.getElementById(id).src=checked;
    } else{
        document.getElementById(id).src=check;
    }
}
