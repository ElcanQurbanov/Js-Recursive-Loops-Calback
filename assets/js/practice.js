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


// let user1 = {
//     id: 1,
//     name: "Mirze",
//     surname: "Besirzade"
// }

// let user2 = {
//     id: 2,
//     name: "Mirze",
//     surname: "Besirzade"
// }

// let user3 = {
//     id: 3,
//     name: "Elekber",
//     surname: "Hesenov"
// }

// for (const item of numbers) {
//     console.log(item)
// }

// for (const key in user1) {
//     console.log(user1[key])
// }



// let users = [user1, user2, user3];
// let count = 0;

// for (const user of users) {
//     for (const key in user) {
//         if (key == "name" && user[key] == "Mirze" ){
//                count++;
//         }
//     }
// }

// console.log(count)


// for (const user of users) {

//     if (user.name == "Mirze" && user.surname == "Besirzade") {
//         count++;
//     }
// }

// console.log(count);


// let nums1 = [1,4,6,8,9,11]

// // console.log(nums1)

// // let nums2 = nums1;

// // nums2[0] = 100;

// // console.log(nums1);

// let newArr = nums1.map(m=>{
//     return m * 2;
// })

// console.log(newArr);

// console.log(nums1);




// function numsOfOdd(num){
//     return num % 2 != 0
// }

// let numsOfOdd = n =>{
//     return num % 2 != 0
// }

// function numsOfEven(num){
//     return num % 2 ==0
// }

// function numsOfGraterThanFive(num){
//     return num > 5
// }



// console.log(numsOfOdd(6))


// function calculateNums(arr, callback) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i])) {
//             sum += arr[i]
//         }

//     }

//     console.log(sum)
// }




// function sumOfOdd(arr){

// }

// function sumOfEven(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             sum+= arr[i]
//         }

//     }

//     console.log(sum)
// }

// function sumOfGraterThanFive(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 5) {
//             sum+= arr[i]
//         }

//     }

//     console.log(sum)
// }



// function calculateNums(arr, callback) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i])) {
//             sum += arr[i]
//         }

//     }

//     console.log(sum)
// }



// let nums = [1, 2, 3, 4, 5, 6];

// // sumOfOdd(nums);
// // sumOfEven(nums);
// // sumOfGraterThanFive(nums);


// calculateNums(nums, m => m % 2 != 0);

// calculateNums(nums, (m,n) => m % 2 != 0 && n > 3);

// calculateNums(nums, m => m % 2 == 0);

// calculateNums(nums, m => m > 5);




// calculateNums(nums, numsOfEven);

// calculateNums(nums, numsOfGraterThanFive);





let user1 = {
    id: 1,
    name: "Cavid",
    surname: "Ismayilzade",
    age: 22
}


let user2 = {
    id: 2,
    name: "Mirze",
    surname: "Besirzade",
    age: 27
}


let user3 = {
    id: 3,
    name: "Elekber",
    surname: "Hesenov",
    age: 20
}

let user4 = {
    id: 4,
    name: "Jale",
    surname: "Abdullayeva",
    age: 18
}

let users = [user1, user2, user3, user4];


// function showUsersByAge(people, callback){
//     for (const item of people) {
//         if (callback(item.age)) {
//             console.log(item.name + " " + item.surname)
//         }
//     }

// }

// showUsersByAge(users, m => m > 20)


// let nums = [1,3,4,5];

// let sum = nums.reduce((total,current)=>total+current);

// console.log(sum)



let filteredDatas = users.filter(m => m.age > 20);


const getSumOfAgesFromFilteredDatas = datas =>{
    
    let sumOfAge = 0;

    for (const item of datas) {
    
        sumOfAge += item.age
    }
    
    console.log(sumOfAge)
}

getSumOfAgesFromFilteredDatas(filteredDatas)
