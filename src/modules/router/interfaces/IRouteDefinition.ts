/* eslint-disable no-use-before-define */
import { LazyExoticComponent } from 'react';

export type RouteRenderComponent = React.FC | LazyExoticComponent<any>;

export interface IRouteRenderDefinition {
    child?: RouteRenderComponent;

    layout?: RouteRenderComponent;

    children?: IRouteDefinition[];
}

export interface IRouteDefinition {
    path?: string;

    title?: string;

    render?: IRouteRenderDefinition;

    payload?: any;
}
