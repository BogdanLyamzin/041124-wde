import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    user: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
});

export default authSlice.reducer;