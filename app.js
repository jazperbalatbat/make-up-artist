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
let apPath = ["/MUartist/art/clients/a6.jpeg", "/MUartist/art/clients/b1.jpeg", "/MUartist/art/clients/c1.jpeg", "/MUartist/art/clients/e1.jpeg", "/MUartist/art/clients/f1.jpeg", "/MUartist/art/clients/g1.jpeg"];
let wcimg = document.querySelectorAll(".wc_img");
let wcar = document.querySelector(".w_carousel");


more.addEventListener("click", () => {
    if (more.innerHTML == "see more") {
        seeMore();

    } else if (more.innerHTML == "about me") {
        aboutMe();

    }
});

function indi(x) {
    for (let i = 0; i < 4; i++) {
        indicator[i].style.cssText = "background:rgb(61, 50, 36)";
    }
    indicator[x].style.cssText = "background:goldenrod";


}

function heroPage() {
    // if statement to prevent the js from reloading animation
    if (more.innerHTML != "see more") {
        //hero section
        heroContainer.style.cssText = "margin:auto; width: 60%;" +
            " transition: 500ms ease-in-out .75s; transition-property:margin-right,width;";
        //works section
        works.style.cssText = "transform: translate(-150%, 0%); transition: 500ms ease-in-out .3s; transition-property:transform;"
        // wcar.style.display = "none";
        //about section
        about.style.cssText = "transform: translate(0%, -150%); transition: 500ms ease-in-out .3s; transition-property:transform;"
        //design
        dleft.style.cssText = "right: 0%; height:3px; transition-property:right,height;" +
            "transition: 1000ms ease-in-out";
        dright.style.cssText = "left:5%; transition: 1000ms ease-in-out .5s;transition-property:left;"
        dmid.style.cssText = "left:35%; transition: 1000ms ease-in-out .3s;transition-property:left;"
        heroTranslate.innerHTML = "makeup artist";
        heroTitle.style.cssText = "top: 17%; left: 50%; transform: translate(-50%, 0%); font-size: 10rem; transition: 500ms ease-in";
        heroTranslate.style.cssText = "top: 43%;left: 27%;font-size: 1rem; transition: 500ms ease-in"
        more.style.cssText = " bottom: 25%;right: 10%;";
        more.innerHTML = "see more";
        indi(2);
    }

}

function seeMore() {
    // if statement to prevent the js from reloading animation
    if (more.innerHTML != "about me") {
        //design
        dleft.style.cssText = "right: 40%; height:3px; transition-property:right,height;transition: 1000ms ease-in-out";
        dright.style.cssText = "left:95%; transition: 1000ms ease-in-out .5s;transition-property:left;"
        dmid.style.cssText = "left:78%; transition: 1000ms ease-in-out .3s;transition-property:left;"
        heroTranslate.innerHTML = "Art Projects";
        heroTitle.style.cssText = "font-size: 2.5rem; top:0%; left: 50%; transition: 500ms ease-in-out .75s;" +
            " transition-property: top,font-size,left;"
        heroTranslate.style.cssText = "top:16%; left: 10%; font-size:1.5rem; color:rgb(206, 206, 206);" +
            "text-transform:capitalize; transition: 300ms ease-in;";
        more.style.cssText = "right: 68%; bottom: 14%";
        more.innerHTML = "about me";
        //hero section
        heroContainer.style.cssText = "margin-right: 20%; width: 0%;" +
            " transition: 500ms ease-in-out .75s; transition-property:margin-right,width;";
        //works section
        works.style.cssText = "transform: translate(-50%, 0%); transition: 500ms ease-in-out 1s;" +
            " transition-property:transform;";
        // wcar.style.display = "inline";
        //about section
        about.style.cssText = "transform: translate(0%, -150%); transition: 800ms ease-in-out .5s; transition-property:transform;"

        indi(1);
    }
}


function aboutMe() {
    // if statement to prevent the js from reloading animation
    if (more != "contacts") {
        //hero section
        heroContainer.style.cssText = "margin-right: 20%; width: 0%;" +
            " transition: 500ms ease-in-out .75s; transition-property:margin-right,width;";

        //works section
        works.style.cssText = "transform: translate(-150%, 0%); transition: 500ms ease-in-out 1s; transition-property:transform;"
        // wcar.style.display = "none";
        //about section
        about.style.cssText = "transform: translate(0%, 0%); transition: 800ms ease-in-out 1s; transition-property:transform;"
        //design
        dleft.style.cssText = "right: 0%; height:3px; transition-property:right,height;" +
            "transition: 1000ms ease-in-out";
        dright.style.cssText = "left:2%; transition: 1000ms ease-in-out .5s;transition-property:left;"
        dmid.style.cssText = "left:35%; transition: 1000ms ease-in-out .3s;transition-property:left;"
        heroTranslate.innerHTML = "The Artist";
        heroTitle.style.cssText = "font-size: 2.5rem; top:0%; left: 50%; transition: 500ms ease-in-out .75s;" +
            " transition-property: top,font-size,left;"
        heroTranslate.style.cssText = "top:16%; left: 10%; font-size:1.5rem; color:rgb(206, 206, 206);" +
            "text-transform:capitalize; transition: 300ms ease-in;";
        more.style.cssText = "bottom: 14%; padding: .25rem .5rem 0rem 10rem;";
        more.innerHTML = "contacts";
        indi(2);
    }
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

// setInterval(function () {
//     wcimg.style.cssText = "background:url(" + apPath[Math.floor(Math.random() * 5)] + ");" +
//         " background-size:cover;  transition: 1500ms ease-in-out; ";

// }, 6000);
let pathNum = 0;
setInterval(function () {
    for (let i = 0; i < 6; i++) {
        wcimg[i].style.cssText = "width: 0%; transition: 1000ms ease-in-out;";
        console.log(i + ":image width is 0");

    }
    wcimg[pathNum].style.cssText = "width: 100%; transition: 1000ms ease-in-out;";
    console.log(pathNum + ":image width is 100");
    pathNum++;
    if (pathNum == 6)
        pathNum = 0;

}, 6500);