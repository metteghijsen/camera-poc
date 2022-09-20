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
        frameRate: 1
    }
}).then(stream => {
    document.getElementById("vid").srcObject = stream;
})

