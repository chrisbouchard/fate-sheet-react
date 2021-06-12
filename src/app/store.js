import { configureStore } from "@reduxjs/toolkit";
import { reducer as apiReducer } from 'redux-json-api';

import counterReducer from "../features/counter/counterSlice";

export default configureStore({
    reducer: {
        api: apiReducer,
        counter: counterReducer,
    },
});
