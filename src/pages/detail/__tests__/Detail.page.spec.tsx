import { MemoryRouter } from '@router';
import {
    cleanup,
    fireEvent,
    render,
    screen,
    waitFor
} from '@testing-library/react';
import { AppStore } from 'app';
import { Provider } from 'react-redux';
import { DetailPage } from '../Detail.page';

describe('Detail Page', () => {
    afterEach(cleanup);

    test('fetch data clicking button', async () => {
        render(
            <MemoryRouter>
                <Provider store={AppStore}>
                    <DetailPage />
                </Provider>
            </MemoryRouter>
        );

        const button = await screen.findByText('Fetch');

        fireEvent(
            button,
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true
            })
        );

        const result = await waitFor(() => screen.findByText('anyValue'), {
            timeout: 4000
        });

        expect(result).toBeInTheDocument();
    });
});
