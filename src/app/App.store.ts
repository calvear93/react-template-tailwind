import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { configureMiddleware } from './config/middleware';
import { sampleSlice } from 'slices/sample.slice';
import { asyncSlice } from 'pages/detail/slices/async.slice';

const DEBUG = process.env.REACT_APP_DEBUG === 'true';
const DEV =
    process.env.NODE_ENV !== 'test' && process.env.REACT_APP_ENV !== 'prod';

/**
 * Creates a redux store.
 */
export const AppStore = configureStore({
    middleware: configureMiddleware(DEV),
    devTools: DEBUG,
    reducer: {
        [sampleSlice.name]: sampleSlice.reducer,
        [asyncSlice.name]: asyncSlice.reducer
    }
});

export type AppState = ReturnType<typeof AppStore.getState>;

export type AppDispatch = typeof AppStore.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
