//VARIABELEN

function sceneChanger(sceneName) {
  //FUNCTIE OM VAN SCENE TE VERANDEREN, MAAKT DIVS EN ANDERE ELEMENTEN HETZELFDE ALS EEN <A HREF> ELEMENT
  if (sceneName == "scene_2.html") {
    location.replace("./scenes/" + sceneName); //vanaf scene 2 in map 'scenes', hiervoor './scenes/' nodig
  } else {
    location.replace(sceneName); // scenes zitten in dezelfde map
  }
}

function ammoCounter(ammoVal) {
  //FUNCTIE VOOR INTERACTIE - SCHIETEN (SCHERM 4 EN 5)
  switch (ammoVal) {
    case 5:
      document.getElementById("HUD_ammo").style.backgroundImage =
        "url(../sprites/HUD/ammo_indicator_5.png)";
      break;

    case 4:
      document.getElementById("HUD_ammo").style.backgroundImage =
        "url(../sprites/HUD/ammo_indicator_4.png)";
      break;

    case 3:
      document.getElementById("HUD_ammo").style.backgroundImage =
        "url(../sprites/HUD/ammo_indicator_3.png)";
      break;

    case 2:
      document.getElementById("HUD_ammo").style.backgroundImage =
        "url(../sprites/HUD/ammo_indicator_2.png)";
      break;

    case 1:
      document.getElementById("HUD_ammo").style.backgroundImage =
        "url(../sprites/HUD/ammo_indicator_1.png)";
      break;

    case 0:
      document.getElementById("HUD_ammo").style.backgroundImage =
        "url(../sprites/HUD/ammo_indicator_0.png)";
      break;
  }
}

function ammoReload() {
  //FUNCTIE VOOR INTERACTIE - HERLADEN (SCHERM 4 EN 5)
  if (ammoCountCur < 5) {
    //BRON GERAADPLEEGD https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop
    for (let i = ammoCountCur; i <= 5; i++) {
      ammoCountCur += 1;
      setTimeout(function timer() {
        document.getElementById("HUD_ammo").style.backgroundImage =
          "url(../sprites/HUD/ammo_indicator_" + i + ".png)";
      }, i * 100);
    }
  }
}

//CODE START WANNEER ufo_1 IS INGELADEN -> BEGIN SCENE 4 DUS
$("ufo_1").ready(function () {
  //VARIABELEN
  aliensAlive = 4;
  ammoCountCur = 5;
  //EVENT LISTENERS
  document.addEventListener("wheel", ammoReload);
  document.getElementById("HUD_ammo").addEventListener("click", shotFired);
  document.getElementById("sterren").addEventListener("click", shotFired);
  document.getElementById("ufo_1").addEventListener("click", function () {
    alienShot(1);
  });
  document.getElementById("ufo_2").addEventListener("click", function () {
    alienShot(2);
  });
  document.getElementById("ufo_3").addEventListener("click", function () {
    alienShot(3);
  });
  document.getElementById("ufo_4").addEventListener("click", function () {
    alienShot(4);
  });

  function alienShot(alienNumber) {
    if (aliensAlive > 0) {
      if (ammoCountCur > 0) {
        ammoCountCur -= 1;
        ammoCounter(ammoCountCur);

        switch (alienNumber) {
          case 1:
            shotExecutor("ufo_1");
            break;

          case 2:
            shotExecutor("ufo_2");
            break;

          case 3:
            shotExecutor("ufo_3");
            break;

          case 4:
            shotExecutor("ufo_4");
            break;
        }
        aliensAlive -= 1;
        if (aliensAlive == 0) {
          setTimeout(function () {
            sceneChanger("scene_5.html"); //verbergt element
          }, 700);
        }
      } else {
        alert("Magazijn is leeg, herlaad je wapen!");
      }
    }
  }

  //CODE OM ANIMATIE GESCHOTEN UFO AF TE SPELEN
  function shotExecutor(ufoKeuze) {
    document.getElementById(ufoKeuze).style.animation = "none";
    for (let i = 0; i <= 4; i++) {
      setTimeout(function timer() {
        //BRON: https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop -> Uitleg over delayed functie uitvoeren. Nodig gehad zodat ik de HUD kon animeren.
        document.getElementById(ufoKeuze).style.backgroundImage =
          "url(../sprites/objecten/ufo_explosion_" + i + ".png)";
      }, i * 175);
    }
    setTimeout(function () {
      document.getElementById(ufoKeuze).style.display = "none"; //verbergt element
    }, 700);
  }

  function shotFired() {
    if (ammoCountCur > 0) {
      ammoCountCur -= 1;
      ammoCounter(ammoCountCur);
    } else {
      alert("Magazijn is leeg, herlaad je wapen!");
    }
  }
});
