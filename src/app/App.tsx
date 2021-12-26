import { Provider } from 'react-redux';
import { RouterProvider } from '@router';
import { AppStore } from './App.store';
import { AppRouter } from './App.router';
import { routes } from './app.routes';
import '@web-font';
import './styles/app.scss';

/**
 * App container.
 *
 * Here occur the initialization
 * and localization of some libs.
 *
 * @returns {JSX.Element} app container
 */
export const App: React.VFC = (): JSX.Element => {
    return (
        <RouterProvider
            routes={routes}
            basePath={process.env.REACT_APP_BASE_PATH}
        >
            <Provider store={AppStore}>
                <AppRouter />
            </Provider>
        </RouterProvider>
    );
};

/**
 * if you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls.
 * Learn more about service workers: https://cra.link/PWA
 */
if (process.env.REACT_APP_SERVICE_WORKER === 'true')
    require('./config/service-worker.register').register();
