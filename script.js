var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
//       


    css.textContent = 
function setGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value} );`;
       // "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

//Arrow Function vs Functions
const add = (a,b,c) => a+b+c;

function addx(a,b,c){
    return a+b+c;
}

const addTo = x => y => x+y;
let addToTen = addTo(10);
addToTen(10);


const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1);


//************* IMP **************
const multiply = (a,b) => a*b;
undefined
const curriedMult = (a) => (b) => a * b;
undefined
curriedMult(5);
(b) => a * b
curriedMult(5);
(b) => a * b
const mult5=curriedMult(5);
undefined
mult5(10);
50
//***************************


const compose = (f,g) => (a) => f(g(a));
const sum = (num) => num+1;
compose(sum,sum)(5);



var a = 'test';
var b = true;
var c = 789;
a = 'test2';

const a = 'test';
const b = true;
const c = 789;
a = 'test2';

let a = 'test';
let b = true;
let c = 789;
a = 'test2';



let person={
	f_name	:"Naresh",
	l_name	:"Bagul",
	p_no	:"1232321",
	addr	:"Dhule"
}
var firstName = person.f_name;
var lastName = person.l_name;
var pho = person.p_no;
var addr = person.addr;


// Adv array


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const divisibleByThrree = array.filter(v => v%3 === 0);

//for each (only iterate)
const doubleArr=[];
const narr=array.forEach((num) => {
	doubleArr.push(num*2);
});
undefined
doubleArr;
(15) [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]

const narrc=array.forEach((num) => {
	console.log(num*2);
});



// map array (return new Array)[must return]
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const mapArray = array.map((num) => {
	return num*2;
});

const mapArraya = array.map((num) => num*2);
undefined
mapArraya
(15) [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]

undefined
console.log(mapArray);
VM4970:1 (15) [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]
undefined
mapArray
(15) [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]


// filer  (return new Array)[must return]
const FilterArr=array.filter((num) => num%2===0);
console.log(FilterArr);
VM5168:4 (7) [2, 4, 6, 8, 10, 12, 14]



// reduce

const reduceArray=array.reduce((accumulator, num)=>{
	return accumulator + num;
},5);








///
// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let newArray = []
array.forEach(user => {
	let { username } = user;
	username = username + "!";
	newArray.push(username);
});
console.log(newArray);

//Create an array using map that has all the usernames with a "?" at the end of usernames
const mapArray = array.map(user => {
	let { username } = user;
	return username + "?";
});
console.log(mapArray);

//Filter the array to only include users who are on team: red
const filterArray = array.filter(user => {
	return user.team === "red";
})
undefined
console.log(filterArray);
VM5797:1 (2) [{…}, {…}]
undefined
const filterArray2 = array.filter(user => user.team === "red");
console.log(filterArray2);
VM5842:2 (2) [{…}, {…}]



//Find out the total score of all users using reduce
const total = array.reduce((acc, user) => {
	return acc + user.score
}, 0);
console.log(total);


// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})
// (1), what is the value of i? INDEX of the array.
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => num * 2);



//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const newMArray2 = array.map(user=>{
	user.items=user.items.map(item=> item+"!")
return user;});

const answer = array.map(user => {
	user.items = user.items.map(item => {
		return item + "!"
	});
	return user;
})
console.log(answer);















///objects

