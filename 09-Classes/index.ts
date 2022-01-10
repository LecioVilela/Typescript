class People {
    name: string

    constructor(name: string) {
        this.name = name
    }

    getName() {
        return this.name
    }
}

interface IUser {
    getEmail() : string
}

// A classe Students está herdando da classe People e implmentando da interface IUser
class Students extends People implements IUser {
    email: string

    constructor(name: string, email: string) {
        super(name)
        this.email = email
    }

    getEmail(): string {
        return this.email
    }
}

const s = new Students("Lecio Vilela", "l3c1oo@gmail.com")

console.log(s.getName())
console.log(s.getEmail())