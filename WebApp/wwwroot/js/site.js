
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
  var iMax = Math.round(winWidth / step);
  var jMax = Math.round(winHeight / step);
  for (var i = 0; i < iMax; i++) {
    for (var j = 0; j < jMax; j++) {
      offsets[offsets.length] = { top: j * step, left: i * step, i: i, j: j};
    }
  }
  for (var k = 0; k < divs.length; k++) {
    var thisDiv = divs[k];
    if (offsets[k] == undefined) {
      thisDiv.style.top = "-1000px";
      thisDiv.style.left = "-1000px";
    } else {
      thisDiv.style.top = offsets[k].top + step / 2 - thisDiv.offsetHeight / 2 + "px";
      thisDiv.style.left = offsets[k].left + step / 2 - thisDiv.offsetWidth / 2 + "px";
    }
  }
}