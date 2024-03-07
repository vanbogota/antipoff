import { Partner } from "@/app/lib/definitions";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = Array<Partner>;

export const partners = createSlice({
    name: 'partners',
    initialState,
    reducers: {
        addPartners: (state, action: PayloadAction<Array<Partner>>) => {
            state.push(...action.payload);
        }
    }
})

export const { addPartners } = partners.actions;
export default partners.reducer;