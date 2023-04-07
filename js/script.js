import { cueTimer } from "./modules/cuepoints.js";

document.addEventListener("DOMContentLoaded", init)
var myCues;
function init() {

    // create a playlist of functions to call at certain moments in the video.
   myCues = [
        { seconds: 40, callback: func1 },
        { seconds: 140, callback: func2 },
        { seconds: 200, callback: func3 },
        { seconds: 310, callback: func6 },
        { seconds: 380, callback: func4 },
        { seconds: 400, callback: func5 }
    ];

    // setup the cuepoint timer
    cueTimer.setup("vid", myCues);

    // create shortcut variables
    const vid = document.querySelector("#vid");
    const selectVid = document.querySelector("#video_select");
    const selectTxt = document.querySelector("#text-track");
    const display = document.getElementById("transcript");
    const transcript_en = document.getElementById("transcript-en");0
    const showHide = document.getElementById("show-hide");

    // initialize video select dropdown behavior
    selectVid.addEventListener("change", (e) => {
 
        // depending on which video is selected, change the cues
        // and change the captions.
        if (e.target.value == 'assets/the_new_three_stooges_dinopoodi_514.mp4') {
            
            // choose the english caption text
            selectTrack(null, vid, 'en');

            // reset the cues playlist
            myCues = [
                { seconds: 40, callback: func1 },
                { seconds: 140, callback: func2 },
                { seconds: 200, callback: func3 },
                { seconds: 310, callback: func6 },
                { seconds: 380, callback: func4 },
                { seconds: 400, callback: func5 }
            ];
            // recreate the cue timer
            cueTimer.setup("vid", myCues);

        } else if(e.target.value == 'assets/the_new_three_stooges_dinopoodi.mp4') {
            // if bunny video, empty the myCues array
            // and change the caption texts
            myCues.splice(0, myCues.length);
            selectTrack(null, vid, 'en-stooges');
        }
        // finally, swap the video to play
        selectVideo(e, vid);
    });

    // initialize video captions dropdown behavior
    selectTxt.addEventListener("change", (e) => {
        const id = e.target.value;
        selectTrack(e, vid, id);
    });

    // initialize text transcript display (english)
    transcript_en.addEventListener(
        "click",
        function (e) {
            e.preventDefault();
            webvttTranscript("captions/the_new_three_stooges_dinopoodi_512kb.vtt", display);
        });


//the custom callback functions to trigger when a cuepoint is hit.
//You can code up whatever behavior you need in your own callbacks

function func1() {
    document.querySelector("#vid").style = "outline : 10px solid red";
}

function func2() {
    let pop = document.querySelector(".pop");
    pop.innerHTML = "<p>Ohh Snap!</p>";
    document.querySelector(".pop").classList.toggle("hide");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
    }, 2000);
}

function func3() {
    const pop = document.querySelector(".pop");
    pop.innerHTML = "<p>E=MC<sup>2</sup> is NOT Statistical Data!!</p>";
    pop.classList.toggle("hide");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
    }, 2000);
    document.querySelector("#vid").style = "outline: 0px solid red";
    document.querySelector("#web").src = "images/the_new_three_stooges_dinopoodi_000210.jpg";
}

function func4() {
    document.querySelector("#web").src =
        "https://www.threestooges.com";
}

function func5() {
    document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/The_Three_Stooges";
}

function func6() {
    document.querySelector("#web").src = "images/the_new_three_stooges_dinopoodi_000090.jpg";
}  