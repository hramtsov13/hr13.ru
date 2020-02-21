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