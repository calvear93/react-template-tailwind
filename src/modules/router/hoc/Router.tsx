import { ReactElement, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerService } from '../router.service';
import { RouteChild } from './RouteChild';

export interface IRouterProps {
    loader?: string | ReactElement;
}

/**
 *Handle routes rendering
 * using React Router.
 *
 * @param {IRouterProps} props
 *
 * @returns {JSX.Element} routes render
 */
export const Router: React.VFC<IRouterProps> = ({
    loader = 'Loading'
}): JSX.Element => {
    const { routes, DefaultChild } = routerService;

    return (
        <Suspense fallback={loader}>
            <Routes>
                {
                    // renders the route definitions
                    routes.map((route) => {
                        const { path } = route;

                        // renders the route
                        return (
                            <Route
                                key={path}
                                path={path}
                                element={<RouteChild route={route} />}
                            />
                        );
                    })
                }

                <Route path='*' element={<DefaultChild />} />
            </Routes>
        </Suspense>
    );
};
