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
        { seconds: 160, callback: func5 },
        { seconds: 200, callback: func6 },
    ];

    // setup the cuepoint timer
    cueTimer.setup("video-element", myCues);

    // create shortcut variables
    const video = document.querySelector("#video");
    const selectVid = document.querySelector("#video_select");
    const selectTxt = document.querySelector("#text-track");
    const display = document.getElementById("transcript");
    const transcript_en = document.getElementById("transcript-en");0
    const showHide = document.getElementById("show-hide");

    // initialize video select dropdown behavior
    selectVideo-element.addEventListener("change", (e) => {
 
        // depending on which video is selected, change the cues
        // and change the captions.
        if (e.target.value == 'assets/the_new_three_stooges_dinopoodi_514.mp4') {
            
            // choose the english caption text
            selectTrack(null, video-element, 'en');

            // reset the cues playlist
            myCues = [
                { seconds: 20, callback: func1 },
                { seconds: 40, callback: func2 },
                { seconds: 80, callback: func3 },
                { seconds: 110, callback: func4 },
                { seconds: 160, callback: func5 },
                { seconds: 200, callback: func6 },
            ];
            // recreate the cue timer
            cueTimer.setup("video-element", myCues);

        } else if(e.target.value == 'assets/the_new_three_stooges_dinopoodi.mp4') {
            // if bunny video, empty the myCues array
            // and change the caption texts
            myCues.splice(0, myCues.length);
            selectTrack(null, video, 'en-stooges');
        }
        // finally, swap the video to play
        selectVideo(e, video);
    });

    // initialize video captions dropdown behavior
    selectTxt.addEventListener("change", (e) => {
        const id = e.target.value;
        selectTrack(e, video-element, id);
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
    document.querySelector("#video-element").style.backgroundColor = "purple";
}

function func2() {
    let pop = document.querySelector(".pop");
    pop.innerHTML = "<p>Well being as there's no other place around the place, I reckon this must be the place, I reckon.</p>";
    document.querySelector(".pop").classList.toggle("hide");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
    }, 2000);
}

function func3() {
    const pop = document.querySelector(".pop");
    pop.innerHTML = "<p>If at first you don't succeed, keep on sucking till you do succeed.</p>";
    pop.classList.toggle("hide");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
    }, 2000);
}

function func4() {  
    document.querySelector("#web").src = "images/stooges.jpg";
}

function func5() {
    document.querySelector("#web").src =
        "https://www.threestooges.com";
}

function func6() {
    document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/The_Three_Stooges";
}
}