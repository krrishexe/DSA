class User{
    constructor(username , password){
        this.username = username;
        this.password = password;
    }
    // static getUsername(){
    //     console.log(this.password)
    // }
    get username(){
        console.log(this._username.toUpperCase())
    }
    set username(username){
        this._username = username;
        console.log(`set username ${username}`)
    }

    get password(){
        console.log((this._password).toUpperCase())
    }
    set password(password){
        this._password = password;
    }
}
const krish  = new User('krish','123@abc')
// krish.getUsername()
krish.username
console.log(krish.password)