import { useRoutePayload } from '@router';

interface IFooterPayload {
    footer?: { text: string };
}

/**
 * Footer for App Layout.
 *
 * @returns {JSX.Element} footer component
 */
export const Footer: React.VFC = (): JSX.Element => {
    const { footer: { text } = {} } = useRoutePayload<IFooterPayload>();

    return (
        <footer className='bg-gray-300 p-4 shadow-slate-600 shadow-md shado'>
            {text}
        </footer>
    );
};
