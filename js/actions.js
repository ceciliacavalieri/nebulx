var isShowOpeningDream = true;
var numeroAtual = 0;
var idiomaAtual = "";
var isDuringNext = false;

function showOpeningDream()
{
    console.log("Show opening dream");
   
    playAudio("audioBase");

    if(isShowOpeningDream)
    {
        numeroAtual = 0;
        playVideo();
        changeVideoSource("videos/00 PRIMEIRA TELA - CONSTELAÇÃO MOLECULAR COM PEDRA.mp4");
        showText("texto00en");
        showText("texto00fr");
        showText("texto00pt");
        hideText("logoStart");
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
    console.log("show text " + textId);
    var texto = document.getElementById(textId);
    texto.style.display = "block";
}

function hideText(textId)
{
    console.log("hiding text " + textId);
    var texto = document.getElementById(textId);
    texto.style.display = "none";
}

function playVideo()
{
    var video = document.getElementById("video");
    

    //video.playbackRate = 8.0;
    var promise = video.play();
    // In browsers that don’t yet support this functionality,
    // playPromise won’t be defined.
    if (promise !== undefined) {
        promise.then(function() {
        // Automatic playback started!
        video.muted = false;
        //console.log("automatic video playback started")
        }).catch(function(error) {
        // Automatic playback failed.
        //console.log("automatic video playback failed")
        // Show a UI element to let the user manually start playback.
        });
    }
}


function playAudio(audioId)
{
    var audio = document.getElementById(audioId);
    var promise = audio.play();
    // In browsers that don’t yet support this functionality,
    // playPromise won’t be defined.
    if (promise !== undefined) {
        promise.then(function() {
        // Automatic playback started!
        //console.log("automatic " + audioId + " playback started")
        }).catch(function(error) {
        // Automatic playback failed.
        //console.log("automatic " + audioId + " playback failed")
        // Show a UI element to let the user manually start playback.
        });
    }
}

function playVideoStopPrevious(numero, idioma)
{
    playVideo();
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

    if(numeroAtual > 0 && numeroAtual <= 20)
    {
        if(numero == "07")
        {
            var texto071 = document.getElementById("texto" + "071" + idioma);
            texto071.style.display = "block";
            var texto072 = document.getElementById("texto" + "072" + idioma);
            texto072.style.display = "block";
        }
        if(numero == "15")
        {
            var texto151 = document.getElementById("texto" + "151" + idioma);
            texto151.style.display = "block";
            var texto152 = document.getElementById("texto" + "152" + idioma);
            texto152.style.display = "block";
        }
        var texto = document.getElementById("texto" + numero + idioma);
        texto.style.display = "block";
    }

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
        updateNumero(true);
    }
}

function updateNumero(isFoward)
{
    console.log("update numero " + numeroAtual);
    if(isFoward)
    {
        var numeroInt = parseInt(numeroAtual, 10) + 1;
        if(numeroInt < 20)
        {
            numeroAtual = numeroInt.toString();
        }
    }
    else
    {
        var numeroInt = parseInt(numeroAtual, 10) - 1;
        if(numeroInt >= 0)
        {
            numeroAtual = numeroInt.toString();
        }
    }
    console.log("update numero " + numeroAtual);
}



function showNext()
{
    if(!isDuringNext)
    {
        if(numeroAtual >= 0 && numeroAtual <= 19)
        {
            isDuringNext = true;
            console.log("showNext function " + Date.now())
            console.log("texto" + padLeadingZeros(numeroAtual, 2) + idiomaAtual);
            showText("texto" + padLeadingZeros(numeroAtual, 2) + idiomaAtual)
            
            setTimeout( function () {
                isDuringNext = false;
                hideText("texto" + padLeadingZeros(numeroAtual-1, 2) + idiomaAtual);
                console.log("texto" + padLeadingZeros(numeroAtual-1, 2) + idiomaAtual);
                console.log(" timeout function " + Date.now());
            }, 5000);
    
            if(numeroAtual == 19)
            {
                if(idiomaAtual === "fr")
                {
                    showCreditsFrPart2();
                }
                else
                {
                    if(idiomaAtual === "pt")
                    {
                        showCreditosParte2();
                    }
                    else
                    {
                        if(idiomaAtual === "en")
                        {
                            showCreditsPart2();
                        }
                    }
                }
    
            }
            else
            {
                console.log("show next");
                console.log("Numero atual: "+ numeroAtual + " idioma atual " + idiomaAtual)
                var elementoAtual = document.getElementById("texto" + padLeadingZeros(numeroAtual, 2) + idiomaAtual);
                elementoAtual.click();
                //elementoAtual.style.display = "none"; 
            }
        }
    }
    else
    {
        console.log("Ainda nao pode ir para a proxima!!")
    } 
}

function showPrevious()
{
    console.log("show previous");
    
    console.log("Numero atual: "+ numeroAtual + " idioma atual " + idiomaAtual)

    if(numeroAtual >= 1 && numeroAtual <= 20)
    {
        updateNumero(false);

        if(numeroAtual == 0)
        {
            isShowOpeningDream = true;
            showOpeningDream();
        }
        else
        {
            if(numeroAtual > 1 && numeroAtual <= 20)
            {
                updateNumero(false);
                console.log("Numero dentro do limite " + numeroAtual);
                var elementoAtual = document.getElementById("texto" + padLeadingZeros(numeroAtual, 2) + idiomaAtual);
                elementoAtual.click();
            }
            else
            {
                if(numeroAtual == 1)
                {
                    if(idiomaAtual === "fr")
                    {
                        showNaissances();
                    }
                    else
                    {
                        if(idiomaAtual === "pt")
                        {
                            showNascimentos();
                        }
                        else
                        {
                            if(idiomaAtual === "en")
                            {
                                showBirths();
                            }
                        }
                    }
                }
                else
                {
                    console.log("Numero fora do limite " + numeroAtual);
                }
            }
        }
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
    numeroAtual = 1;
    idiomaAtual = "en";
    hideOpeningDream();
    changeVideoSource("./videos/en/TELA 01 EN - SONHO DE ABERTURA - NATA.mp4");
    playAudio("audioBase");
    playVideo();
}

function showTheMilkyWay()
{
    if(isDuringNext)
    {
        showText("texto01en");
    }
    else
    {
        hideText("texto01en");
    }
    
    numeroAtual = 2;
    changeVideoSource("./videos/en/TELA 02 EN NASCIMENTOS 1.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("02", "en");
}

function showMilkMoons()
{
    if(isDuringNext)
    {
        showText("texto02en");
    }
    else
    {
        hideText("texto02en");
    }

    numeroAtual = 3;
    changeVideoSource("./videos/en/TELA 03 EN - A VIA LACTEA - VIA LÁCTEA NA PAREDE NO ESCURO.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("03", "en");
}

function showEwe()
{
    if(isDuringNext)
    {
        showText("texto03en");
    }
    else
    {
        hideText("texto03en");
    }
    numeroAtual = 4;
    changeVideoSource("./videos/en/TELA 04 EN LUA DE LEITE OVELHA 1 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("04", "en");
}

function showCow()
{
    if(isDuringNext)
    {
        showText("texto04en");
    }
    else
    {
        hideText("texto04en");
    }
    numeroAtual = 5;
    changeVideoSource("./videos/en/TELA 05 EN - LUAS DE LEITE - VACA.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("05", "en");
}

function showMonikaEn()
{
    if(isDuringNext)
    {
        showText("texto05en");
    }
    else
    {
        hideText("texto05en");
    }

    numeroAtual = 6;
    changeVideoSource("./videos/en/TELA 06 EN - LUAS DE LEITE - CABRA 1 2 (1).mp4");
    playAudio("audioBase");
    playVideoStopPrevious("06", "en");
}

function showJourneyToTheCenterOfTheMoons()
{
    if(isDuringNext)
    {
        showText("texto06en");
    }
    else
    {
        hideText("texto06en");
    }

    numeroAtual = 7;
    changeVideoSource("./videos/en/TELA 07 EN - LUAS DE LEITE - MONIKA.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("07", "en");
}

function showMilkyTongue()
{
    if(isDuringNext)
    {
        showText("texto07en");
        showText("texto071en");
        showText("texto072en");
    }
    else
    {
        hideText("texto07en");
        hideText("texto071en");
        hideText("texto072en");
    }
    numeroAtual = 8;
    changeVideoSource("./videos/en/TELA 08 EN - MINIMUNDO 1 2 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("08", "en");
}

function showProducedWith()
{
    if(isDuringNext)
    {
        showText("texto08en");
    }
    else
    {
        hideText("texto08en");
    }
    numeroAtual = 9;
    changeVideoSource("./videos/en/TELA 09 EN - MINIMUNDO 4.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("09", "en");
}

function showTheHomeOfMany()
{
    if(isDuringNext)
    {
        showText("texto09en");
    }
    else
    {
        hideText("texto09en");
    }
    numeroAtual = 10;
    changeVideoSource("./videos/en/TELA 10 EN - MINIMUNDO 2 2 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("10", "en");
}

function showBwomb()
{
    if(isDuringNext)
    {
        showText("texto10en");
    }
    else
    {
        hideText("texto10en");
    }
    numeroAtual = 11;
    changeVideoSource("./videos/en/TELA 11 EN - MINIMUNDO 3.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("11", "en");
}

function showGallbladder()
{
    if(isDuringNext)
    {
        showText("texto11en");
    }
    else
    {
        hideText("texto11en");
    }
    numeroAtual = 12;
    changeVideoSource("./videos/en/TELA 12 EN - POEMA-LAUDO EMBRIÃO 1 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("12", "en");
}

function showStone()
{
    if(isDuringNext)
    {
        showText("texto12en");
    }
    else
    {
        hideText("texto12en");
    }
    numeroAtual = 13;
    changeVideoSource("./videos/en/TELA 13 EN - POEMA-LAUDO VESICULA.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("13", "en");
}

function showMotheringFathers()
{
    if(isDuringNext)
    {
        showText("texto13en");
    }
    else
    {
        hideText("texto13en");
    }
    numeroAtual = 14;
    changeVideoSource("./videos/en/TELA 14 EN - PEDRA 1 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("14", "en");
}

function showTheBreathInTheBurstingBubble()
{
    if(isDuringNext)
    {
        showText("texto14en");
    }
    else
    {
        hideText("texto14en");
    }
    numeroAtual = 15;
    changeVideoSource("./videos/en/TELA 15 EN - PAIS EM MATERNAGEM - CAVALO MARINHO.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("15", "en");
}

function showClosingDream()
{
    if(isDuringNext)
    {
        showText("texto151en");
        showText("texto152en");
        showText("texto15en");
    }
    else
    {
        hideText("texto151en");
        hideText("texto152en");
        hideText("texto15en");
    }
    numeroAtual = 16;
    changeVideoSource("./videos/en/TELA 16 EN - LEVANHA 2 2 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("16", "en");
}

function showAllTheMatter()
{
    if(isDuringNext)
    {
        showText("texto16en");
    }
    else
    {
        hideText("texto16en");
    }
    numeroAtual = 17;
    changeVideoSource("./videos/en/TELA 17 EN - THE PLANET AND THE POOL.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("17", "en");
}

function showOblivion()
{
    hideText("logoEnd");
    if(isDuringNext)
    {
        showText("texto17en");
    }
    else
    {
        hideText("texto17en");
    }
    numeroAtual = 18;
    changeVideoSource("./videos/en/TELA 18 EN - ALVEOLOS 1 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("18", "en");
}

function showCreditsPart1()
{
    showText("logoEnd");
    numeroAtual = 19;
    if(isDuringNext)
    {
        showText("texto18en");
    }
    else
    {
        hideText("texto18en");
    }
    changeVideoSource("./videos/en/TELA 19 EN LARVAS NOVAS.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("19", "en");
    hideText("texto20en");
    hideText("texto2001en");
    hideText("texto2002en");
    hideText("texto2004en");
    hideText("texto2005en");
    hideText("texto2006en");
    hideText("texto2007en");
    hideText("texto2008en");
    hideText("texto2009en");
    hideText("texto2010en");
    hideText("texto2011en");
    hideText("texto2012en");
    hideText("texto2013en");
    hideText("texto2014en");
    hideText("texto2015en");
    hideText("texto2016en");
    hideText("texto2017en");
    hideText("texto2018en");
    hideText("texto2019en");
    hideText("texto2020en");
    hideText("texto2021en");
    hideText("texto2022en");
    hideText("texto2023en");
    hideText("texto2024en");
    hideText("texto2025en");
    hideText("texto2026en");
    hideText("texto2027en");
}

function showCreditsPart2()
{
    showText("logoEnd");
    numeroAtual = 20;
    if(isDuringNext)
    {
        showText("texto19en");
    }
    else
    {
        hideText("texto19en");
    }
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
    numeroAtual = 1;
    idiomaAtual = "fr";
    hideOpeningDream();
    changeVideoSource("./videos/fr/TELA 01 FR - SONHO DE ABERTURA - NATA 1.mp4");
    playAudio("audioBase");
    playVideo();   
}

function showLaVoieLactee()
{
    if(isDuringNext)
    {
        showText("texto01fr");
    }
    else
    {
        hideText("texto01fr");
    }
    numeroAtual = 2;
    changeVideoSource("./videos/fr/TELA 02 FR NASCIMENTOS 1.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("02", "fr");
}

function showLunesDeLait()
{
    if(isDuringNext)
    {
        showText("texto02fr");
    }
    else
    {
        hideText("texto02fr");
    }
    numeroAtual = 3;
    changeVideoSource("./videos/fr/TELA 03 FR - A VIA LACTEA - VIA LÁCTEA NA PAREDE NO ESCURO 1 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("03", "fr");
}

function showChevre()
{
    if(isDuringNext)
    {
        showText("texto03fr");
    }
    else
    {
        hideText("texto03fr");
    }
    numeroAtual = 4;
    changeVideoSource("./videos/fr/TELA 04 FR LUA DE LEITE OVELHA.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("04", "fr");
}

function showVache()
{
    if(isDuringNext)
    {
        showText("texto04fr");
    }
    else
    {
        hideText("texto04fr");
    }
    numeroAtual = 5;
    changeVideoSource("./videos/fr/TELA 05 FR - LUAS DE LEITE - VACA 1 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("05", "fr");
}

function showMonikaFr()
{
    if(isDuringNext)
    {
        showText("texto05fr");
    }
    else
    {
        hideText("texto05fr");
    }
    numeroAtual = 6;
    changeVideoSource("./videos/fr/TELA 06 FR - LUAS DE LEITE - CABRA.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("06", "fr");
}

function showVoyageAuCentreDesLunes()
{
    if(isDuringNext)
    {
        showText("texto06fr");
    }
    else
    {
        hideText("texto06fr");
    }
    numeroAtual = 7;
    changeVideoSource("./videos/fr/TELA 07 FR - LUAS DE LEITE - MONIKA 1 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("07", "fr");
}

function showLangueLactee()
{
    if(isDuringNext)
    {
        showText("texto07fr");
        showText("texto071fr");
        showText("texto072fr");
    }
    else
    {
        hideText("texto07fr");
        hideText("texto071fr");
        hideText("texto072fr");
    }
    numeroAtual = 8;
    changeVideoSource("./videos/fr/TELA 08 FR - MINIMUNDO 1.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("08", "fr");
}

function showProduireAvec()
{
    if(isDuringNext)
    {
        showText("texto08fr");
    }
    else
    {
        hideText("texto08fr");
    }
    numeroAtual = 9;
    changeVideoSource("./videos/fr/TELA 09 FR - MINIMUNDO 4 2 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("09", "fr");
}

function showLaMaisonDeTantDeGens()
{
    if(isDuringNext)
    {
        showText("texto09fr");
    }
    else
    {
        hideText("texto09fr");
    }
    numeroAtual = 10;
    changeVideoSource("./videos/fr/TELA 10 FR - MINIMUNDO 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("10", "fr");
}

function showLEmbryonEstObserveAvec()
{
    if(isDuringNext)
    {
        showText("texto10fr");
    }
    else
    {
        hideText("texto10fr");
    }
    numeroAtual = 11;
    changeVideoSource("./videos/fr/TELA 11 FR - MINIMUNDO 3 2 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("11", "fr"); 
}

function showVesiculeBiliaireDistendue()
{
    if(isDuringNext)
    {
        showText("texto11fr");
    }
    else
    {
        hideText("texto11fr");
    }
    numeroAtual = 12;
    changeVideoSource("./videos/fr/TELA 12 FR - POEMA-LAUDO EMBRIÃO.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("12", "fr"); 
}

function showPierre()
{
    if(isDuringNext)
    {
        showText("texto12fr");
    }
    else
    {
        hideText("texto12fr");
    }
    numeroAtual = 13;
    changeVideoSource("./videos/fr/TELA 13 FR - POEMA-LAUDO VESICULA 1 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("13", "fr"); 
}


function showLesPeresQuiFontDuMaternage()
{
    if(isDuringNext)
    {
        showText("texto13fr");
    }
    else
    {
        hideText("texto13fr");
    }
    numeroAtual = 14;
    changeVideoSource("./videos/fr/TELA 14 FR - PEDRA.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("14", "fr");   
}

function showLeSouffleDansLaBulleQuiEclate()
{
    if(isDuringNext)
    {
        showText("texto14fr");
    }
    else
    {
        hideText("texto14fr");
    }
    numeroAtual = 15;
    changeVideoSource("./videos/fr/TELA 15 FR - PAIS EM MATERNAGEM - CAVALO MARINHO 1 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("15", "fr");   
}


function showReveDeCloture()
{
    if(isDuringNext)
    {
        showText("texto15fr");
        showText("texto151fr");
        showText("texto152fr");
    }
    else
    {
        hideText("texto15fr");
        hideText("texto151fr");
        hideText("texto152fr");
    }
    numeroAtual = 16;
    changeVideoSource("./videos/fr/TELA 16 FR - LEVANHA 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("16", "fr");   
}


function showTouteLaMatiere()
{
    if(isDuringNext)
    {
        showText("texto16fr");
    }
    else
    {
        hideText("texto16fr");
    }
    numeroAtual = 17;
    changeVideoSource("./videos/fr/TELA 17 FR - THE PLANET AND THE POOL 1 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("17", "fr");   
}

function showLOubli()
{
    hideText("logoEnd");
    if(isDuringNext)
    {
        showText("texto17fr");
    }
    else
    {
        hideText("texto17fr");
    }
    numeroAtual = 18;
    changeVideoSource("./videos/fr/TELA 18 FR - ALVEOLOS.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("18", "fr");   
}


function showCreditsFrPart1()
{
    showText("logoEnd");
    if(isDuringNext)
    {
        showText("texto18fr");
    }
    else
    {
        hideText("texto18fr");
    }
    numeroAtual = 19;
    changeVideoSource("./videos/fr/TELA 19 FR LARVAS NOVAS 1 2 (1).mp4");
    playAudio("audioBase");
    playVideoStopPrevious("19", "fr");   
    hideText("texto20fr");
    hideText("texto2001fr");
    hideText("texto2002fr");
    hideText("texto2004fr");
    hideText("texto2005fr");
    hideText("texto2006fr");
    hideText("texto2007fr");
    hideText("texto2008fr");
    hideText("texto2009fr");
    hideText("texto2010fr");
    hideText("texto2011fr");
    hideText("texto2012fr");
    hideText("texto2013fr");
    hideText("texto2014fr");
    hideText("texto2015fr");
    hideText("texto2016fr");
    hideText("texto2017fr");
    hideText("texto2018fr");
    hideText("texto2019fr");
    hideText("texto2020fr");
    hideText("texto2021fr");
    hideText("texto2022fr");
    hideText("texto2023fr");
    hideText("texto2024fr");
    hideText("texto2025fr");
    hideText("texto2026fr");
    hideText("texto2027fr");
}

function showCreditsFrPart2()
{
    showText("logoEnd");
    if(isDuringNext)
    {
        showText("texto19fr");
    }
    else
    {
        hideText("texto19fr");
    }
    numeroAtual = 20;
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
    numeroAtual = 1;
    hideOpeningDream();
    changeVideoSource("./videos/pt/TELA 01 PT - SONHO DE ABERTURA - NATA 1.mp4");
    playAudio("audioBase");
    playVideo();
}

function showAViaLactea()
{
    console.log("Show Via Lactea");
    if(isDuringNext)
    {
        showText("texto01pt");
    }
    else
    {
        hideText("texto01pt");
    }
    numeroAtual = 2;
    changeVideoSource("./videos/pt/TELA 02 PT NASCIMENTOS.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("02", "pt");
}

function showLuasDeLeite()
{
    console.log("SHow Luas de Leite");
    if(isDuringNext)
    {
        showText("texto02pt");
    }
    else
    {
        hideText("texto02pt");
    }
    numeroAtual = 3;
    changeVideoSource("./videos/pt/TELA 03 PT - A VIA LACTEA - VIA LÁCTEA NA PAREDE NO ESCURO 1.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("03", "pt");
}

function showCabra() 
{
    console.log("Show Cabra");
    if(isDuringNext)
    {
        showText("texto03pt");
    }
    else
    {
        hideText("texto03pt");
    }
    numeroAtual = 4;
    changeVideoSource("./videos/pt/TELA 04 PT LUA DE LEITE OVELHA 1.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("04", "pt");
}

function showVaca() 
{
    console.log("Show Vaca");
    if(isDuringNext)
    {
        showText("texto04pt");
    }
    else
    {
        hideText("texto04pt");
    }
    numeroAtual = 5;
    changeVideoSource("./videos/pt/TELA 05 PT - LUAS DE LEITE - VACA 1.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("05", "pt");
}

function showMonikaPt()
{
    if(isDuringNext)
    {
        showText("texto05pt");
    }
    else
    {
        hideText("texto05pt");
    }
    numeroAtual = 6;
    changeVideoSource("./videos/pt/TELA 06 PT - LUAS DE LEITE - CABRA 1.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("06", "pt");
}

function showViagemAoCentroDasLuas() 
{
    if(isDuringNext)
    {
        showText("texto06pt");
    }
    else
    {
        hideText("texto06pt");
    }
    numeroAtual = 7;
    changeVideoSource("./videos/pt/TELA 07 PT - LUAS DE LEITE - MONIKA 1.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("07", "pt");
}

function showLinguaLactea() 
{
    if(isDuringNext)
    {
        showText("texto07pt");
        showText("texto071pt");
        showText("texto072pt");
    }
    else
    {
        hideText("texto07pt");
        hideText("texto071pt");
        hideText("texto072pt");
    }
    numeroAtual = 8;
    changeVideoSource("./videos/pt/TELA 08 PT - MINIMUNDO 1 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("08", "pt");
}

function showProduzirCom() 
{
    if(isDuringNext)
    {
        showText("texto08pt");
    }
    else
    {
        hideText("texto08pt");
    }
    numeroAtual = 9;
    changeVideoSource("./videos/pt/TELA 09 PT - MINIMUNDO 4 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("09", "pt");
}

function showACasaDeMuites()
{
    if(isDuringNext)
    {
        showText("texto09pt");
    }
    else
    {
        hideText("texto09pt");
    }
    numeroAtual = 10;
    changeVideoSource("./videos/pt/TELA 10 PT - MINIMUNDO 2 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("10", "pt");
}

function showObservaSeEmbriaoCom()
{
    if(isDuringNext)
    {
        showText("texto10pt");
    }
    else
    {
        hideText("texto10pt");
    }
    numeroAtual = 11;
    changeVideoSource("./videos/pt/TELA 11 PT - MINIMUNDO 3 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("11", "pt");
}

function showVesiculaBiliarDistendida()
{
    if(isDuringNext)
    {
        showText("texto11pt");
    }
    else
    {
        hideText("texto11pt");
    }
    numeroAtual = 12;
    changeVideoSource("./videos/pt/TELA 12 PT - POEMA-LAUDO EMBRIÃO 1.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("12", "pt");
}

function showPedra() 
{
    if(isDuringNext)
    {
        showText("texto12pt");
    }
    else
    {
        hideText("texto12pt");
    }
    numeroAtual = 13;
    changeVideoSource("./videos/pt/TELA 13 PT - POEMA-LAUDO VESICULA 1.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("13", "pt");
}

function showPaisEmMaternagem() 
{
    if(isDuringNext)
    {
        showText("texto13pt");
    }
    else
    {
        hideText("texto13pt");
    }
    numeroAtual = 14;
    changeVideoSource("./videos/pt/TELA 14 PT - PEDRA 1.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("14", "pt");
}

function showOSoproNaBolhaQueEstoura()
{
    if(isDuringNext)
    {
        showText("texto14pt");
    }
    else
    {
        hideText("texto14pt");
    }
    changeVideoSource("./videos/pt/TELA 15 PT - PAIS EM MATERNAGEM - CAVALO MARINHO 1.mp4");
    numeroAtual = 15;
    playAudio("audioBase");
    playVideoStopPrevious("15", "pt");
}

function showSonhoDeFechamento()
{
    if(isDuringNext)
    {
        showText("texto15pt");
        showText("texto151pt");
        showText("texto152pt");
    }
    else
    {
        hideText("texto15pt");
        hideText("texto151pt");
        hideText("texto152pt");
    }
    numeroAtual = 16;
    changeVideoSource("./videos/pt/TELA 16 PT - LEVANHA 2 2.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("16", "pt");
}

function showTodaMateria()
{
    if(isDuringNext)
    {
        showText("texto16pt");
    }
    else
    {
        hideText("texto16pt");
    }

    numeroAtual = 17;
    changeVideoSource("./videos/pt/TELA 17 PT - THE PLANET AND THE POOL 1.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("17", "pt");
}

function showEsquecimento()
{
    hideText("logoEnd");
    if(isDuringNext)
    {
        showText("texto17pt");
    }
    else
    {
        hideText("texto17pt");
    }
    numeroAtual = 18;
    changeVideoSource("./videos/pt/TELA 18 PT - ALVEOLOS 1.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("18", "pt");
}

function showCreditosParte1()
{
    showText("logoEnd");
    if(isDuringNext)
    {
        showText("texto18pt");
    }
    else
    {
        hideText("texto18pt");
    }
    numeroAtual = 19;
    changeVideoSource("./videos/pt/TELA 19 PT LARVAS NOVAS 1.mp4");
    playAudio("audioBase");
    playVideoStopPrevious("19", "pt");
    hideText("texto20pt");
    hideText("texto2001pt");
    hideText("texto2002pt");
    hideText("texto2004pt");
    hideText("texto2005pt");
    hideText("texto2006pt");
    hideText("texto2007pt");
    hideText("texto2008pt");
    hideText("texto2009pt");
    hideText("texto2010pt");
    hideText("texto2011pt");
    hideText("texto2012pt");
    hideText("texto2013pt");
    hideText("texto2014pt");
    hideText("texto2015pt");
    hideText("texto2016pt");
    hideText("texto2017pt");
    hideText("texto2018pt");
    hideText("texto2019pt");
    hideText("texto2020pt");
    hideText("texto2021pt");
    hideText("texto2022pt");
    hideText("texto2023pt");
    hideText("texto2024pt");
    hideText("texto2025pt");
    hideText("texto2026pt");
    hideText("texto2027pt");
}

function showCreditosParte2()
{
    showText("logoEnd");
    if(isDuringNext)
    {
        showText("texto19pt");
    }
    else
    {
        hideText("texto19pt");
    }
    numeroAtual = 20;
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