let logIn = false;
let password;
let username;

while (!logIn) {
  username = window.prompt(`enter username.....`);
  password = window.prompt(`Enter a password`);

  if (username === "iuser") {
    console.log("You are login.........");
    logIn = true;
  } else {
    console.log("INvlaid.........");
  }
}
