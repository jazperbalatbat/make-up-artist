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
let contact = document.querySelector("#contacts");
let indicator = document.querySelectorAll("#design ul li");
let wcimg = document.querySelectorAll(".wc_img");
let wciBtn = document.querySelectorAll(".wci_btn");
let acimg = document.querySelectorAll(".ac_img");
let aciBtn = document.querySelectorAll(".aci_btn");

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
    //contacts section
    contact.style.cssText = "transform: translate(" + args[20] + "); transition: 700ms ease-in-out .5s; transition-property:transform;"
}

function heroPage() {
    // if statement to prevent the js from reloading animation
    if (more.innerHTML != "meet the artist!") {
        designStructure("0%", "5%", "35%", "makeup artist", "10rem", "17%", "50%", "43%", "27%", "clamp(.9rem, 1.5vw, 2rem)", "#333",
            "lowercase", "25%", "10%", "", "meet the artist!", "auto", "60%", "-150%, 0%", "0%, -150%", "0%, 100%");
        indi(0);
    }

}
//artist sectiom
function seeMore() {
    // if statement to prevent the js from reloading animation
    if (more != "projects") {
        designStructure("0%", "2%", "35%", "the artist", "2.5rem", "0%", "50%", "16%", "10%", "clamp(1rem, 2vw, 2rem)", "rgb(206, 206, 206)",
            "capitalize", "21%", "68%", ".25rem .0rem 0rem 10rem", "projects", "auto 20% auto auto", "0%", "-150%, 0%", "0%, 0%", "0%, 100%");
        indi(1);
    }
}
//project section
function projects() {
    // if statement to prevent the js from reloading animation
    if (more.innerHTML != "contacts") {
        designStructure("40%", "95%", "78%", "art projects", "2.5rem", "0%", "50%", "16%", "10%", "clamp(1rem, 2vw, 2rem)", "rgb(206, 206, 206)",
            "capitalize", "14%", "68%", "", "contacts", "auto 20% auto auto", "0%", "-50%, 0%", "0%, -150%", "0%, 100%");

        indi(2);
    }
}
//contacts section
function contacts() {
    // if statement to prevent the js from reloading animation
    if (more.innerHTML != "home") {
        designStructure("0%", "50%", "8%", "get in touch", "2.5rem", "0%", "50%", "68%", "72%", "clamp(1rem, 2vw, 2rem)", "rgb(206, 206, 206)",
            "capitalize", "14%", "68%", "", "home", "auto 20% auto auto", "0%", "-150%, 0%", "0%, -150%", "0%, 0%");

        indi(3);
    }
}

//navigator main button
more.addEventListener("click", () => {
    if (more.innerHTML == "meet the artist!") {
        seeMore();

    } else if (more.innerHTML == "projects") {
        projects();

    } else if (more.innerHTML == "contacts") {
        contacts();
    } else if (more.innerHTML == "home") {
        heroPage();
    }
});
//indicator navigation color change
function indi(x) {
    for (let i = 0; i < 4; i++) {
        indicator[i].style.cssText = "background:rgb(61, 50, 36)";
    }
    indicator[x].style.cssText = "background:goldenrod";
}
//indicator main navigation
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
    projects();
});
indicator[3].addEventListener("click", () => {
    indi(3);
    contacts();
});



//CAROUSEL(WORK) SECTION

//infinite auto loop carousel
let pathNum = 0;
let setInterv;

function hideImg() {
    for (let i = 0; i < 6; i++) {
        wcimg[i].style.cssText = "width: 0%; transition: 300ms ease-in-out;";
    }
}


function autoCarou() {
    setInterv = setInterval(function () {
        hideImg();
        wcimg[pathNum].style.cssText = "width: 100%; transition: 300ms ease-in-out;";
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
//CAROUSEL ABOUT SECTION
let pathNum2 = 0;
let setIntervs;

function hideImgs() {
    for (let i = 0; i < 9; i++) {
        acimg[i].style.cssText = "width: 0%; transition: 300ms ease-in-out;";
    }
}

function carousOver(x) {
    hideImgs();
    acimg[x].style.cssText = "width: 100%; transition: 300ms ease-in-out;";
}

function autoCarous() {
    setIntervs = setInterval(function () {
        hideImgs();
        acimg[pathNum2].style.cssText = "width: 100%; transition: 300ms ease-in-out;";
        pathNum2++;
        if (pathNum2 == 9)
            pathNum2 = 0;
    }, 2500);
}
autoCarous();
for (let i = 0; i < 9; i++) {
    aciBtn[i].addEventListener("mouseover", () => {
        carousOver(i);
        clearInterval(setIntervs);
    });
    aciBtn[i].addEventListener("mouseout", () => {
        autoCarous();
    });
}