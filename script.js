let canvas = document.querySelector("#canvas");
let video = document.querySelector("#video")
let captureButton = document.querySelector("#snap");

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

captureButton.addEventListener("click", ()=>{
    const canvasElement = document.createElement("canvas");
    const canvasElementContext = canvasElement.getContext("2d");

    canvasElement.setAttribute("width","480");
    canvasElement.setAttribute("height","480");

    canvasElementContext.drawImage(video, 0,0, 640, 480);

    document.body.appendChild(canvasElement);
})

navigator.mediaDevices.enumerateDevices().then(devices =>{
    console.log(devices)
})