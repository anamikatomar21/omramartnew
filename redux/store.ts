import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';

import { authReducer } from './reducers/auth';

//persist redux store
const persistConfig = {
  key: "root",
  storage: storage,
  rehydrate: true,
};

const rootReducer = combineReducers({
  user: persistReducer(persistConfig, authReducer),
});

// creating store
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
