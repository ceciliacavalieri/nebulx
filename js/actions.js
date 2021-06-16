
function onEndedAudio(numero, idioma)
{
    console.log("AUDIO " + numero + "ENDED " + idioma);
    var texto = document.getElementById("texto" + numero + idioma);
    texto.style.display = "block";
    var audio = document.getElementById("audio" + numero + idioma);
    audio.loop = "true";
}

function onEndedVideo()
{
    console.log("ENDED VIDEO ");
    var videoContainer = document.getElementById("video-container");
    videoContainer.click();
}