//GEMAAKT DOOR MIKA STERKEN
//SCRIPT GEISOLEERD VAN ALGEMEEN SCRIPT VANWEGE LOOPING ERROR

//FUNCTIES
function sceneChanger(sceneName) {
  //FUNCTIE OM VAN SCENE TE VERANDEREN, MAAKT DIVS EN ANDERE ELEMENTEN HETZELFDE ALS EEN <A HREF> ELEMENT
  if (sceneName == "scene_2.html") {
    location.replace("./scenes/" + sceneName); //vanaf scene 2 in map 'scenes', hiervoor './scenes/' nodig
  } else {
    location.replace(sceneName); // scenes zitten in dezelfde map
  }
}

//SCENE 2 - CUTSCENE FUNCTIE
$("#graph_lijnen").ready(function () {
  subtitles = document.getElementById("subtitle_text");
  //SCENE 2 - CODE OM TEXT TE VERANDEREN ONDERAAN IN HET SCHERM -> START WANNEER "graph_lijnen" image geladen is.
  setTimeout(function timer() {
    speelAnimatieKarakters("Baas");
    subtitles.style.display = "block";
  }, 500);

  setTimeout(function timer() {
    speelAnimatieKarakters("Worm");
    subtitles.innerHTML = "Worm: Wat is er baas?";
  }, 3500);

  setTimeout(function timer() {
    speelAnimatieKarakters("Baas");
    subtitles.innerHTML =
      "Baas: Aliens omringen de aarde en jij moet ze stoppen!";
  }, 6500);

  setTimeout(function timer() {
    speelAnimatieKarakters("Worm");
    subtitles.innerHTML = "Worm: Maar hoe dan baas?";
  }, 10500);

  setTimeout(function timer() {
    speelAnimatieKarakters("Baas");
    subtitles.innerHTML =
      "Baas: Ik stuur je ons nieuwste wapen op, samen met instructies hoe je deze moet gebruiken.";
  }, 13500);

  setTimeout(function timer() {
    speelAnimatieKarakters("Baas");
    subtitles.innerHTML =
      "Baas: Maak je maar geen zorgen, ik weet dat je dit kan!";
  }, 18500);

  setTimeout(function timer() {
    speelAnimatieKarakters("Worm");
    subtitles.innerHTML = "Worm: Bedankt baas, ik zal je niet teleurstellen!";
  }, 21500);

  setTimeout(function timer() {
    speelAnimatieKarakters("END");
    subtitles.style.display = "none";
  }, 24500);

  setTimeout(function () {
    //stopt scene na bepaalde tijd
    sceneChanger("scene_3.html");
  }, 25500); //TIJD IN MILLISECONDEN, NIET SECONDEN (1000 -> 1 seconde)
});

function speelAnimatieKarakters(naamKarakter) {
  if (naamKarakter == "Worm") {
    document.getElementById("baas_mond").style.animationPlayState = "paused";
    document.getElementById("baas_hoofd").style.animationPlayState = "paused";
    document.getElementById("worm_mond").style.animationPlayState = "running";
    document.getElementById("worm_hoofd_1").style.animationPlayState =
      "running";
  }

  if (naamKarakter == "Baas") {
    document.getElementById("baas_mond").style.animationPlayState = "running";
    document.getElementById("baas_hoofd").style.animationPlayState = "running";
    document.getElementById("worm_mond").style.animationPlayState = "paused";
    document.getElementById("worm_hoofd_1").style.animationPlayState = "paused";
  }

  if (naamKarakter == "END") {
    document.getElementById("baas_mond").style.animationPlayState = "paused";
    document.getElementById("baas_hoofd").style.animationPlayState = "paused";
    document.getElementById("worm_mond").style.animationPlayState = "paused";
    document.getElementById("worm_hoofd_1").style.animationPlayState = "paused";
    document.getElementById("graph_lijnen").style.animationPlayState = "paused";
  }
}
