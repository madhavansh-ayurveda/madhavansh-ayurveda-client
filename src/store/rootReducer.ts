import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import doctorsReducer from './features/doctorsSlice';
export const rootReducer = combineReducers({
    auth: authReducer,
    doctors: doctorsReducer,
});

export type RootState = ReturnType<typeof rootReducer>; 