import { 
    SET_DARKMODE_ON,
    SET_DARKMODE_OFF
} from "../types/types";


const initalState = {};

const importFileReducer = (state = initalState, action) => {

    switch (action.type) {
        case SET_DARKMODE_ON:
            return true
        case SET_DARKMODE_OFF:
            return false
        default: 
            return state;
    }
}

export default importFileReducer;