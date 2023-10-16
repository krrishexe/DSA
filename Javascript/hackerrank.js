class User {
    constructor(username) {
        this.username = username;
    }
    SetName() {
        return this._username
    }
    SetName(username) {
        this._username = username
    }
}

class ChatUser extends User {
    constructor(username, warning) {
        super(username)
        this.warning = warning
    }
    GiveWarning(warning) {
        this.warning++;
    }
    getWarningCount(warning) {
        return this.warning;
    }
}

const newUser = new User('jay menon')
console.log(newUser.username)
// newUser.giveWarning
// console.log(newUser.getWarningCount)



class User {
    constructor(username) {
        this.username = username;
    }

    getUsername() {
        return this.username;
    }

    setUsername(userName) {
        this.username = userName;
    }
}

class ChatUser extends User {
    constructor(username) {
        super(username);
        this.count = 0
    }

    giveWarning() {
        let count = this.count + 1
        this.count = count
    }

    getWarningCount() {
        return this.count;
    }
}