import { 
    IMPORT_FILE_FAIL,
    IMPORT_FILE_LOADING,
    IMPORT_FILE_TEST,
} from "../types/types";


const initalState = {};

const importFileReducer = (state = initalState, action) => {

    switch (action.type) {
        case IMPORT_FILE_LOADING:
            return {
                ...state,
                status: "Loading"
            }
        case IMPORT_FILE_TEST:
            return {
                file: action.payload
            }
        case IMPORT_FILE_FAIL:
            console.log("ERRER", action.payload)
            return {
                status: "Error",
                error: action.payload
            };
        default: 
            return state;
    }
}

export default importFileReducer;