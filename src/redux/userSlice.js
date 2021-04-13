import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: localStorage.getItem("userName"),
    avatar: localStorage.getItem("avatar"),
};

export const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        updateName: (state, action) => {
            state.username = action.payload;
        },
        updateAvatar: (state, action) => {
            state.avatar = action.payload;
        },
    },
});

export const { updateName, updateAvatar } = userSlice.actions;

export const selectUser = (state) => state.user.username;

export const selectAvatar = (state) => state.user.avatar;

export default userSlice.reducer;
