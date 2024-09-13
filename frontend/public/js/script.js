document.addEventListener("DOMContentLoaded", ()=>{

    const btn_hamburger = document.querySelector(".hamburger");
    const src_traverser = "../ions/traverser.svg";
    const src_menu_burger = "../ions/menu-burger.svg";
    if(btn_hamburger){
        btn_hamburger.addEventListener("click", ()=>{
            let icon = document.querySelector(".icons");
            if(icon.classList.contains("menu-burger")){
                icon.classList.remove("menu-burger");
                icon.classList.add("traverser");
                icon.src = src_traverser;
            }else{
                icon.classList.remove("traverser");
                icon.classList.add("menu-burger");
                icon.src = src_menu_burger;
            }
            document.querySelector(".menu").classList.toggle("active")
        });
    }
    
    
    
    const btn_hamburger_admin = document.querySelector(".hamburger-admin");
    if(btn_hamburger_admin){
        btn_hamburger_admin.addEventListener("click", ()=>{
            let icon_admin = document.querySelector(".hamburger-admin>.icon");
            if(icon_admin.classList.contains("menu-burger")){
                icon_admin.classList.remove("menu-burger");
                icon_admin.classList.add("traverser");
                icon_admin.src = src_traverser;
            }else{
                icon_admin.classList.remove("traverser");
                icon_admin.classList.add("menu-burger");
                icon_admin.src = src_menu_burger;
            }
            let text = document.querySelectorAll("text");
            for (let tx = 0; tx < text.length; tx++) {
                text[tx].classList.toggle("none");
            }
            document.querySelector(".nav-vrt").classList.toggle("width-vrt");
            document.querySelector(".flot-d").classList.toggle("width-flot-d");
            document.querySelector(".nav-vrt").classList.toggle("position-vrt");
        });
    }
});



//-----------------------------Slider-------------------------------------

/*const swiper = new Swiper('.swiper-wrapper', {
    // Optional parameters
    ///direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});*/


var swiper = new Swiper('.slider-wrapper', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

