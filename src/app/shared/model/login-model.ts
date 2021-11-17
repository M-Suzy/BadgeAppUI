export class UserLoginModel{
    constructor(private username: string, private password: string) {}

    get userName():string{
        return this.username;
    }

    get userPassword(){
        return this.password;
    }
}