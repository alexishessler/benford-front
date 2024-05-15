import { 
    SET_DARKMODE_ON,
    SET_DARKMODE_OFF
} from "../types/types";

export const setDarkMode = (darkModeSelect) => (dispatch) => {

    darkModeSelect 
    ? dispatch({ type: SET_DARKMODE_ON})
    : dispatch({ type: SET_DARKMODE_OFF})

    localStorage.setItem('darkMode', JSON.stringify(darkModeSelect))

};