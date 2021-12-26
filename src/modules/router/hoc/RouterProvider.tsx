import { BrowserRouter, BrowserRouterProps } from 'react-router-dom';
import { IRouteDefinition } from '../interfaces/IRouteDefinition';
import { routerService } from '../router.service';

export interface IRouterProviderProps {
    routes: readonly IRouteDefinition[];

    basePath?: string;

    defaultChild?: React.ReactNode;
}

export type RouterProviderProps = Omit<BrowserRouterProps, 'basename'> &
    IRouterProviderProps;

/**
 * Initializes application routes.
 *
 * @param {RouterProviderProps} props
 *
 * @returns {JSX.Element} router provider HOC
 */
export const RouterProvider: React.FC<RouterProviderProps> = ({
    children,
    routes,
    basePath,
    defaultChild,
    ...rest
}): JSX.Element => {
    // initializes the routes
    routerService.setRoutes(routes, defaultChild);

    return (
        <BrowserRouter basename={basePath} {...rest}>
            {children}
        </BrowserRouter>
    );
};
