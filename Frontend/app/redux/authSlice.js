const { createReducer } = require('@reduxjs/toolkit');

const initialState = {
    isAuthenticated: false
};
export const customReducer = createReducer(initialState,{
        login: (state) => {
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.isAuthenticated = false
        },
}); 