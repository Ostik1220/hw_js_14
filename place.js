const familysChildrens = [
    {name:"Wanka" , eyeColor: "brown", gender: "female" , isActive: true , email: "wan.family@gmail.com" , age:"26"},
    {name:"Panko" , eyeColor: "blue", gender: "male" , isActive: false , email: "pan.family@gmail.com" , age:"18" },
    {name:"Lanko" , eyeColor: "brown", gender: "male" , isActive: false , email: "lan.family@gmail.com" , age:"15" },
    {name:"Banko" , eyeColor: "brown", gender: "male" , isActive: true , email: "ban.family@gmail.com" , age:"15" },
    {name:"Kanka" , eyeColor: "green", gender: "female" , isActive: false , email: "kan.family@gmail.com" , age:"8" },
    {name:"Ranko" , eyeColor: "blue", gender: "male" , isActive: true , email: "ran.family@gmail.com" , age:"5" }
]

//1
  const allNames = familysChildrens.map((member) => member.name)
  console.log(allNames)
//2
 const eyeColorFilter = familysChildrens.filter((member) => member.eyeColor === "blue")
 console.log(eyeColorFilter)
//3
 const genderFilter = familysChildrens.filter((member) => member.gender === "male")
 console.log(genderFilter)
//4
 const activeFilter = familysChildrens.filter((member) => member.isActive === true)
 console.log(activeFilter)
//5
const emailToFind = "lan.family@gmail.com";
const memberByEmail = familysChildrens.find((member) => member.email === emailToFind);
console.log(memberByEmail);
//6
const ageCheck = familysChildrens.filter((member) => member.age >= 14 && member.age <= 25)
console.log(ageCheck)