import { lazy } from 'react';
import { IRouteDefinition } from '@router';

// layouts container
const Layouts = {
    App: lazy(() => import('layouts/app/App.layout'))
};

// pages container
const Pages = {
    Main: lazy(() => import('pages/main/Main.page')),
    Detail: lazy(() => import('pages/detail/Detail.page'))
};

export const routes: readonly IRouteDefinition[] = [
    // root router
    {
        path: '/',
        render: {
            layout: Layouts.App,
            children: [
                // root/home page
                {
                    title: 'Home',
                    render: {
                        child: Pages.Main
                    }
                },
                // detail page
                {
                    path: 'detail',
                    title: 'Detail',
                    render: {
                        child: Pages.Detail,
                        children: [
                            {
                                title: 'Detail Param',
                                path: ':id', // /detail/:id
                                render: {
                                    child: Pages.Detail
                                }
                            }
                        ]
                    },
                    payload: {
                        header: {
                            title: 'HEADER DETAIL'
                        },
                        footer: {
                            text: 'FOOTER DETAIL'
                        }
                    }
                }
            ]
        },
        payload: {
            header: {
                title: 'HEADER BASE'
            },
            footer: {
                text: 'FOOTER BASE'
            }
        }
    }
];
