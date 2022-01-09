

function useState<T extends string | number>() {
    let state: T

    function getState() {
        return state
    }

    function setState(stateValue: T) {
        state = stateValue
    }

    return { getState, setState }
}

const state = useState<string | number>()

state.setState("Lecio Vilela")
console.log(state.getState())

state.setState(32)
console.log(state.getState())