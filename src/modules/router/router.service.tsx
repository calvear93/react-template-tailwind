import { Navigate } from 'react-router-dom';
import {
    IRouteDefinition,
    RouteRenderComponent
} from './interfaces/IRouteDefinition';

/**
 * Routes handler for expose
 * application routes definition.
 */
class RouterService {
    /**
     * Application routes
     *
     * @private
     * @type {IRouteDefinition[]}
     */
    private _routes: IRouteDefinition[];

    /**
     * Application router base path
     *
     * @private
     * @type {string}
     */
    private _basePath: string = '/';

    /**
     * Raw routes definition
     *
     * @private
     * @type {IRouteDefinition[]}
     */
    private _rawRoutes: IRouteDefinition[];

    /**
     * Default component for show on no route found
     *
     * @type {React.FC}
     * @returns {JSX.Element}
     */
    private _DefaultChild: React.VFC = (): JSX.Element => (
        <Navigate to={this._basePath} />
    );

    /**
     * Return routes.
     *
     * @readonly
     */
    get routes() {
        return this._routes;
    }

    /**
     * Return DefaultChild.
     *
     * @readonly
     */
    get DefaultChild() {
        return this._DefaultChild;
    }

    /**
     * Initiates complete path calc
     * for routes and nested routes.
     *
     * @param {Array<object>} routes routes definitions
     * @param {React.ReactElement} [defaultChild] default child for render
     */
    setRoutes(routes: any, defaultChild: any): void {
        if (routes === this._rawRoutes) return;

        this._routes = [];
        this._rawRoutes = routes;
        this._DefaultChild = defaultChild ?? this.DefaultChild;

        this._setRoutes(routes, this._basePath);
    }

    /**
     * Sets current app routes definitions
     * and calculates complete router paths
     * for nested routes.
     *
     * @param {Array<object>} routes routes definitions
     * @param {string} [basePath] routes base path
     * @param {ReactElement} [parentLayout] layout from parent
     * @param {object} [parentPayload] payload from parent
     */
    private _setRoutes(
        routes: IRouteDefinition[],
        basePath: string,
        parentLayout?: RouteRenderComponent,
        parentPayload?: RouteRenderComponent
    ) {
        for (const route of routes) {
            const {
                title,
                path: relativePath = '',
                render: { child, children, layout = parentLayout } = {},
                payload
            } = route;

            // removes duplicated forward slashes
            const path = (basePath + '/' + relativePath).replace(/\/+/g, '/');

            if (child) {
                this._routes.push({
                    title,
                    path,
                    render: {
                        layout,
                        child
                    },
                    // payloads merging, child has priority over parent
                    payload: {
                        ...parentPayload,
                        ...payload
                    }
                });
            }

            if (children) {
                this._setRoutes(children, path, layout, {
                    ...parentPayload,
                    ...payload
                });
            }
        }
    }
}

// singleton
export const routerService = new RouterService();
