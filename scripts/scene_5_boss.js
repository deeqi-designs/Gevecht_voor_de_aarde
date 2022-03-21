//GEMAAKT DOOR MIKA STERKEN

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

//CODE START WANNEER ufo_baas IS INGELADEN -> BEGIN SCENE 5 DUS
$("ufo_baas").ready(function () {
  //VARIABELEN
  alienBossLives = 10; //Hoevaak alien boss schieten
  bossAlive = 1;
  ammoCountCur = 5;
  //OBJECTEN
  ufoBaasObj = document.getElementById("ufo_baas");
  baasOntpoffing = document.getElementById("baas_ontploffing");
  //EVENT LISTENERS
  document.addEventListener("wheel", ammoReload);
  document.getElementById("HUD_ammo").addEventListener("click", shotFired);
  document.getElementById("sterren").addEventListener("click", shotFired);
  ufoBaasObj.addEventListener("click", bossShot);
  function bossShot() {
    if (bossAlive > 0) {
      if (ammoCountCur > 0) {
        ammoCountCur -= 1;
        ammoCounter(ammoCountCur);
        alienBossLives -= 1;
        switch (alienBossLives) {
          case 10:
            shotExecutorBoss(0);
            break;

          case 9:
            shotExecutorBoss(1);
            break;

          case 8:
            shotExecutorBoss(2);
            break;

          case 7:
            shotExecutorBoss(3);
            break;

          case 6:
            shotExecutorBoss(4);
            break;

          case 5:
            shotExecutorBoss(5);
            break;

          case 4:
            shotExecutorBoss(6);
            break;

          case 3:
            shotExecutorBoss(7);
            break;

          case 2:
            shotExecutorBoss(8);
            break;

          case 1:
            shotExecutorBoss(9);
            break;

          case 0:
            shotExecutorBoss(10);
            bossAlive -= 1;
            break;
        }
        if (bossAlive == 0) {
          //SCRIPTED EVENT -> LAAT EXPLOSIE ZIEN EN LAAT UFO VERDWIJNEN
          ufoBaasObj.style.animation = "none";
          setTimeout(function timer() {
            baasOntpoffing.style.display = "block";
          }, 1500);
          setTimeout(function timer() {
            ufoBaasObj.style.display = "none";
          }, 2000);

          setTimeout(function timer() {
            baasOntpoffing.style.animation = "none";
          }, 4500);

          setTimeout(function timer() {
            sceneChanger("scene_6.html");
          }, 5500);
        }
      } else {
        alert("Magazijn is leeg, herlaad je wapen!");
      }
    }
  }

  //CODE OM ANIMATIE GESCHOTEN UFO AF TE SPELEN
  function shotExecutorBoss(shotsHit) {
    switch (shotsHit) {
      case 1:
        ufoBaasObj.style.opacity = "100%";
        ufoBaasObj.style.animationDelay = "0s";
        ufoBaasObj.style.animationName = "ufoBaasMovement";
        ufoBaasObj.style.animationDuration = "3s";
        ufoBaasObj.style.animationIterationCount = "infinite";
        break;

      case 2:
        ufoBaasObj.style.backgroundImage =
          "url(../sprites/objecten/baas_ufo_1.png)";
        break;

      case 4:
        ufoBaasObj.style.backgroundImage =
          "url(../sprites/objecten/baas_ufo_2.png)";
        ufoBaasObj.style.animationDuration = "2.5s";
        break;

      case 6:
        ufoBaasObj.style.backgroundImage =
          "url(../sprites/objecten/baas_ufo_3.png)";
        ufoBaasObj.style.marginTop = "303px"; //IMAGE IS KLEINER DAN VOORGAANDE -> MARGIN AANPASSEN
        ufoBaasObj.style.animationDuration = "1.5s";
        break;

      case 8:
        ufoBaasObj.style.backgroundImage =
          "url(../sprites/objecten/baas_ufo_4.png)";
        ufoBaasObj.style.marginTop = "360px"; //IMAGE IS KLEINER DAN VOORGAANDEN -> MARGIN AANPASSEN
        ufoBaasObj.style.animationDuration = "0.75s";
        break;

      case 10:
        ufoBaasObj.style.backgroundImage =
          "url(../sprites/objecten/baas_ufo_5.png)";
        ufoBaasObj.style.marginLeft = "300px";
        break;
    }
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
