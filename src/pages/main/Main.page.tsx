import { useEffect } from 'react';
import { Link } from '@router';
import { Page } from 'layouts';
import { useAppDispatch } from 'app';
import { sampleSlice, useSampleSelector } from 'slices';
import './main-page.scss';

const { sample: sampleAction } = sampleSlice.actions;

/**
 * Main page.
 *
 * @returns {JSX.Element} main page
 */
export const MainPage: React.VFC = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { message } = useSampleSelector();

    useEffect(() => {
        dispatch(sampleAction(200));
    }, []);

    return (
        <Page id='main-page'>
            <Link to='/detail'>Go To Detail</Link>
            <Link to='/detail/123'>Go To Detail 123</Link>
            <h2>{process.env.REACT_APP_ENV}</h2>
            <h3>{message}</h3>
        </Page>
    );
};

// for lazy loading
export default MainPage;
