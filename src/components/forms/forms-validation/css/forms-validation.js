function ValidationEvent() {
  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  // validate movie form

  var movieTitle = document.getElementById("movieTitle").value;
  var director = document.getElementById("director").value;
  var year = document.getElementById("year").value;

  //email validation
  var emailValid = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;

  // conditions
  if (email.match(emailValid)) {
    alert("Invalid email");
  }
}
