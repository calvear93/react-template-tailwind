import { Router } from '@router';

/**
 * Application main routing handler.
 *
 * Here you can define logic for authorization
 * redirection or app splitting.
 *
 * @returns {JSX.Element} application main router
 */
export const AppRouter: React.VFC = (): JSX.Element => {
    return <Router loader={<h1>Loading</h1>} />;
};
