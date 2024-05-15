import { combineReducers } from 'redux';

import importFileReducer from './importfile.reducer';
import darkModeReducer from './darkmode.reducer';

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  importFile: importFileReducer,
});

export default rootReducer;