// Partial

type UserPartial = { 
    nome: string
    idade: number
}

function updateUser(u: Partial<UserPartial>) {
    // update
}

const user = {
    nome: "Lecio Vilela"
}

updateUser(user)

// End Partial

// Required

type UserReq = {
    nome?: string
    idade?: number
}

const userReq : UserReq = {
    nome: "Lecio Vilela"
}

const userFull: Required<UserReq> = {
    nome: "Lecio Vilela",
    idade: 32
}

// End Required

// Readonly

type UserReadOnly = {
    nome: string
    idade: number
}

const userRead : Readonly<UserReadOnly> = {
    nome: "Lecio",
    idade: 32
}

// End Readonly

// Record

type Cats = {
    raca: string
    idade: number
}

type CatNames = "frajola" | "tom" | "garfield"

const cats: Record<CatNames, Cats> = {
    frajola: {
        idade: 4,
        raca: 'persa'
    },
    tom: {
        idade: 5,
        raca: 'siames'
    },
    garfield: {
        idade: 10,
        raca: 'malzao'
    }
}

// End Record

// Pick

type UserPick = {
    nomeCompleto: string
    nomeDeUsuario: string
    senha: string
}

type PickPerson = Pick<UserPick, 'nomeCompleto' | 'senha'>

const pUser: PickPerson = {
    nomeCompleto: "Lecio Vilela",
    senha: '123456'
}

// End Pick

// Omit

type UserOmit = {
    nomeCompleto: string
    nomeDeUsuario: string
    senha: string
}

type OmitPerson = Omit<UserOmit, 'nomeDeUsuario' | 'senha'>

const oUser: OmitPerson = {
    nomeCompleto: "Lecio Vilela"
}

// End Omit