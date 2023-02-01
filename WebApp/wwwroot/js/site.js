
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

window.addEventListener('resize', function (event) {
  placeRandomIcons();
});

function placeRandomIcons() {
  const divs = document.getElementsByClassName('random-icon');
  const parent = document.getElementById('random-icons-container');
  const winWidth = parent.offsetWidth;
  const winHeight = parent.offsetHeight;

  let offsets = [];
  const step = 80;
  for (var i = 0; i < Math.round(winWidth / step); i++) {
    for (var j = 0; j < Math.round(winHeight / step); j++) {
      offsets[offsets.length] = { top: j * step + getRandomNumber(0, 25), left: i * step + getRandomNumber(0, 25) };
    }
  }
  offsets = shuffle(offsets);
  for (var i = 0; i < divs.length; i++) {
    
    var thisDiv = divs[i];
    
    if (offsets[i] == undefined) {
      thisDiv.style.top = "-1000px";
      thisDiv.style.left = "-1000px";
    } else {
      thisDiv.style.top = offsets[i].top + "px";
      thisDiv.style.left = offsets[i].left + "px";
    }

  }
}
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// function that returns a random number between a min and max
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}