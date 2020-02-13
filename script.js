/*Show/hide my phone number*/

function showPhoneNumber() {
  var x = document.getElementById("my-phone-number").style;
  if (x.visibility == "hidden" || x.visibility == "") {
    x.visibility = "visible";
  } else {
    x.display = "hidden";
  }
}