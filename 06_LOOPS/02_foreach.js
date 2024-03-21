const articles = [
    {
        id: 1000,
        title: "Mera desh badal raha hai.",
        author: "Vishal Jha",
        length: 1000
    },
    {
        id: 1001,
        title: "Jeevan ki Jang.",
        author: "Mahadev Jha",
        length: 1030
    },
    {
        id: 1002,
        title: "Mahakal ka prakop.",
        author: "Vishnu Jha",
        length: 1060
    }
]

// this is a kind of array of objects so we can access it using following combination
// forof and forin
// foreach and forin

// for (const it of articles) {
//     console.table(it)
// }
// calculating total no of words required for all articles combined
// let sum = 0
// articles.forEach((article)=>{
//     sum+=article.length
//     return sum
// })
// console.log(val)

// callback function of forEach have basically three parameters
const myFriends = ["Shivam", "Dheeraj", "Raushan", "Rohit", "Prakash", "Siraj"]
myFriends.forEach((friend, index, array)=>{
    console.log(friend, index, array)
})