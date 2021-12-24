import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import SwapiService from "../../services/swapi.service"

export const getPeople = createAsyncThunk(
    'swapi/getPeople',
    async () => {
        const res = await SwapiService.getPeople();
        return res.data;
    }
);

const swapiSlice = createSlice({
    name: 'swapi',
    initialState: {
        people: []
    },
    extraReducers: {
        [getPeople.fulfilled]: (state, action) => {
            state.push(action.payload)
        }
    }
})

export default swapiSlice.reducer;