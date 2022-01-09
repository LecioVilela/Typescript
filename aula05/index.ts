// Primeiro exemplo
interface IPerson {
    name: string,
    idade: number
}

const person: IPerson = {
    name: "Lecio Vilela",
    idade: 30
}

// Segundo exemplo
interface IClock {
    dataAtual(): Date
}

class Relogio implements IClock {
    dataAtual(): Date {
        return new Date()
    }
}

// Terceiro exemplo
interface IStudent {
    name: string
}

interface IStudent {
    idade: number
}
const student: IStudent = {
    name: "Lecio",
    idade: 32
}