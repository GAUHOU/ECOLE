const InfoPers = document.querySelector(".info-pers");
const btnInfoPers = document.querySelectorAll(".btn-info");

for ( let i = 0; i < btnInfoPers.length; i++){
    btnInfoPers[i].addEventListener("click", ()=>{
        if (InfoPers.classList.contains("show")) {
            return false
        }else{
            InfoPers.classList.add("show");
            //btnInfoPers[i].querySelector("icon > img").src = "../ions/eye.svg"
        }
    });
}


const updatePres = document.querySelector(".update-pers");
const btnUpdate = document.querySelectorAll(".btn-update");

for ( let j = 0; j < btnUpdate.length; j++) {
    btnUpdate[j].addEventListener("click", ()=>{
        if (updatePres.classList.contains("show")) {
            return false
        }else{
            updatePres.classList.add("show");
        }
    });
}


const btnCloseInfo = document.querySelector(".btn-close-info");

btnCloseInfo.addEventListener("click", (e) =>{
    if ( InfoPers.classList.contains("show") ) {
        InfoPers.classList.remove("show");
    }else{
        false;
    }
});


const btnCloseUpdate = document.querySelector(".btn-close-update");

btnCloseUpdate.addEventListener("click", () =>{
    if ( updatePres.classList.contains("show") ) {
        updatePres.classList.remove("show");
    }else{
        false;
    }
});


//Onglet

let btnCart = document.querySelectorAll(".cart");
let rhs = document.querySelectorAll(".rhs");
let rhss = document.querySelector(".rhss");

for ( let p = 0; p < btnCart.length; p++) {
    btnCart[p].addEventListener("click", () =>{
        for (let s = 0; s < rhs.length; s++){
            rhs[s].classList.remove("active");
        }
        let pf = document.querySelector("#rhs-"+btnCart[p].id);
        if (pf.classList.contains("active")) {
            return false;
        }
        else{
            pf.classList.add("active");
        }
        console.log(pf);
    });
}