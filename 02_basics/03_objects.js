//------------ singalton object
// const tinderUser = new Object()



// ------------Non singalton Object
const tinderUser = {}

tinderUser.Id = "123abc"
tinderUser.name = "jimmy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)



const regularUser = {
    email: "tony@dcmarvel.com",
    fullName: {
        userFullName: {
            firstName: "yogesh",
            lastName: "Kumar"
        }
    }
}

// console.log(regularUser)
// console.log(regularUser.fullName)
// console.log(regularUser.fullName.userFullName.firstName)




const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "aa", 5: "bb", 6: "cc"}

// const obj3 = {...obj1, ...obj2}

const obj3 = Object.assign({}, obj1, obj2)

// console.log(obj3)



// very Important

const users = [
    {
        id: 1,
        email: "ghgh@gmail.com"
    },
    {
        id: 2,
        email: "ghgh@gmail.com"
    },
    {
        id: 3,
        email: "ghgh@gmail.com"
    },
    {
        id: 4,
        email: "ghgh@gmail.com"
    }
]


users[1].email
console.log(tinderUser)


console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))

console.log(Object.entries(tinderUser))
 

console.log(tinderUser.hasOwnProperty("email"))
console.log(tinderUser.hasOwnProperty("Id"))





//-------------destructuring---------------


const course = {
    courseName: "js in Hindi",
    price: "999",
    instructor: "Yogesh Kumar"
}


const {instructor} = course
const {instructor: tutor} = course

console.log(instructor)
console.log(tutor)