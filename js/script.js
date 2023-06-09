import { cueTimer } from "./modules/cuepoints.js";

document.addEventListener("DOMContentLoaded", init)
var myCues;
function init() {

    // create a playlist of functions to call at certain moments in the video.
   myCues = [
        { seconds: 20, callback: func1 },
        { seconds: 40, callback: func2 },
        { seconds: 80, callback: func3 },
        { seconds: 110, callback: func4 },
        { seconds: 111, callback: func5 },
        { seconds: 160, callback: func6 },
        { seconds: 200, callback: func7 }
    ];

    // setup the cuepoint timer
    cueTimer.setup("video-element", myCues);

    // create shortcut variables
    const video = document.querySelector("#video");
    const selectTxt = document.querySelector("#text-track");
    const showHide = document.getElementById("show-hide");
 
    }

//the custom callback functions to trigger when a cuepoint is hit.
//You can code up whatever behavior you need in your own callbacks

function func1() {
   document.querySelector("#video-element").style.background = "white"; 
   document.querySelector("#logo").classList.add("floating");
}

function func2() {
    let pop = document.querySelector(".pop");
    pop.innerHTML = "<h2>Well being as there's no other place around the place, I reckon this must be the place, I reckon.</h2>";
    document.querySelector(".pop").classList.toggle("hide");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
    }, 2000);
}

function func3() {
    const pop = document.querySelector(".pop");
    pop.innerHTML = "<h2>If at first you don't succeed, keep on sucking till you do succeed.</h2>";
    pop.classList.toggle("hide");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
    }, 2000);
}
function func4() {  
     document.querySelector("#photo").classList.add('rotation');
}
   
function func5() {  
    document.querySelector("#photo2").classList.add('rotation');
}
function func6() {
    document.querySelector("#web").src =
        "https://www.threestooges.com";
}

function func7() {
    document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/The_Three_Stooges";
}