const test1 = () => {
  alert("Password incorrect");
};
let width = screen.width;
document.getElementById("demo").innerHTML =  width + "px";

//Account 1
const CORRECT_USER = "dcs01";
const CORRECT_PASSWORD = "12345";

//Account 2
const CORRECT_USER2 = "dcs02";
const CORRECT_PASSWORD2 = "54321";

const checkLogin = () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
console.log('A1', (password === CORRECT_PASSWORD && username === CORRECT_USER));
console.log('A2', (password === CORRECT_PASSWORD2 && username === CORRECT_USER2));

  if (
    (password === CORRECT_PASSWORD && username === CORRECT_USER) ||
    (password === CORRECT_PASSWORD2 && username === CORRECT_USER2)
  ) {
    alert("ถูกแล้วไอสัส");
    // window.location.replace("http://www.w3schools.com"); //ถ้าถูก link หน้าอื่น...
    window.location.href = './mainindex.html';
  } else {
    alert("จำไม่ได้หรือส้นตรีน");
  }
};
