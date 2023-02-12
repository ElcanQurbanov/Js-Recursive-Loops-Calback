"use strict"

//task2

function factorial(num) {


    if (num == 1) {
        return num;
    }
    else {
        return num * factorial(num - 1)
    }
}


// console.log(factorial(5));


//task3 (1)

let user1 = {
    name: "Aksin",
    surname: "Hummetov",
    age: 27,
    email: "aksin@code.edu.az"
}

let user2 = {
    name: "Cavid",
    surname: "Ismayilzade",
    age: 22,
    email: "ferid@code.edu.az"
}

let user3 = {
    name: "Mubariz",
    surname: "",
    age: 18,
    email: "mubariz@code.edu.az"
}

let user4 = {
    name: "Elekber",
    surname: "Hesenov",
    age: 20,
    email: "elekber@code.edu.az"
}

let users = [user1, user2, user3, user4];


// let filteredDatas = users.filter(m => m.age > 18 && m.age < 25).length

// console.log(filteredDatas);


function getStudentByAge(users) {

    let count = 0;

    for (const item of users) {

        if (item.age > 18 && item.age < 25) {
            count++;
        }

    }

    return count;

}

// console.log(getStudentByAge(users))


//task 3 (2)


function getStudentsBySearch(users) {
    let count = 0;

    for (const user of users) {
        if (user.email.includes(email == "c")) {
            count++;
        }
    }

    return count;
}

console.log(getStudentByAge(users))










