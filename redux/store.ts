import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
  // blacklist 포함시 그것만 제외
};

export const rootReducer = combineReducers({});

export default persistReducer(persistConfig, rootReducer);
