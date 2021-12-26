import { cleanup, render, screen } from '@testing-library/react';
import { App } from 'app/App';

describe('App', () => {
    afterEach(cleanup);

    test('has header', async () => {
        render(<App />);

        const header = await screen.findByText('HEADER BASE');

        expect(header).toBeInTheDocument();
        expect(header.tagName).toEqual('HEADER');
    });

    test('has footer', async () => {
        render(<App />);

        const footer = await screen.findByText('FOOTER BASE');

        expect(footer).toBeInTheDocument();
        expect(footer.tagName).toEqual('FOOTER');
    });
});
