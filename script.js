/დავალება-1/ 
let cars = ["audi","bmw", "lexus", "volkswagen", "porsche"]; 

for (let i = 1; i < 5; i++) {
    console.log(cars[i]) 
}

/დავალება-2/ 
let names = ["giorgi","manana", "eka", "kaxa", "irakli"]; 

for (let i = 0; i < 5; i++) {
    if (names[i].length > 3)
    console.log(names[i]) 
}

/დავალება 3 ლუწი/ 
let numbers = [4, 6, 5, 3, 24, 33, 21,];

for (let i=0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        console.log(numbers[i]);
    }
}

/დავალება3 კენტი/ 
let numbers = [4, 6, 5, 3, 24, 33, 21,];

for (let i=0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 1) {
        console.log(numbers[i]);
    }
}

/დავალება-4/ 
let user = ['name', 'age', 25, 50, 'surname', [100, 500] ];
console.log(user[5][1]);

/დავალება-5/ 
var person = {
    firstname: "john",
    lastname: "doe",
    age: 50,
    eyecolor: "blue"
  };
 
console.log(person.eyecolor);

/დავალება-6/
let names = ["gamarjoba","davbechde", "kvela", "elementi", "bolomdee"]; 
for (let i = 0; i < 5; i++) {
    console.log(names[i]) 
}

/დავალება-7/
let numbers = [5, 25, 89, 120, 36];

numbers.push('javascript', 'python');
numbers.unshift('html', 'css');
numbers.pop();
numbers.shift()

let newArray = numbers.slice(2,3);

console.log(numbers.length);
console.log(numbers);
console.log(newArray);

/დავალება-8/
let fruite = ['ფორთოხალი', 'ბანანი', 'მსხალი'];
console.log(fruite.length);
fruite.push('ვაშლი', 'ანანასი');
fruite.unshift('საზამთრო');
console.log(fruite.length);
fruite.splice(2,0, 'მანგო');
fruite.pop();
fruite.shift()
console.log(fruite.length);

/დავალება-9/
let cars = ["audi","bmw", "lexus", "volkswagen", "ferrary", "porsche", "bentley"];

for (let i = 2; i < 6; i++) {
    console.log(cars[i]) 
}

let cars_new = cars.slice(1, 4);
console.log(cars_new);

/დავალება-10/
let names = ["sandro", "tamazi","kamazi", "jimsheri", "ramazi", "sxvamazi", "ნიკა"];

if (names.length == 5 && names[names.length-1] == 'ნიკა'){
    console.log('მასივის რაოდენობა: 5 და ბოლო ელემენტია ნიკა')
}

else if (names.length == 7 && names[0] == 'sandro'){
    console.log('მასივის რაოდენობა: 7 და პირველი ელემენტია სანდრო')
}

/დავალება-11/
let array = [5, 10, 25, 100, 6, 18];

let newArray = array.map(function(item){
    return item / 2;
})
console.log(newArray)

/დავალება-12/

let array = ["hello", "javascript", "html", 43, "css", "scss", 76, "bootstrap", 88, 59];
let newArray = array.filter(word => word.length > 1);
console.log(newArray)

/დავალება-13/
let array = ["hello", "javascript", "html", 43, "css", "scss", 76, "bootstrap", 88, 59];

let newArray = array.filter(function(item){
    return item / 1;
})
console.log(newArray)