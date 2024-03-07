import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthState {
    token: string | null
}

const initialState: IAuthState = {
    token: localStorage.getItem('userToken'),
};

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: () => {
            localStorage.removeItem('userToken');
            return initialState;
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
            localStorage.setItem('userToken', action.payload);
        }
    }
});

export const { setToken, logOut } = auth.actions;
export default auth.reducer;