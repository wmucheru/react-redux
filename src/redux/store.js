import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './reducers/counter';
import swapiReducer from './reducers/swapi';

export default configureStore({
    reducer: {
        counter: counterReducer,
        swapi: swapiReducer
    }
});