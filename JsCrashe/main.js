console.log("Hello world");
console.error("This is an error");
console.warn("This is a erwarningror");

// var, let, const
let score = 30;
score = 31;
console.log(score);

const size = 5;
console.log(size);

// String, Number, Boolean, null, undefined

const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
// undefined
let z;

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

// concatenation
console.log("My name is " + name + " and I am " + age);
// template literals
console.log(`My name is ${name} and I am ${age}`);

// string properties/methods
const s = 'Hello world!';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(''));
const s1 = '1, 2, 3, 4!';
console.log(s1.split(', '));

// arrays
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['appls', 'oranges', 'pears'];
fruits[3] = 'grapes';
fruits.push('mangos');
fruits.unshift('stroberries');
fruits.pop();
console.log(fruits[1]);
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(Array.isArray('fruits'));

// object literals
const person = {
    firstName: 'John',
    lastName: "Doe",
    age: 30,
    hobbies: ['music', "movies", "sports",],
    address: {
        street: "50 main st",
        city: "Boston",
        state: "MA"
    }
};

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

const {firstName, lastName, address: {city}} = person;
console.log(firstName, lastName, city);

person.email = "john@mail.com";

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    },
];

console.log(todos);
console.log(todos[1].text);

// JSON
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

// for loop
for(let i = 0; i <= 10; i++){
    console.log(`For loop number ${i}`);
};

// while loop
let i = 0;
while(i <= 10){
    console.log(`While loop number ${i}`);
    i++;
};

// loop through array
for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
};

for(let todo of todos){
    console.log(todo.text);
};

// forEach, map, filter
todos.forEach(function(todo){
    console.log(todo.text);
});

const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});
console.log(todoCompleted);

// if statement
const a = 10;
const b = 10;

if(a > 10){
    console.log('a is 10');
}
else if(a > 10){
    console.log('a is greater than 10')
}
else{
    console.log('a is less 10');
}

if(a > 5 || b > 10){
    console.log('a is more than 5 or b is more than 10');
}

if(a > 5 && b > 10){
    console.log('a is more than 5 amd b is more than 10');
}

const c = 10;
const color = c > 10 ? 'red' : 'blue';

console.log(color);

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}


// functions

function addNums(num1 = 0, num2 = 0){
    return num1 + num2;
}
console.log(addNums(1, 2));

const addNums1 = (num1 = 0, num2 = 0) => {
    return num1 + num2;
}
console.log(addNums1(1, 2));

const addNums2 = (num1 = 0, num2 = 0) => num1 + num2;
console.log(addNums2(1, 2));

// object oriented

// constructor function
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear()
};

Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
};

// instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person1);
console.log(person2);

console.log(person2.getBirthYear());
console.log(person1.getFullName());

// classes
class Person1 {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear()
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}


const person3 = new Person1('John', 'Doe', '4-3-1980');
const person4 = new Person1('Mary', 'Smith', '3-6-1970');

console.log(person3);
console.log(person4);

console.log(person4.getBirthYear());
console.log(person3.getFullName());

// DOM

// Single element selector
const form = document.getElementById('my-form');
console.log(form);

console.log(document.querySelector('.container'));
console.log(document.querySelector('#my-form'));


// Multiple element selector
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');
items.forEach(function(item){
    console.log(item);
});


let ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello"; 
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hellow</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';

/* btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    ul.lastElementChild.innerHTML = '<h1>Hellow World</h1>';
});

btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    console.log(e.target);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    ul.lastElementChild.innerHTML = '<h1>Hellow World</h1>';
});

btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    console.log(e.target);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    ul.lastElementChild.innerHTML = '<h1>Hellow World</h1>';
});*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();
    console.log(nameInput.value);

    if(nameInput.value === '' || emailInput.value === ''){
        //alert('Please enter fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }
    else{
        //console.log('success');

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${name.value} : ${email.value}`));

        userList.appendChild(li);

        //clear the fields
        nameInput.value = '';
        emailInput.value ='';
    }
}