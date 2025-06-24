//basic type defining
/*let x: number = 1;
console.log(x)
*/

//Greeting Function 
/*
function greet(firstName: string){
    console.log("Hello "+ firstName)
}
greet("Vinit")
*/

//SUM Function 
/*
function add(x: number,y: number){
    return (x+y) 
}

console.log(add(3,4)) 
*/

//Return True or False if user is 18+ or not 
/*
function ageDetect(age: number): boolean {
    if(age>18){
        return true;
    }
    else{
        return false
    }
}
console.log(ageDetect(20))
*/
//definig boolean above to let compiler know that the return type we want is need to be a Boolean, We don't have to tell it because, compiler is smart enough to understand that what needs to be a return type , because of 
// ****TYPE INFERENCING **** //


// 4. Create a function that takes another function as input, and runs it after 1 second.
//Function taking a function (anonymous function)
/*
function delayedCall (fn: ()=>void){
    setTimeout(fn,1000)
}
delayedCall(function(){
    console.log("Hi there GPT")
})
*/
//OR We can write it as- 
//separate function defining
/*
function lateCall(fn: ()=>void){
    setTimeout(fn,1000)
}
function log(){
    console.log("Hii there")
}
lateCall(log)
*/
 
// Another example similar to Q.4
//Grret function in delayedCall
/*
function delayedCall(anotherFn: (a: string)=>void){
    setTimeout(anotherFn,1000)
}
function greet(name: string){
    console.log("Hello "+ name)
}
delayedCall(greet)
*/


//Object in Typescript
/*
function greet(user: {
    name: string,
    age: number
}){
    console.log("Hello "+ user.name)
}
let user = {
    name:"Vinit",
    age:21
}
greet(user);
*/

//Interface in typescript
//example 1
/*
interface User {
    firstName: string,
    lastName: string,
    email: string,
    age: number
}
function greet( user: User) {
    return console.log("Hello "+ user.firstName)
}
let user = {
    firstName: "Vinit",
    lastName: "Batamn",
    email: "email19@gmail.com",
    age: 20
}
*/



//TYPES 
/*
type User = {
    name: string,
    age: number
}
function greet(user:User){
    console.log(user.name)
}
let user = {
    name: "ViNiT",
    age: 21
}
greet(user)
*/

// "TYPE" features 
//  1. Union

type StOrNum = string | number;

function printId(id: StOrNum) {
    console.log(`ID: ${id}`);
}

printId(101);      // number
printId("20");     // string


// 2. INTERSECTION

type Manager = {
    name: string,
    age: number
}

type Employee = {
    name:string,
    department: string
}

type Teamlead = Manager & Employee

let t: Teamlead = {
    name: "ViNiT",
    age: 21,
    department: "Cloud operations"
}

console.log(t)