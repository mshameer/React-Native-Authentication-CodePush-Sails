
import { combineReducers } from 'redux';

import { reducer as data } from 'src/data/reducer';
import { reducer as services } from 'src/services/reducer';
import { reducer as drawer } from 'src/utils/drawer';


export default combineReducers({
  drawer,
  services,
  data,
});
