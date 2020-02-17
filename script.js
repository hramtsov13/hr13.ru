// Let's find WHAT we gonna show by clicking the button

let togglePhone = document.querySelector('.my-phone-number');

// Let's find the button

let showPhone = document.querySelector('.show-phone');

// Tell the button how to toggle

showPhone.onclick = function () {
  togglePhone.classList.toggle('unclicked');
}


//Text toggling

let buttons = document.querySelectorAll('.button');

function hideDescription(selector) {
  let description = document.querySelector(selector);
  description.classList.remove("show");
}

function showDescription(selector) {
  let description = document.querySelector(selector);
  description.classList.add("show");
}

for (let button of buttons) {
  button.addEventListener("click", function () {
    hideDescription('.description.show');
    let descriptionId = button.dataset.descriptionId;
    showDescription(descriptionId);
  });
}


/*
let toggleDescription = document.querySelector('.description-item1');
let toggleDescription = document.querySelector('.description-item2');
let toggleDescription = document.querySelector('.description-item3');
let toggleDescription = document.querySelector('.description-item4');
let menuButtonAbout = document.querySelector('.menu-list_root-about');
let menuButtonPosition = document.querySelector('.menu-list_root-position');
let menuButtonAchievments = document.querySelector('.menu-list_root-achievments');
let menuButtonExample = document.querySelector('.menu-list_root-example');

// 1st
menuButtonAbout.onclick = function () {
  toggleDescription.classList.toggle('description-item_about');
}

// 2nd
menuButton.onclick = function () {
  toggleDescription.classList.toggle('description-item_position');
}

// 3rd
menuButton.onclick = function () {
  toggleDescription.classList.toggle('description-item_achievments');
}

// 4th
menuButton.onclick = function () {
  toggleDescription.classList.toggle('description-item_example');
}
*/