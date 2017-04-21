import { combineReducers } from 'redux';
import { reducer as sessionReducer } from 'src/services/session/reducer';
import { reducer as persistReducer } from 'src/services/persist/reducer';

export const reducer = combineReducers({
	session: sessionReducer,
	persist: persistReducer,
});
