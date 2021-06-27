var isShowOpeningDream = true;
var numeroAtual = 1;
var idiomaAtual = "";

function showOpeningDream()
{
    console.log("Show opening dream");

    playAudio("audioBase");

    var video = document.getElementById("video");

    if(isShowOpeningDream)
    {
        showText("texto00en");
        showText("texto00fr");
        showText("texto00pt");
    }
}

function changeVideoSource(path)
{
    var video = document.getElementById("video");
    console.log("changeVideoSource: Video path: " + path)
    video.src = path;
    video.play();
}

function showText(textId)
{
    var texto = document.getElementById(textId);
    texto.style.display = "block";
}

function hideText(textId)
{
    console.log("hiding text " + textId);
    var texto = document.getElementById(textId);
    texto.style.display = "none";
}

function playVideo(videoId)
{
    var video = document.getElementById(videoId);
    video.playbackRate = 1.0;
    var promise = video.play();
    // In browsers that don’t yet support this functionality,
    // playPromise won’t be defined.
    if (promise !== undefined) {
        promise.then(function() {
        // Automatic playback started!
        console.log("automatic " + videoId + " playback started")
        }).catch(function(error) {
        // Automatic playback failed.
        console.log("automatic " + videoId + " playback failed")
        // Show a UI element to let the user manually start playback.
        });
    }
    video.autoplay = true;
    video.muted = false;
}


function playAudio(audioId)
{
    var audio = document.getElementById(audioId);
    //audio.playbackRate = 16.0;
    var promise = audio.play();
    // In browsers that don’t yet support this functionality,
    // playPromise won’t be defined.
    if (promise !== undefined) {
        promise.then(function() {
        // Automatic playback started!
        console.log("automatic " + audioId + " playback started")
        }).catch(function(error) {
        // Automatic playback failed.
        console.log("automatic " + audioId + " playback failed")
        // Show a UI element to let the user manually start playback.
        });
    }
}

function playVideoStopPrevious(numero, idioma)
{

    playVideo("video");
}

function hideOpeningDream()
{
    hideText("texto00en");
    hideText("texto00fr");
    hideText("texto00pt");
    isShowOpeningDream = false;
}

function showTextHidePrevious(numero, idioma)
{
    var numeroAnterior = numero - 1;
    console.log("texto" + padLeadingZeros(numeroAnterior, 2) + idioma);
    var previous = document.getElementById("texto" + padLeadingZeros(numeroAnterior, 2) + idioma)
    previous.style.display = "none";
    var texto = document.getElementById("texto" + numero + idioma);
    texto.style.display = "block";
}

function padLeadingZeros(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function onEndedAudio(numero, idioma)
{
    console.log("AUDIO " + numero + " ENDED " + idioma);
    if(numero == "07")
    {
        var texto071 = document.getElementById("texto" + "071" + idioma);
        texto071.style.display = "block";
        var texto072 = document.getElementById("texto" + "072" + idioma);
        texto072.style.display = "block";
    }
    var texto = document.getElementById("texto" + numero + idioma);
    texto.style.display = "block";
}

function onEndedVideo()
{
    console.log("ENDED VIDEO ");
    if(isShowOpeningDream)
    {
        var video = document.getElementById("video");
        video.click();
        isShowOpeningDream = false;
    }
    else
    {
        console.log("Numero atual: "+ numeroAtual + " idioma atual " + idiomaAtual)
        onEndedAudio(padLeadingZeros(numeroAtual, 2), idiomaAtual);
        var numeroInt = parseInt(numeroAtual, 10) + 1;
        numeroAtual = numeroInt.toString();
    }

}

function onPlayVideo() 
{
    console.log("On play video")
}

// SHOW PAGES IN ENGLISH

function showBirths() 
{
    console.log("Show Births");
    idiomaAtual = "en";
    hideOpeningDream();
    changeVideoSource("./videos/en/TELA 01 EN - SONHO DE ABERTURA - NATA.mp4");
    playAudio("audioBase");
    playVideo("video");
}

function showTheMilkyWay()
{
    hideText("texto01en");
    changeVideoSource("./videos/en/TELA 02 EN NASCIMENTOS 1.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("02", "en");
}

function showMilkMoons()
{
    hideText("texto02en");
    changeVideoSource("./videos/en/TELA 03 EN - A VIA LACTEA - VIA LÁCTEA NA PAREDE NO ESCURO.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("03", "en");
}

function showEwe()
{
    hideText("texto03en");
    changeVideoSource("./videos/en/TELA 04 EN LUA DE LEITE OVELHA 1 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("04", "en");
}

function showCow()
{
    hideText("texto04en");
    changeVideoSource("./videos/en/TELA 05 EN - LUAS DE LEITE - VACA.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("05", "en");
}

function showMonikaEn()
{
    hideText("texto05en");
    changeVideoSource("./videos/en/TELA 06 EN - LUAS DE LEITE - CABRA 1 2 (1).mp4");
    playAudio("audioBase");
    playVideoStopPrevious("06", "en");
}

function showJourneyToTheCenterOfTheMoons()
{
    hideText("texto06en");
    changeVideoSource("./videos/en/TELA 07 EN - LUAS DE LEITE - MONIKA.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("07", "en");
}

function showMilkyTongue()
{
    hideText("texto07en");
    hideText("texto071en");
    hideText("texto072en");
    changeVideoSource("./videos/en/TELA 08 EN - MINIMUNDO 1 2 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("08", "en");
}

function showProducedWith()
{
    hideText("texto08en");
    changeVideoSource("./videos/en/TELA 09 EN - MINIMUNDO 4.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("09", "en");
}

function showTheHomeOfMany()
{
    hideText("texto09en");
    changeVideoSource("./videos/en/TELA 10 EN - MINIMUNDO 2 2 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("10", "en");
}

function showBwomb()
{
    hideText("texto10en");
    changeVideoSource("./videos/en/TELA 11 EN - MINIMUNDO 3.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("11", "en");
}

function showGallbladder()
{
    hideText("texto11en");
    changeVideoSource("./videos/en/TELA 12 EN - POEMA-LAUDO EMBRIÃO 1 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("12", "en");
}

function showStone()
{
    hideText("texto12en");
    changeVideoSource("./videos/en/TELA 13 EN - POEMA-LAUDO VESICULA.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("13", "en");
}

function showMotheringFathers()
{
    hideText("texto13en");
    changeVideoSource("./videos/en/TELA 14 EN - PEDRA 1 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("14", "en");
}

function showTheBreathInTheBurstingBubble()
{
    hideText("texto14en");
    changeVideoSource("./videos/en/TELA 15 EN - PAIS EM MATERNAGEM - CAVALO MARINHO.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("15", "en");
}

function showClosingDream()
{
    hideText("texto15en");
    changeVideoSource("./videos/en/TELA 16 EN - LEVANHA 2 2 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("16", "en");
}

function showAllTheMatter()
{
    hideText("texto16en");
    changeVideoSource("./videos/en/TELA 17 EN - THE PLANET AND THE POOL.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("17", "en");
}

function showOblivion()
{
    hideText("texto17en");
    changeVideoSource("./videos/en/TELA 18 EN - ALVEOLOS 1 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("18", "en");
}

function showCreditsPart1()
{
    hideText("texto18en");
    changeVideoSource("./videos/en/TELA 19 EN LARVAS NOVAS.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("19", "en");
}

function showCreditsPart2()
{
    hideText("texto19en");
    changeVideoSource("./videos/TELA 20 - TODOS CRÉDITOS.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("20", "en");
    showText("texto2001en");
    showText("texto2002en");
    showText("texto2004en");
    showText("texto2005en");
    showText("texto2006en");
    showText("texto2007en");
    showText("texto2008en");
    showText("texto2009en");
    showText("texto2010en");
    showText("texto2011en");
    showText("texto2012en");
    showText("texto2013en");
    showText("texto2014en");
    showText("texto2015en");
    showText("texto2016en");
    showText("texto2017en");
    showText("texto2018en");
    showText("texto2019en");
    showText("texto2020en");
    showText("texto2021en");
    showText("texto2022en");
    showText("texto2023en");
    showText("texto2024en");
    showText("texto2025en");
    showText("texto2026en");
    showText("texto2027en");
}

// SHOW PAGES IN FRENCH

function showNaissances() 
{
    console.log("Show Naissances");
    idiomaAtual = "fr";
    hideOpeningDream();
    changeVideoSource("./videos/fr/TELA 01 FR - SONHO DE ABERTURA - NATA 1.mp4");
    playAudio("audioBase");
    playVideo("video");   
}

function showLaVoieLactee()
{
    hideText("texto01fr");
    changeVideoSource("./videos/fr/TELA 02 FR NASCIMENTOS 1.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("02", "fr");
}

function showLunesDeLait()
{
    hideText("texto02fr");
    changeVideoSource("./videos/fr/TELA 03 FR - A VIA LACTEA - VIA LÁCTEA NA PAREDE NO ESCURO 1 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("03", "fr");
}

function showChevre()
{
    hideText("texto03fr");
    changeVideoSource("./videos/fr/TELA 04 FR LUA DE LEITE OVELHA.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("04", "fr");
}

function showVache()
{
    hideText("texto04fr");
    changeVideoSource("./videos/fr/TELA 05 FR - LUAS DE LEITE - VACA 1 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("05", "fr");
}

function showMonikaFr()
{
    hideText("texto05fr");
    changeVideoSource("./videos/fr/TELA 06 FR - LUAS DE LEITE - CABRA.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("06", "fr");
}

function showVoyageAuCentreDesLunes()
{
    hideText("texto06fr");
    changeVideoSource("./videos/fr/TELA 07 FR - LUAS DE LEITE - MONIKA 1 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("07", "fr");
}

function showLangueLactee()
{
    hideText("texto07fr");
    hideText("texto071fr");
    hideText("texto072fr");
    changeVideoSource("./videos/fr/TELA 08 FR - MINIMUNDO 1.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("08", "fr");
}

function showProduireAvec()
{
    hideText("texto08fr");
    changeVideoSource("./videos/fr/TELA 09 FR - MINIMUNDO 4 2 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("09", "fr");
}

function showLaMaisonDeTantDeGens()
{
    hideText("texto09fr");
    changeVideoSource("./videos/fr/TELA 10 FR - MINIMUNDO 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("10", "fr");
}

function showLEmbryonEstObserveAvec()
{
    hideText("texto10fr");
    changeVideoSource("./videos/fr/TELA 11 FR - MINIMUNDO 3 2 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("11", "fr"); 
}

function showVesiculeBiliaireDistendue()
{
    hideText("texto11fr");
    changeVideoSource("./videos/fr/TELA 12 FR - POEMA-LAUDO EMBRIÃO.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("12", "fr"); 
}

function showPierre()
{
    hideText("texto12fr");
    changeVideoSource("./videos/fr/TELA 13 FR - POEMA-LAUDO VESICULA 1 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("13", "fr"); 
}


function showLesPeresQuiFontDuMaternage()
{
    hideText("texto13fr");
    changeVideoSource("./videos/fr/TELA 14 FR - PEDRA.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("14", "fr");   
}

function showLeSouffleDansLaBulleQuiEclate()
{
    hideText("texto14fr");
    changeVideoSource("./videos/fr/TELA 15 FR - PAIS EM MATERNAGEM - CAVALO MARINHO 1 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("15", "fr");   
}


function showReveDeCloture()
{
    hideText("texto15fr");
    changeVideoSource("./videos/fr/TELA 16 FR - LEVANHA 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("16", "fr");   
}


function showTouteLaMatiere()
{
    hideText("texto16fr");
    changeVideoSource("./videos/fr/TELA 17 FR - THE PLANET AND THE POOL 1 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("17", "fr");   
}

function showLOubli()
{
    hideText("texto17fr");
    changeVideoSource("./videos/fr/TELA 18 FR - ALVEOLOS.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("18", "fr");   
}


function showCreditsFrPart1()
{
    hideText("texto18fr");
    changeVideoSource("./videos/fr/TELA 19 FR LARVAS NOVAS 1 2 (1).mp4");
    playAudio("audioBase");
    playVideoStopPrevious("19", "fr");   
}

function showCreditsFrPart2()
{
    hideText("texto19fr");
    changeVideoSource("./videos/TELA 20 - TODOS CRÉDITOS.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("20", "fr");   
    showText("texto2001fr");
    showText("texto2002fr");
    showText("texto2004fr");
    showText("texto2005fr");
    showText("texto2006fr");
    showText("texto2007fr");
    showText("texto2008fr");
    showText("texto2009fr");
    showText("texto2010fr");
    showText("texto2011fr");
    showText("texto2012fr");
    showText("texto2013fr");
    showText("texto2014fr");
    showText("texto2015fr");
    showText("texto2016fr");
    showText("texto2017fr");
    showText("texto2018fr");
    showText("texto2019fr");
    showText("texto2020fr");
    showText("texto2021fr");
    showText("texto2022fr");
    showText("texto2023fr");
    showText("texto2024fr");
    showText("texto2025fr");
    showText("texto2026fr");
    showText("texto2027fr");
}

// SHOW PAGES IN PORTUGUESE

function showNascimentos()
{
    console.log("Show Nascimentos");
    idiomaAtual = "pt";
    hideOpeningDream();
    changeVideoSource("./videos/pt/TELA 01 PT - SONHO DE ABERTURA - NATA 1.mp4");
    playAudio("audioBase");
    playVideo("video");
}

function showAViaLactea()
{
    console.log("Show Via Lactea");
    hideText("texto01pt");
    changeVideoSource("./videos/pt/TELA 02 PT NASCIMENTOS.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("02", "pt");
}

function showLuasDeLeite()
{
    console.log("SHow Luas de Leite");
    hideText("texto02pt");
    changeVideoSource("./videos/pt/TELA 03 PT - A VIA LACTEA - VIA LÁCTEA NA PAREDE NO ESCURO 1.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("03", "pt");
}

function showCabra() 
{
    console.log("SHow Cabra");
    hideText("texto03pt");
    changeVideoSource("./videos/pt/TELA 04 PT LUA DE LEITE OVELHA 1.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("04", "pt");
}

function showVaca() 
{
    console.log("SHow Vaca");
    hideText("texto04pt");
    changeVideoSource("./videos/pt/TELA 05 PT - LUAS DE LEITE - VACA 1.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("05", "pt");
}

function showMonikaPt()
{
    hideText("texto05pt");
    changeVideoSource("./videos/pt/TELA 06 PT - LUAS DE LEITE - CABRA 1.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("06", "pt");
}

function showViagemAoCentroDasLuas() 
{
    hideText("texto06pt");
    changeVideoSource("./videos/pt/TELA 07 PT - LUAS DE LEITE - MONIKA 1.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("07", "pt");
}

function showLinguaLactea() 
{
    hideText("texto07pt");
    hideText("texto071pt");
    hideText("texto072pt");
    changeVideoSource("./videos/pt/TELA 08 PT - MINIMUNDO 1 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("08", "pt");
}

function showProduzirCom() 
{
    hideText("texto08pt");
    changeVideoSource("./videos/pt/TELA 09 PT - MINIMUNDO 4 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("09", "pt");
}

function showACasaDeMuites()
{
    hideText("texto09pt");
    changeVideoSource("./videos/pt/TELA 10 PT - MINIMUNDO 2 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("10", "pt");
}

function showObservaSeEmbriaoCom()
{
    hideText("texto10pt");
    changeVideoSource("./videos/pt/TELA 11 PT - MINIMUNDO 3 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("11", "pt");
}

function showVesiculaBiliarDistendida()
{
    hideText("texto11pt");
    changeVideoSource("./videos/pt/TELA 12 PT - POEMA-LAUDO EMBRIÃO 1.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("12", "pt");
}

function showPedra() 
{
    hideText("texto12pt");
    changeVideoSource("./videos/pt/TELA 13 PT - POEMA-LAUDO VESICULA 1.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("13", "pt");
}

function showPaisEmMaternagem() 
{
    hideText("texto13pt");
    changeVideoSource("./videos/pt/TELA 14 PT - PEDRA 1.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("14", "pt");
}

function showOSoproNaBolhaQueEstoura()
{
    hideText("texto14pt");
    changeVideoSource("./videos/pt/TELA 15 PT - PAIS EM MATERNAGEM - CAVALO MARINHO 1.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("15", "pt");
}

function showSonhoDeFechamento()
{
    hideText("texto15pt");
    changeVideoSource("./videos/pt/TELA 16 PT - LEVANHA 2 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("16", "pt");
}

function showTodaMateria()
{
    hideText("texto16pt");
    changeVideoSource("./videos/pt/TELA 17 PT - THE PLANET AND THE POOL 1.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("17", "pt");
}

function showEsquecimento()
{
    hideText("texto17pt");
    changeVideoSource("./videos/pt/TELA 18 PT - ALVEOLOS 1.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("18", "pt");
}

function showCreditosParte1()
{
    hideText("texto18pt");
    changeVideoSource("./videos/pt/TELA 19 PT LARVAS NOVAS 1.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("19", "pt");
}

function showCreditosParte2()
{
    hideText("texto19pt");
    changeVideoSource("./videos/TELA 20 - TODOS CRÉDITOS.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("20", "pt");
    showText("texto2001pt");
    showText("texto2002pt");
    showText("texto2004pt");
    showText("texto2005pt");
    showText("texto2006pt");
    showText("texto2007pt");
    showText("texto2008pt");
    showText("texto2009pt");
    showText("texto2010pt");
    showText("texto2011pt");
    showText("texto2012pt");
    showText("texto2013pt");
    showText("texto2014pt");
    showText("texto2015pt");
    showText("texto2016pt");
    showText("texto2017pt");
    showText("texto2018pt");
    showText("texto2019pt");
    showText("texto2020pt");
    showText("texto2021pt");
    showText("texto2022pt");
    showText("texto2023pt");
    showText("texto2024pt");
    showText("texto2025pt");
    showText("texto2026pt");
    showText("texto2027pt");
}