import { configureStore } from "@reduxjs/toolkit";
import { reducer as apiReducer, setAxiosConfig } from 'redux-json-api';

import counterReducer from "../features/counter/counterSlice";

const store = configureStore({
    reducer: {
        api: apiReducer,
        counter: counterReducer,
    },
});

store.dispatch(setAxiosConfig({
    baseURL: 'http://localhost:8080',
}));

export default store;
