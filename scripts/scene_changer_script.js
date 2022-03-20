//FUNCTIES
function sceneChanger(sceneName) {
  //FUNCTIE OM VAN SCENE TE VERANDEREN, MAAKT DIVS EN ANDERE ELEMENTEN HETZELFDE ALS EEN <A HREF> ELEMENT
  if (sceneName == "scene_2.html") {
    location.replace("./scenes/" + sceneName); //vanaf scene 2 in map 'scenes', hiervoor './scenes/' nodig
  } else {
    location.replace(sceneName); // scenes zitten in dezelfde map
  }
}