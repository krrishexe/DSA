console.log("hello");
//string
var user = "krish";
user.toLowerCase();
console.log(user);
//Number
var num = 22;
num.toExponential(2);
console.log(num);
//Any 
var hero;
function hello() {
    return "34";
}
hero = hello();
// functions
var myName = function (str) {
    return str;
};
console.log(myName("krish"));
function toUpperCase(str) {
    return str.toUpperCase();
}
var sayMyName = function (username, password) {
};
sayMyName('krish', 88);
console.log(toUpperCase("4"));
// A better way to write functions  IMPORTANTIMPORTANTIMPORTANTIMPORTANT 
function addTwo(num) {
    // return "heelo"  ==> Nobodys stopping you from returning anything.
    return num + 2;
}
console.log(addTwo(5));
var heroes = ["a", "b", "c"];
var newHeroes = heroes.map(function (elem) {
    return "".concat(elem, " is hero");
});
//type void matlab kuch return nnahi karega.
function clgErr(err) {
    console.log("error is " + err);
    // return 2 will give an error.
}
// export { }
