// Tuples are required to enter elements in an array in specific format. 
// 1< 2< 3 ✅
// 1< 3< 2 ❌

const user: [string | number ,number ] = ["helo",45] //pehle string ya number baad me to number hi !!!

type User = [number,number,string]

const newUser:User = [32,32,"krish"]
newUser[1] = 45
newUser.push(23)    // its wrong ,we have alredy fixed the length and their index so it should not let us push more elements in the tuple.