let array = [];
function singUp() {
  document.getElementById("signup").style.display = "block";
}
function logIn() {
  document.getElementById("login").style.display = "block";
}
function toSaveData() {
  let emailInput = document.getElementById("emailId").value;
  let passwordInputFirst = document.getElementById("passwordFirstTime").value;
  let passwordInputSecond = document.getElementById("passwordSecondTime").value;
  if (passwordInputFirst == passwordInputSecond) {
    array.push([emailInput, passwordInputFirst]);
  } else {
    alert("try agein with match password");
  }
  console.log(array);
  //   array.push([emailInput, passwordInputFirst]);
}
console.log("------");
console.log(array);

function checkData() {
  //   let emailInput = document.getElementById("emailLogIn").value;
  //   let passwordInputFirst = document.getElementById("passwordLogIn").value;
  //   array.forEach(myFunction);
  //   function myFunction(emailIndex, passwordIndex) {
  //     emailIndex = 0;
  //     passwordIndex = emailIndex + 1;
  //     if (
  //       array[index] === emailInput &&
  //       array[passwordIndex] === passwordInputFirst
  //     ) {
  //       console.log("xazabbbbbbb");
  //     }
  //   }
}
