/*Show/hide my phone number*/

function showPhoneNumber() {
  var x = document.getElementById("my-phone-number").style;
  if (x.display == "none" || x.display == "") {
    x.display = "block";
  } else {
    x.display = "none";
  }
}