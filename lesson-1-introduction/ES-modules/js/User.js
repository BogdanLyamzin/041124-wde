export default class User {
    constructor({firstName, lastName, birthday}) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}


