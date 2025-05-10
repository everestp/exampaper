import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserData {
    id: string;
    name: string;
}

interface AuthState {
    status: boolean;
    userData: UserData | null;
}

const initialState: AuthState = {
    status: false,
    userData: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserData>) => {
            state.status = true;
            state.userData = action.payload;
        },
        logout1: (state) => {
            state.status = false;
            state.userData = null;
        },
    },
});

export const { login, logout1 } = authSlice.actions;
export default authSlice.reducer;