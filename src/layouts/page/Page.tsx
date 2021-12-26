import './page.scss';

export interface IPageProps {
    id: string;
}

/**
 * A generic page.
 *
 * @param {IPageProps} props
 *
 * @returns {JSX.Element} page
 */
export const Page: React.FC<IPageProps> = ({ id, children }): JSX.Element => (
    <section id={id} className='page'>
        {children}
    </section>
);
