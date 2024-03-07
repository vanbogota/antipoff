import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import authReducer from "./slice/auth-slice";
import partnersReducer from "./slice/partners-slice";
import { logger } from "./middleware/logger-middleware";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        partners: partnersReducer
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(thunk);
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

