// console.log(`hello...`);
// window.alert(`Are kha chle...`);
// window.alert("I love pizza");

// document.getElementById("id1").textContent = `pankaj`;
// document.getElementById("id2").textContent = `i lova pizza`;

// let age = 24;
// let price = 5448.5;
// console.log(`user age is ${age} hai `);
// console.log(`given price by user is ${price} and \n age is \t ${age}.....ok`);

// let firstname = "pankaj";
// console.log(typeof firstname); // string

// let lastname = "2kumawat";
// console.log(typeof lastname); //string
// let age = "258";
// console.log(typeof age);

// let newage = parseInt(age);
// console.log(typeof newage);

// let newlastname = parseInt(lastname);
// console.log(typeof newlastname);

// let surname = `pankaj`;
// console.log(typeof surname);

// let newsurname = parseInt(surname);
// console.log(newsurname);

// let newagainfirst = `1256`;
// let again = parseInt(newagainfirst);
// console.log(typeof again);

// let food = "pizza";
// let type = typeof food;
// console.log(`my favorite food is ${food} and the type of it is ${type} hai  }`);

// let myemail = window.prompt(`Enter your email.....`);
// console.log(`my email enter is ${myemail}`);

// document.getElementById("id1").textContent = myemail;

// let online = false;
// console.log(typeof online);

// console.log(`bro is online  ${online}`);

// let isStudent = false;
// console.log(isStudent ? "ye he is student " : "no ");

// let firstname = window.prompt(`enter your name.....`);
// let age = 25;
// let student = false;

// document.getElementById("p1").textContent = `your name is ${firstname}`;
// document.getElementById("p2").textContent = `your age is ${age}`;
// document.getElementById("p3").textContent = `are you a student ${student}`;

// let intvalue = 5;

// const newvalue = intvalue ** intvalue;
// // console.log(newvalue);

// document.getElementById("sub").onclick = function () {
//   let valuesss = document.getElementById("firstname").value;
//   console.log(typeof valuesss);
//   if (typeof valuesss == "string") {
//     console.log("its an string ........");

//     console.log("converting into number ")
// }

//   console.log(valuesss);
//   document.getElementById("firstname").value = "";
// };

// let age = window.prompt("ENter age .......");
// age = parseInt(age);
// age = age + 1;
// console.log(age, typeof age);

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// x = parseInt(x); //NaN
// y = String(y); //string
// z = Boolean(z); //true

// console.log(x, typeof x);

// console.log(y, typeof y);

// console.log(z, typeof z);

// let x = "0";
// let y = "0";
// let z = "0";

// console.log(x, typeof x);

// console.log(y, typeof y);

// console.log(z, typeof z);

// x = parseInt(x); //NaN
// y = String(y); //string
// z = Boolean(z); //true

// console.log(x, typeof x);

// console.log(y, typeof y);

// console.log(z, typeof z);

// let x = 10;
// let y = 20;
// let z = 85;
// let g = 84;
// console.log(Math.max(x, y, z, g, 25, 85, 95));

// let num = -5.5;
// console.log(Math.abs(num));

// let x = 99.99;
// console.log(Math.sqrt(x));

// let randomNum = Math.floor(Math.random() * 10);
// console.log(randomNum);

// const min = 4;
// const max = 90;

// let randomnum = Math.floor(Math.random() * (max - min)) + min;
// console.log(randomnum);

// //create random number

// let number = Math.floor(Math.random() * (50 - 20) + 20);
// console.log(number);

// // let num = Math.random();
// // console.log(num);

// function my() {
//   while (Math.floor(Math.random() * (50 - 20) + 20) == 50) {
//     console.log("aagya");
//   }
// }

// console.log(my());

// function generateRandomUntil50() {
//   let randomNum = 0;
//   let iterations = 0;

//   while (randomNum !== 50) {
//     randomNum = Math.floor(Math.random() * (50 - 20)) + 20;
//     iterations++;
//   }

//   return { randomNum, iterations };
// }

// const result = generateRandomUntil50();
// console.log(
//   `The number 50 was generated after ${result.iterations} iterations.`
// );

// let number = Math.floor(Math.random() * (5 - 2 + 1) + 2);
// console.log(number);

// document.getElementById("btn").onclick = function () {
//   let minnum = document.getElementById("min").value;
//   let mexnum = document.getElementById("max").value;
//   minnum = parseInt(minnum);
//   mexnum = parseInt(mexnum);

//   rnadomumber = Math.floor(Math.random() * (mexnum - minnum + 1) + minnum);
//   document.getElementById("generatnum").textContent = rnadomumber;
// };

// let min = 50;
// let max = 100;

// let randomnumber = Math.floor(Math.random() * (max - min + 1) + min);
// console.log(randomnumber);

// let username = "pankaj719";

// console.log(username.charAt(8));
// console.log(username.indexOf("n"));

// let firstname = new String("kumawat");
// console.log(firstname.lastIndexOf("t"));
// console.log(firstname.length);
// console.log(username.length);

// let username = "myaj";

// let my = username.trim();
// console.log(my);
// console.log(username.trim());
// console.log(username.charCodeAt(5));
// console.log(username.charAt(8));

// console.log(username.lastIndexOf("a"));
// console.log(username.toUpperCase());
// console.log(username.repeat(5));
// console.log(username.startsWith(" "));
// console.log(username.startsWith(""));
// console.log(username.startsWith("m"));
// console.log(username.includes(" "));
// console.log(username.includes("m"));
// console.log(username.includes("j"));
// console.log(username.includes(" "));

// let number = "958 - 952 - 8546";
// // console.log(number);
// // console.log(number.split("-"));
// // console.log(number.split("-", ""));
// number = number.split("-", "");
// console.log(number);

// let mynumber = "789-456-321";
// mynumber = mynumber.padStart(20, 0);
// console.log(mynumber);

// let fullanem = "pankaj kumawat";

// let substring = fullanem.substring(0, 6);
// // console.log(fullanem);
// // console.log(substring);

// // let firstname = fullanem.slice(0, 6);
// // let lastname = fullanem.slice(7, fullanem.length);
// // console.log(firstname);
// // console.log(lastname);
// let nm = fullanem.substring(0, 6);

// console.log(nm);

// let myname = "pankaj kumawat";

// let firstname = myname.slice(0, myname.indexOf(" "));
// console.log(firstname);
// let lastname = myname.slice(myname.indexOf(" "), myname.length);
// pAnKaJ
// console.log(lastname);

// let username = window.prompt("enter a name");
// username =
//   username.trim().charAt(0).toUpperCase() +
//   username.trim().slice(1).toLowerCase();

// console.log(username);

// let myname = "pankaj";

// myname = myname.replace("karna");
// console.log(myname);

let name = "54a12";
console.log(typeof name);
