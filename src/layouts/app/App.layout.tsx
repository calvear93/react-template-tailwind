import { memo } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

/**
 * App layout (wrapper for pages with header/footer).
 *
 * @returns {JSX.Element} app layout
 */
export const AppLayout: React.FC = ({ children }): JSX.Element => (
    <main
        id='app-layout'
        className='flex flex-col min-h-full break-words items-stretch'
    >
        <Header />

        {children}

        <Footer />
    </main>
);

export default memo(AppLayout);
