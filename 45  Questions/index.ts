//Q1 

// node js installed
// typescript installed
//VSC installed

//Q2
let names10= "Emaan"
let message:string=`Hello, ${names10}, would you like to learn some typescript today?`

console.log(message)

//Q3 

let names:string="Wania"

console.log(names.toLowerCase())

console.log(names.toUpperCase())

let titleCasedName = names.replace(/\b\w/g, char => char.toUpperCase())

console.log(titleCasedName)

//Q4

let Quote:string=" “A person who never made a mistake never tried anything new."

let author:string="Albert Einstein"

let result=`${Quote} , ${author}`

console.log(result)


//Q5

let famous_name:string="Mark Twain"

let author2:string="The secret of getting ahead is getting started."

let message2:string=`Once ${famous_name} said, ${author2}`

console.log(message2)

//Q6


let name5: string = "   Aimal   "
console.log(name5)
let trimmedName:string = name5.trim()
console.log(trimmedName)


//Q7

let digit1:number=5
let digit2:number=3
let digit3=digit1+digit2
console.log(digit3)


let digit16:number=10
let digit29:number=2
let digit36=digit16-digit29
console.log(digit36)


let digit15:number=2
let digit26:number=4
let digit355=digit15*digit26
console.log(digit355)



let digit10:number=16
let digit20:number=2
let digit30=digit10/digit20
console.log(digit30)


//Q8

console.log(454+843)
console.log(67+90)
console.log(567+579)
console.log(64+79)


//Q9

console.log(5 + 3)
console.log(5 + 3)
console.log(5 + 3)
console.log(5 + 3)

//Q10

let favnumber:number=21
let result1=`My favourite number is${favnumber}`

//Q11

//Here i declare a variable and store a value in it
let famous_name1:string="Mark Twain"

//Here i declare a variable and store a value in it
let author3332:string="The secret of getting ahead is getting started."

//here i declare a variable and i concat the variables values
let message22:string=`Once ${famous_name1} said, ${author3332}`

// here i print my message22
console.log(message22)


//here i declare a variable and store a value in it
let favnumber1:number=21
//Here i do concatination
let result10=`My favourite number is${favnumber}`


//Q12



let names2: string[] = ["Alice", "Bob", "Charlie", "David"]


for (let i = 0; i < names2.length; i++) {
    console.log(`Hello, ${names2[i]}! How are you ?`)
}


//Q13

let motorcycles = ["Honda", "Yamaha", "Kawasaki", "Suzuki"]


motorcycles.forEach(motorcycle => {
    console.log(`I would like to own a ${motorcycle} motorcycle.`)
})


//Q14

let names3:any[]  = ["Aimal", , "Shanzay", "Dania"]


for (let i = 0; i < names3.length; i++) {
    console.log(`Hello, ${names3[i]}!
I am inviting you to come and dinner with us on 10July 2024`)
}


//Q15

let guestList: string[] = ["Aimal","Maria", "wanaia"]

guestList.forEach(name => {
    console.log(`Hello, ${name}! You are invited to come to dinner with us.`)
})


guestList[1] = "Widdad";


console.log(`Unfortunately, ${guestList[1]} can't make this dinner.`);



guestList.forEach(name => {
    console.log(`Hello, ${name}! You are invited to come to have dinner with us.`);
})


guestList.push("Hijab", "Rabail", "Emaan");


guestList.forEach(name => {
    console.log(`Hello, ${name}! You are invited to come to have dinner with us.`)
})

//Q16

let names4:any[]  = ["Aimal", , "Shanzay", "Dania"]



names4.push("Wania","Hijab","Widdad")
console.log(names4)


for (let i = 0; i < names4.length; i++) {
    console.log(`Hello, ${names4[i]}
I am inviting you to come and dinner with us on 10July 2024`)
}

let guestList1: string[] = ["Aimal","Maria", "wanaia"]

guestList1.forEach(name => {
    console.log(`Hello, ${name}! You are invited to come to bigger dinner with us.`)
})

guestList1.push("Rabail")
guestList1.splice(1,0,"Maleeha")
guestList1.push("Sidra")

for (let i = 0; i <guestList1.length; i++) {

    console.log(`Hello, ${guestList1[i]}
I am inviting you to come and dinner with us on 10July 2024`)
}
console.log(guestList1)




//Q17
let guestList10: string[] = ["Aimal","Maria", "wanaia"]

guestList10.forEach(name => {
    console.log(`Hello, ${name}! You are invited to come to bigger dinner with us.`)
})

guestList10.push("Rabail")
guestList10.splice(1,0,"Maleeha")
guestList10.push("Sidra")

for (let i = 0; i <guestList10.length; i++) {

    console.log(`Hello, ${guestList10[i]}
I am inviting you to come and dinner with us on 10July 2024`)
}
console.log(guestList10)




guestList10.splice(0,4)
console.log(guestList10)
for (let i = 0; i <guestList10.length; i++) {

    console.log(`Hello, ${guestList10[i]}
I have just two seats so i invited only Rabail and sidra `)
}
let list1 = ["Widdad", "Aimal", "Wania"];

for (let i = 0; i < list1.length - 2; i++) {
    let removedGuest = list1.shift()
    console.log(`Hello, ${removedGuest}. I'm sorry, you are not invited to dinner.`)
}

console.log( list1)

let list10 = ["Widdad", "Aimal", "Wania"]

for (let i = 0; i < list10.length - 2; i++) {
    let removedGuest = list10.shift()
    console.log(`Hello, ${removedGuest}. I'm sorry, you are not invited to dinner.`)
}

console.log(list10)

let list100 = ["Widdad", "Aimal", "Wania"]


list100.splice(0, 1)

for (let i = 0; i < list100.length; i++) {
    console.log(`Hello, ${list100[i]} you are still invited to dinner.`)
}

let list1000 = ["Widdad", "Aimal", "Wania"]
list1000.splice(0, 1)
console.log(list1000)
list1000.splice(0, 1)
console.log(list1000)


list1000.splice(0, 1)
console.log(list1000)

console.log("Empty")

//Q18

let array=["Lahore","Islamabad","Karachi"]
console.log(array)
let array9= [...array].sort()
console.log(array9)

console.log(array)


let array1 = ["Lahore", "Islamabad", "Karachi"]


 let array3= array1.sort((a, b) => b.localeCompare(a))


console.log( array3)



let wor= array.reverse()

console.log(wor)
let again=array.reverse()

console.log(again)

let array13 = ["Lahore", "Islamabad", "Karachi"];


array13.sort()


console.log(array13)
let array15 = ["Lahore", "Islamabad", "Karachi"]


 let array3e= array15.sort((a, b) => b.localeCompare(a))


console.log( array3e)



//Q19

let myname = ["Widdad","Rabail","Wania","Aimal"]
let len= myname.length
console.log(`You have invited ${len} people on dinner`)


//Q20


let cities = ["New York", "London", "Tokyo", "Paris", "England"]
console.log("List of cities:", cities)

//Q21

let person:{ 
    name: string; 
    age: number; 
schoolorcollege:string 
}
person = {
    name: "Aimal Noor",
    age: 14,
    schoolorcollege : "School"}
console.log(person.name)
console.log(person.age)
console.log(person.schoolorcollege)

//Q22


let error = ["Lahore", "Islamabad", "Karachi"]
console.log(error[5])
console.log(error[1])


//Q23

let a: number = 5
let b: number = 10

console.log(a == 5)
console.log(a == 5)
console.log(a === 5)
console.log(a === 5)
console.log(a != b)
console.log(a !== 5)
console.log(a !== 5)
console.log(a > b)     
console.log(a < b)
console.log(a > 0 && a < 10)

//Q24

console.log("apple" == "apple")

//console.log("apple" != "orange") //giving Error

console.log("APPLE".toLowerCase() == "apple")

console.log("CHERRY".toLowerCase() != "melon")  



console.log(10 == 10)  
//console.log(10 != 5)////giving Error  
console.log(10 > 5)  
console.log(5 < 10)   
console.log(10 >= 5)  
console.log(5 <= 10)   
console.log(5 <= 5)  
console.log(10 >= 10)
console.log(5 > 3 && 10 > 5)  
console.log(5 > 3 && 10 < 5) 
console.log(5 > 3 || 10 < 5)  
console.log(5 < 3 || 10 < 5)
let fruits = ["apple", "banana", "cherry"]
console.log(fruits.includes("apple"))
console.log(fruits.includes("banana"))
console.log(!fruits.includes("orange"))
console.log(!fruits.includes("grape"))


//Q25

let  alien_color:string ="Green"

if (alien_color == "Green" ) 
    {
        console.log("The player just earned 5 points.")

    }

else{
    console.log("No points")

}


let  alien_color1 :string ="Green"

if (alien_color1 == "Purple" ) 
    {
        console.log("The player just earned 5 points.")

    }

else{
    console.log("No points")

}

//Q26

let  alien_color100 :string ="Green"

if (alien_color100 == "Green" ) 
    {
        console.log("The player just earned 5 points.")

    }

else{
        console.log("The player just earned 10 points.")
    

}

let  alien_color1000 :string ="Purple"

if (alien_color1000 == "Green" ) 
    {
        console.log("The player just earned 5 points.")

    }

else{
        console.log("The player just earned 10 points.")

}

//Q27

let aliens="Green"


if (aliens == "Green" ) 
    {
        console.log("The player just earned 5 points.")

    }

else{
        console.log("No points.")

}


let aliens1="Yellow"


if (aliens1 == "Yellow" ) 
    {
        console.log("The player just earned 10 points.")

    }

else{
        console.log("No points.")

}

let aliens10="Red"


if (aliens10 == "Red" ) 
    {
        console.log("The player just earned 15 points.")

    }

else{
        console.log("No points.")

}

//Q28

let age=14

if(age<2){console.log("You are a baby")}
else if (age<4){console.log("You are a toddler")}
else if (age<13){console.log("You are a kid")}
else if (age<20){console.log("You are a teenager")}
else if (age<65){console.log("You are a adult ")}
else if (age>=65){console.log("You are a elder")}

//Q29

let favorite_fruits=["Mango","Apple","banana"]

if (favorite_fruits.includes("Mango"))
{console.log("Mango is one of my favourite fruits")}
 
 if (favorite_fruits.includes("banana"))
{console.log("Banana is one of my favourite fruits")}


 if (favorite_fruits.includes("Apple"))
    {console.log("Apple is one of my favourite fruits")}


 //Q30 


 let username=["Widdad","Aimal","Wania","Admin","Rabail"]


for (let i = 0; i < username.length; i++) {
    if (username[i] === "Admin") {
        console.log("Hello admin, would you like to see a status report?")
    } else {
        console.log(`Hello ${username[i]}, thank you for logging in again.`)
    }
}



//Q31




let username_=["Widdad","Aimal","Wania","Admin","Rabail"]


for (let i = 0; i < username_.length; i++) 
    if (username_[i] === "Admin") {
        console.log("Hello admin, would you like to see a status report?")
    } else {
        console.log(`Hello ${username_[i]}, thank you for logging in again.`)
    }

    if (username_.length==0){

        console.log("We need to find some users!")
    } 


    //Q32

    let current_users=["Widdad","Seemal","Mahnoor","Maleeha","Waina"]
let new_users = ["Faiza", "Sameera", "Mahnoor", "Hijab", "Widdad"]


for (let i = 0; i < new_users.length; i++) {
    let username = new_users[i]
    
    if (current_users.includes(username)) {
        console.log(`Sorry, the username '${username}' is already taken.`)
    } else {
        console.log(` The username '${username}' is available.`)
    }
}
console.log( current_users)

//Q33

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < numbers.length; i++)
     {
    let number = numbers[i]
    let ordinal:string

    if (number === 1) {
        ordinal = "1st"

    } else if (number === 2) {
        ordinal = "2nd"

    } else if (number === 3) {
        ordinal = "3rd"

    } else {
        ordinal = number + "th"
    }

    console.log(`${number} is the ${ordinal} number.`)
}

//Q34

let pizza:string[]=["Pepperoni", "Margherita", "BBQ Chicken"]

for (let i = 0; i < pizza.length; i++) {
    let pizzaName = pizza[i]
    console.log(pizzaName)

}
for (let i = 0; i < pizza.length; i++) {
    let pizzaName = pizza[i]
    console.log(`I like ${pizzaName} pizza.`)
}
console.log("I really love pizza")

//Q35
    
    let climbingAnimals: string[] = ['Monkey', 'Squirrel', 'Gecko']

for (let i = 0; i < climbingAnimals.length; i++) {
    let animal = climbingAnimals[i]
    console.log(animal)
}

let animal: string 

for (let i = 0; i < climbingAnimals.length; i++) { 
    let animal: string = climbingAnimals[i]
    console.log(`A ${animal} is a good animal`)
}


let animal1: string 

for (let i = 0; i < climbingAnimals.length; i++) { 
    let animal1: string = climbingAnimals[i]
    console.log(`A ${animal1} can climb`)
}


//Q36

function makeShirt(size: string, message: string) {
    console.log(`Shirt size: ${size}, Message: ${message}`)
}


makeShirt('Large', 'Hello World!')

//Q37

function makeShirt1(size: string = 'Large', message: string = 'I love TypeScript') {
    console.log(`Shirt size: ${size}, Message: ${message}`)
}
makeShirt1()
makeShirt1('Medium')
makeShirt1('Small', 'Hello from TypeScript!')


//Q38

function describeCity(city: string, country: string = 'Unknown'){
    console.log(`${city} is in ${country}.`)
}


describeCity('Karachi', 'Pakistan')
describeCity('Tokyo', 'Japan')
describeCity('Paris')


//Q39


function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`
}


let city1 = cityCountry('Lahore', 'Pakistan')
let city2 = cityCountry('Tokyo', 'Japan')
let city3 = cityCountry('Paris', 'France')
console.log(city1)
console.log(city2)
console.log(city3)


//Q40



function makeAlbum(artist: string, title: string, tracks?: number): any {
    let album = {
        artist: artist,
        title: title,
    }
    

    return (album)
}
let album1 = makeAlbum('Aimal', '14')


console.log(album1)

//Q41

let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette"]

function showMagicians(magiciansList: string[]){
    for (let i = 0; i < magiciansList.length; i++) {
        console.log(magiciansList[i])
    }
}
showMagicians(magicians)

//Q42

let magicians1: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller", "Dynamo"]

function makeGreat(magiciansList: string[]) {
    for (let i = 0; i < magiciansList.length; i++) {
        magiciansList[i] = "the Great " + magiciansList[i]
    }
}
function showMagicians1(magiciansList: string[]) {
    for (let i = 0; i < magiciansList.length; i++) {
        console.log(magiciansList[i])
    }
}
makeGreat(magicians1)
showMagicians1(magicians1)


//Q43

 let magicians10: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller", "Dynamo"]

function makeGreat1(magiciansList: string[]): string[] {
    return magiciansList.map(magicians => "the Great " + magicians)
}
function showMagicians10(magiciansList: string[]) {
    magiciansList.forEach(magicians => console.log(magicians))
}
let greatMagicians = makeGreat1(magicians)

console.log("Original Magicians:")
showMagicians10(magicians)

console.log("Great Magicians:")
showMagicians10(greatMagicians)

//Q44

function orderSandwich(ingredients:string[]) {
    console.log("Sandwich order summary:")
    if (ingredients.length === 0) {
        console.log("No ingredients in the sandwich.")
    } else {
        console.log("Ingredients:")
        ingredients.forEach(ingredients => {
            console.log("- " + ingredients)
        })
    }
}
orderSandwich(["Turkey", "Cheese"])
orderSandwich(["Ham", "Swiss", "Lettuce"])
orderSandwich(["Peanut Butter", "Jelly"])


//Q45
function createCar(manufacturer: string, modelName: string, ...args: any[]) {
    let car = {
        manufacturer: manufacturer,
        modelName: modelName
    }
    for (let i = 0; i < args.length; i += 2) {
        let key = args[i];
        let value = args[i + 1];
        let car: { [key: string]: any } = {}
        car[key] = value
    }

    // Print the car object to check if information is stored correctly
    console.log(car)
}
createCar("Toyota", "Corolla", "color", "red", "features", "sunroof")

























