import { combineReducers } from 'redux';

import profile from './profile';
import repositories from './repositories';

const rootReducer = combineReducers({
  profile: profile,
  repositories: repositories,
});

export default rootReducer;
