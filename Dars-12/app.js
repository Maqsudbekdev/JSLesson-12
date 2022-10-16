// const allusers = ["John", "Doe", "William"];


// allusers.forEach(ism=>{
//     const p = document.createElement("p");
//     p.innerHTML = ism;
//     document.body.appendChild(p);
// })

const allusers = ["John", "Doe" , "William"]
allusers.forEach(ism=>{
    const p = document.createElement("p") 
    p.innerHTML = ism ;
    document.body.appendChild(p)  
})


// const allfollowers = [
//     {
//         name:"Jaloliddin",
//         age: 17
//     },
//     {
//         name:"Dovudxon",
//         age: 14
//     },
//     {
//         name:"Sarvar",
//         age: 18
//     }
// ]

// allfollowers.forEach(follower=>{
//     const h2 = document.createElement("h2")
//     h2.innerHTML = follower.name + " " + follower.age
//     document.body.appendChild(h2)
// })

const allfollowers = [
    {
        name:"Jaloliddin ",
        age:17
    },
    {
        name:"Sarvar ",
        age:16
    },
    {
        name:"Hurshid ",
        age:19
    }
]
allfollowers.forEach(follower=>{
    const h2 = document.createElement("h2");
    h2.style.marginTop = "20px"
    h2.innerHTML = follower.name + "" + follower.age
    document.body.appendChild(h2)
})