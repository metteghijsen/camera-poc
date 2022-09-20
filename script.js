let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d")
let video = document.querySelector("#video")

//kijken of de browser van de gebruiker de mediaDevices API support
if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
    console.log("Let's get this party started")
}

//Vragen om toestemming voor het gebruiken van de camera
navigator.mediaDevices.getUserMedia({video: true}, {
    video: {
        width: {
            min: 1280, //minimale resolutie
            max: 1920, //maximale resolutie
        },
        height: {
            min: 720, //minimale resolutie
            max: 1080 //maximale resolutie
        },
    }
}).then(stream => {
    video.srcObject = stream;
})

document.querySelector("#snap").addEventListener("click", ()=>{
    context.drawImage(video, 0,0, 640, 480)
})

navigator.mediaDevices.enumerateDevices().then(devices =>{
    console.log(devices)
})