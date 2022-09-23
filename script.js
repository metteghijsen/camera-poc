let canvas = document.querySelector("#canvas");
let video = document.querySelector("#video")
const captureButton = document.querySelector("#snap");
const cameraElement = document.querySelector("#camera-element");
const actionButtons = document.querySelector("#action-buttons")
const deleteButton = document.querySelector("#remove-button");
const saveButton = document.querySelector("#save-button");

//kijken of de browser van de gebruiker de mediaDevices API support
if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
    console.log("Let's get this party started")
}

//Vragen om toestemming voor het gebruiken van de camera
navigator.mediaDevices.getUserMedia({video: true}, {
    video: {
        width: 640,
        height: 480,
    }
}).then(stream => {
    video.srcObject = stream;
})

captureButton.addEventListener("click", ()=>{
    const canvasElement = document.createElement("canvas");
    const canvasElementContext = canvasElement.getContext("2d");

    canvasElement.setAttribute("width","640");
    canvasElement.setAttribute("height","480");

    canvasElementContext.drawImage(video, 0,0, 640, 480);

    cameraElement.appendChild(canvasElement);
    video.style.display = "none";
    captureButton.style.display = "none";
    actionButtons.style.display = "flex";

    deleteButton.addEventListener("click",()=>{
        let text = "Are you sure you want to delete your image?";
        if (confirm(text) === true) {
            video.style.display = "flex";
            captureButton.style.display = "flex";
            actionButtons.style.display = "none";

            cameraElement.removeChild(canvasElement);
        }
    })

    saveButton.addEventListener("click", ()=>{
        let text = "Do you want to download your image?";
        if (confirm(text) === true) {
            const image = canvasElement.toDataURL('image/png');
            const link = document.createElement("a");
            link.href = image;
            link.download = 'image.png';
            link.click();

            video.style.display = "flex";
            captureButton.style.display = "flex";
            actionButtons.style.display = "none";

            cameraElement.removeChild(canvasElement);
        }
    })
})

navigator.mediaDevices.enumerateDevices().then(devices =>{
    console.log(devices)
})