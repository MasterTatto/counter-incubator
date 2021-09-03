const incCounter = "INC_COUNTER"
const setCounter = "SET_COUNTER"
const resCounter = "RES_COUNTER"

const initialState = {count: 1, startValue: 1, maxValue: 5}
export const counterReducer = (state = initialState, action) => {

    switch (action.type) {
        case setCounter:
            return {
                ...state,
                count: action.startValue
            }
        case incCounter :
            return {
                ...state,
                count : state.count + 1
            }
        default:
            return state
    }
}

export const setCounterAC = (startValue) => {
    return {
        type: setCounter, startValue
    }
}
export const incCounterAC = () => {
    return {
        type: incCounter
    }
}