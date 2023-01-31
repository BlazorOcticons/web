
function scrollToId(id) {
  const element = document.getElementById(id);
  if (element instanceof HTMLElement) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
}

function addRandomIcons() {
  const divs = document.getElementsByClassName('random-icon');
  const parent = document.getElementById('random-icons-container');
  const winWidth = parent.offsetWidth;
  const winHeight = parent.offsetHeight;
  
  for (var i = 0; i < divs.length; i++) {
    
    var thisDiv = divs[i];
    
    var randomTop = getRandomNumber(0, winHeight);
    var randomLeft = getRandomNumber(0, winWidth);

    thisDiv.style.top = randomTop + "px";
    thisDiv.style.left = randomLeft + "px";
  }
}

// function that returns a random number between a min and max
function getRandomNumber(min, max) {

  return Math.random() * (max - min) + min;

}