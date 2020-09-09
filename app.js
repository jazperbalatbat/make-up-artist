let more = document.querySelector(".more");
let dleft = document.querySelector(".d_left");
let dright = document.querySelector(".d_right");
let dmid = document.querySelector(".d_mid");
let heroTitle = document.querySelector(".hero_title");
let heroTranslate = document.querySelector(".hero_translate");
let heroContainer = document.querySelector(".hero__container");
let hero = document.querySelector("#hero");
let works = document.querySelector("#works");
let about = document.querySelector("#about");
let indicator = document.querySelectorAll("#design ul li");
let wcimg = document.querySelectorAll(".wc_img");
let wciBtn = document.querySelectorAll(".wci_btn");

//main design structure animation
function designStructure(...args) {
    //design
    dright.style.cssText = "right: " + args[0] + ";transition: 1000ms ease-in-out; transition-property:right,height;";
    dleft.style.cssText = "left: " + args[1] + "; transition: 1000ms ease-in-out .5s; transition-property:left;";
    dmid.style.cssText = "left: " + args[2] + "; transition: 1000ms ease-in-out .3s; transition-property:left;";
    heroTranslate.innerHTML = args[3];
    heroTitle.style.cssText = "font-size: " + args[4] + "; top: " + args[5] + "; left: " + args[6] + ";" +
        "transform: translate(-50%, 0%); transition: 500ms ease-in-out .75s; transition-property: top,font-size,left,transform;";
    heroTranslate.style.cssText = "top:" + args[7] + "; left: " + args[8] + "; font-size:" + args[9] + "; color:" + args[10] + ";" +
        "text-transform:" + args[11] + "; transition: 400ms ease-in-out;";
    more.style.cssText = "bottom:" + args[12] + "; right:" + args[13] + "; padding:" + args[14] + "";
    more.innerHTML = args[15];
    //hero section
    heroContainer.style.cssText = "margin:" + args[16] + "; width: " + args[17] + ";" +
        " transition: 500ms ease-in-out .5s; transition-property:margin,width;";
    //work section
    works.style.cssText = "transform: translate(" + args[18] + "); transition: 500ms ease-in-out .5s; transition-property:transform;"
    //about section
    about.style.cssText = "transform: translate(" + args[19] + "); transition: 500ms ease-in-out .5s; transition-property:transform;"
}

function heroPage() {
    // if statement to prevent the js from reloading animation
    if (more.innerHTML != "see more") {
        designStructure("0%", "5%", "35%", "makeup artist", "10rem", "17%", "50%", "43%", "27%", "1rem", "#333",
            "lowercase", "25%", "10%", "", "see more", "auto", "60%", "-150%, 0%", "0%, -150%");
        indi(2);
    }

}

function seeMore() {
    // if statement to prevent the js from reloading animation
    if (more.innerHTML != "about me") {
        designStructure("40%", "95%", "78%", "Art Project", "2.5rem", "0%", "50%", "16%", "10%", "1.5rem", "rgb(206, 206, 206)",
            "capitalize", "14%", "68%", "", "about me", "auto 20% auto auto", "0%", "-50%, 0%", "0%, -150%");

        indi(1);
    }
}

function aboutMe() {
    // if statement to prevent the js from reloading animation
    if (more != "contacts") {
        designStructure("0%", "2%", "35%", "The Artist", "2.5rem", "0%", "50%", "16%", "10%", "1.5rem", "rgb(206, 206, 206)",
            "capitalize", "14%", "10%", ".25rem .5rem 0rem 10rem", "contacts", "auto 20% auto auto", "0%", "-150%, 0%", "0%, 0%");
        indi(2);
    }
}
//navigator main button
more.addEventListener("click", () => {
    if (more.innerHTML == "see more") {
        seeMore();

    } else if (more.innerHTML == "about me") {
        aboutMe();

    }
});
//indicator navigation color change
function indi(x) {
    for (let i = 0; i < 4; i++) {
        indicator[i].style.cssText = "background:rgb(61, 50, 36)";
    }
    indicator[x].style.cssText = "background:goldenrod";
}

indicator[0].addEventListener("click", () => {
    heroPage();
    indi(0);
});
indicator[1].addEventListener("click", () => {
    indi(1);
    seeMore();
});
indicator[2].addEventListener("click", () => {
    indi(2);
    aboutMe();
});
indicator[3].addEventListener("click", () => {
    indi(3);
});


//CAROUSEL(WORK) SECTION

//infinite auto loop carousel
let pathNum = 0;
let setInterv;

function hideImg() {
    for (let i = 0; i < 6; i++) {
        wcimg[i].style.cssText = "width: 0%; transition: 300ms ease-in-out;";
        // console.log(i + ":image width is 0");
    }
}

function autoCarou() {
    setInterv = setInterval(function () {
        hideImg();
        wcimg[pathNum].style.cssText = "width: 100%; transition: 300ms ease-in-out;";
        // console.log(pathNum + ":image width is 100");
        pathNum++;
        if (pathNum == 6)
            pathNum = 0;
    }, 2500);
}
autoCarou();
//indicator carousel
function carouOver(x) {
    hideImg();
    wcimg[x].style.cssText = "width: 100%; transition: 300ms ease-in-out;";
}
for (let i = 0; i < 6; i++) {
    wciBtn[i].addEventListener("mouseover", () => {
        carouOver(i);
        clearInterval(setInterv);
    });
    wciBtn[i].addEventListener("mouseout", () => {
        autoCarou();
    });
}