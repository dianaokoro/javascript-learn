// // function goodNight() {
// //     console.log("hey you man");
// // }
// // goodNight();
// // // goodNight();
// // // goodNight();
// // // goodNight();
// // // goodNight();


// // function hello(x){
// //     console.log(`hello ${x}`);
// // }
// // hello("amaka");
// // hello("chidi");
// // hello("diana");
// // hello("tobi");
// // hello("kuku");

// // let variable = "sweet" 
// // hello(variable);


// // function myHead(name, value) {
// //     console.log(`you are lovely ${name}, ${value}`);
// // }

// // myHead("diana", 20)

// function sweetGirl(age, height, bestFood)
// {
// let variable = `${age}, ${height}, ${bestFood}`
// console.log(variable);
// }
// sweetGirl(29, 6.9, "rice");
// sweetGirl(10, 70);
// sweetGirl();



// sweetGirl("cool", "okay");



// function greet1(name) {
//         return `Hello ${name}`
// }

// function greet2(name) {
//     console.log(`Hello ${name}`)
// }


// let res1 = greet1("nameee")

// let res2 = greet2("nameee")

// console.log(res1)

// console.log(res2)






// let variable = true

// let x = "diana"

// let y = 25

// let greet = 67.8

// let person = { 
//     eyecolor: "red",
//     haircolor: "green",

// }
// console.log(person.eyecolor, person.haircolor);


// function divide(num1, num2) {
//     if(num2 === undefined) {
//         return null
//     }
  
//     return num1 / num2;
// }
// console.log(divide(10));



function divide(num1, num2) {
    if (num2 === undefined && num1 === undefined){
        return null;

    } else if (num1 === undefined || num2 === undefined){
         return null;

     } else if (num2 === 0){
            return null;  
     }
     
    
    return num1 / num2;

}
console.log(divide(5))
console.log(5)