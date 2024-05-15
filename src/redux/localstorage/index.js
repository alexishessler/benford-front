// LOCAL STORAGE INITAL LOGIC
const darkModeFromStorage = 
localStorage.getItem('darkMode')
    ? JSON.parse(localStorage.getItem('darkMode'))
    : (
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? true : false
    )

// INITIAL STATES (LOCAL STORAGE)
export const initialStateFromLocalStorage = {
    darkMode: darkModeFromStorage,
};