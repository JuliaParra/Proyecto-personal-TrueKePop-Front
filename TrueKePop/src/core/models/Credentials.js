export default class Credentials {


    email
    password
    
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }
}
