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

more.addEventListener("click", () => {
    if (more.innerHTML == "see more") {

        //design
        dleft.style.cssText = "right: 40%; height:3px; transition-property:right,height;transition: 1000ms ease-in-out";
        dright.style.cssText = "left:95%; transition: 1000ms ease-in-out .5s;transition-property:left;"
        dmid.style.cssText = "left:78%; transition: 1000ms ease-in-out .3s;transition-property:left;"
        heroTranslate.style.cssText = "top:16%; left: 10%; font-size:1.5rem; color:rgb(206, 206, 206);" +
            "text-transform:capitalize; transition: 300ms ease-in;";
        heroTranslate.innerHTML = "Art Projects";
        heroTitle.style.cssText = "font-size: 2.5rem; top:0%; left: 50%; transition: 500ms ease-in-out .75s;" +
            " transition-property: top,font-size,left;"
        more.style.cssText = "right: 70%; bottom: 14%";
        more.innerHTML = "next";
        //hero section
        heroContainer.style.cssText = "margin-right: 20%; width: 0%;" +
            " transition: 500ms ease-in-out .75s; transition-property:margin-right,width;";
        //works section
        works.style.cssText = "transform: translate(-50%, 0%); transition: 500ms ease-in-out 1s;" +
            " transition-property:transform;"
    } else if (more.innerHTML == "next") {
        //works section
        works.style.cssText = "transform: translate(-150%, 0%); transition: 500ms ease-in-out 1s; transition-property:transform;"
        //about section
        about.style.cssText = "transform: translate(0%, 0%); transition: 800ms ease-in-out 1s; transition-property:transform;"
        //design
        dleft.style.cssText = "right: 0%; height:3px; transition-property:right,height;" +
            "transition: 1000ms ease-in-out";
        dright.style.cssText = "left:2%; transition: 1000ms ease-in-out .5s;transition-property:left;"
        dmid.style.cssText = "left:35%; transition: 1000ms ease-in-out .3s;transition-property:left;"
        heroTranslate.innerHTML = "The Artist";
        more.style.cssText = "padding: .25rem 0rem 0rem 10rem;bottom: 14%;";
        more.innerHTML = "about me";

    }
});