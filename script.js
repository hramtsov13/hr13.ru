// Let's find WHAT we gonna show by clicking the button

let myPhoneNumber = document.querySelector('.my-phone-number');

// Let's find the button

let showPhone = document.querySelector('.show-phone');

// Tell the button how to toggle

showPhone.onclick = function () {
  myPhoneNumber.classList.toggle('unclicked');
}