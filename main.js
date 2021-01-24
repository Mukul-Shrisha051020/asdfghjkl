Webcam.set({
    width: 300,
    height: 300,
    image_format: 'png',
    png_quality: 15000
});

camera = document.getElementById("camera");

webcam.attach('#camera');

function Capture() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '">';
    })
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/NnhzkDmwh/model.json', model)
https

console.log("ml5 version", ml5.version);