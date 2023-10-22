/*!
* Start Bootstrap - Small Business v5.0.5 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function clickDown(boxName) {
  let box = document.getElementById(boxName + "-collapsable-list");
  let img = document.getElementById(boxName + "-dropdown-icon");
  if (box.style.display === "none") {
    box.style.display = "block";
    img.src = "assets/chevron-down.png";
  } else {
    box.style.display = "none";
    img.src = "assets/chevron-right.png";
  }
}

function clickRight(boxName) {
  let box = document.getElementById(boxName + "-collapsable-list");
  let img = document.getElementById(boxName + "-dropdown-icon");
  let grid = document.getElementById(boxName + "-d-grid")
  let bigBox = document.getElementById(boxName + "-collapsable-box")
  if (box.style.display === "none") {
    box.style.display = "block";
    img.src = "assets/chevron-left.png";
    grid.style.gridTemplateColumns = "45% 45% 10%";
    bigBox.style.width = "100%";
  } else {
    box.style.display = "none";
    img.src = "assets/chevron-right.png";
    grid.style.gridTemplateColumns = "90% 10%";
    bigBox.style.width = "50%";
  }
}