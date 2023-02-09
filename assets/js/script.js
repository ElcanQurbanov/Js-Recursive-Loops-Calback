"use strict";

//homework

// function getEvenNumsOfSumSquare(arr) {

//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] % 2 == 0) {
//             sum += arr[i] ** 2
//         }
//     }

//     return sum;

// }

// let nums = [1, 2, 3, 4];
// let res = getEvenNumsOfSumSquare(nums);

// console.log(res)


// let login = (email, password) =>{
//     if (email == "cavid@gmail.code.edu.az" && password == "12345") {\

//         console.log("Success")

//     }else{
//         console.log("Email or password is wrong")
//     }
// }


// login("cavid@code.edu.az", "12345")





// recursive functions


// function getNumbers(num){

//     console.log(num);

//     let number = num - 1;

//     if (number > 0) {

//         getNumbers(number);

//     }



// }

// getNumbers(10);


// function sumOfNums(n){

//     let sum = 0;
//     for (let i = 0; i <=n; i++) {
//         sum+= i
//     }

//     console.log(sum)
// }

// sumOfNums(5);


// function sumOfNums(num){

// if (num == 1) {
//     return num;
// }else{
//     return num + sumOfNums(num - 1)
// }

// }

// console.log(sumOfNums(5))


//loops



// let numbers = [11,4,6,8,9];

// numbers.forEach((element, index) => {

//    numbers[index] = element*2
// });

// console.log(numbers);


// let numbers = [11,4,6,8,9];

// numbers.forEach((element, index) => {

//     if (element == 6) {
//         console.log(element)
//     }
// });


let user1 = {
    id: 1,
    name: "Mirze",
    surname: "Besirzade"
}

let user2 = {
    id: 2,
    name: "Cavid",
    surname: "Ismayilzade"
}

let user3 = {
    id: 3,
    name: "Elekber",
    surname: "Hesenov"
}

// for (const item of numbers) {
//     console.log(item)
// }

        // for (const key in user1) {
        //     console.log(user1[key])
        // }

        

let users = [user1, user2, user3];
let count = 0;

for (const user of users) {
    for (const key in user) {
        if (key == "name" && user[key] == "Mirze" ){
               count++; 
        }
    }
    
}


console.log(count)









