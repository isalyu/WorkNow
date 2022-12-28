function myFunction() {
    localStorage.setItem("name", localStorage.getItem("name"));
    localStorage.setItem("user", localStorage.getItem("user"));
    localStorage.setItem("email", localStorage.getItem("email"));
    localStorage.setItem("password", localStorage.getItem("password"));
    localStorage.setItem("option", localStorage.getItem("option"));

    const name = document.getElementById("name");
    name.textContent = localStorage.getItem("name");
    const user = document.getElementById("user");
    user.textContent = localStorage.getItem("user");
    const email = document.getElementById("email");
    email.textContent = localStorage.getItem("email");
    const email-prefs = document.getElementById("email-prefs");
    email-prefs.textContent = localStorage.getItem("option");

}

function hello() {
    const helloName = document.getElementById("hello");
    helloName.textContent = localStorage.getItem("user");
}



function updateAcc() {
    let tempName = document.getElementById("name-input");
    let tempUser = document.getElementById("user-input");
    let tempEmail = document.getElementById("email-input");
    let currPass = document.getElementById("pass-input");
    let newPass = document.getElementById("new-pass-input");
    let newPass2 = document.getElementById("new-pass-input-2");

    if (tempName.value.length != 0) {
        localStorage.setItem("name", tempName.value);
    } else {
        alert("Name cannot be empty.");
    }
    if (tempUser.value.length != 0) {
        localStorage.setItem("user", tempUser.value);
    } else {
        alert("Username cannot be empty.");
    }
    if (tempEmail.value.length != 0) {
        localStorage.setItem("email", tempEmail.value);
    } else {
        alert("Email cannot be empty.");
    }

  if (currPass.value.length != 0) {
    if (currPass.value != localStorage.getItem("password")) {
      alert("The password you entered does not match your current password.");
    } else if (newPass.value.length < 6) {
      alert("The password you entered is less than 6 characters long.");
    } else if (newPass.value == localStorage.getItem("password")) {
      alert("The password you entered is the same as your current password.");
    } else if (newPass.value != newPass2.value) {
      alert("Your new password does not match the confirm password field.");
    } else {
      localStorage.setItem("password", newPass.value);
      alert("Your password was successfully changed.");
    }
  }
}

function emailAlert() {
    let ele = document.getElementsByName('email-pref');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].id == "option1") {
                localStorage.setItem("option", "All application updates.");
            } else if (ele[i].id == "option2") {
                localStorage.setItem("option", "Only action needed items.");
            } else {
                localStorage.setItem("option", "Never.");
            }
        }
    }
    email-prefs.textContent = localStorage.getItem("option");
    alert("Your email preferences have been updated.");
}

function login() {
    let tempUser = document.getElementById("user-login").value;
    localStorage.setItem("user", tempUser.value);
}

