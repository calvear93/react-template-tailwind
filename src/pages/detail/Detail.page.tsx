import { Link, useParams } from '@router';
import { Page } from 'layouts';
import { FetchBox } from './components/FetchBox';
import './detail-page.scss';

/**
 * Detail page.
 *
 * @returns {JSX.Element} detail page
 */
export const DetailPage: React.VFC = (): JSX.Element => {
    const { id } = useParams();

    return (
        <Page id='detail-page'>
            <Link to='/'>Go To Main</Link>

            <h2>{process.env.REACT_APP_ENV}</h2>
            <h3>ID: {id}</h3>

            <FetchBox />
        </Page>
    );
};

// for lazy loading
export default DetailPage;
