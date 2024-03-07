import { AnyAction } from "redux-saga";
import { ThunkMiddleware } from "redux-thunk";
import { RootState } from "../store";

export const logger: ThunkMiddleware<RootState, AnyAction, undefined> = (store) => (next) => (action) => {
    console.info("dispatching", action);
    console.log("next state", store.getState);
    let result = next(action);
    console.log("next state", store.getState);

    return result;
}
