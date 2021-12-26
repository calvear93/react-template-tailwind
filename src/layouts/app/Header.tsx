import { useRoutePayload } from '@router';

interface IHeaderPayload {
    header?: { title: string };
}

/**
 * Header for App Layout.
 *
 * @returns {JSX.Element} header component
 */
export const Header: React.VFC = (): JSX.Element => {
    const { header: { title } = {} } = useRoutePayload<IHeaderPayload>();

    return (
        <header className='bg-gray-300 p-4 shadow-slate-600 shadow-md'>
            {title}
        </header>
    );
};
