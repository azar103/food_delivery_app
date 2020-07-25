const { PRESSED, NOT_PRESSED } = require("./actionTypes")

const initialState = {
    isPressed: false
}

const pressedButton = (state = initialState, action) => {
    switch(action.type) {
        case PRESSED:
            return {
                ...state,
                isPressed: true
            }
        case NOT_PRESSED:
            return {
                ...state,
                isPressed: false
            }    
        default:
            return state    
    }
}

export default pressedButton
