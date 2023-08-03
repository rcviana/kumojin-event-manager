import { render } from '@testing-library/react';
import App from '../App'

it('shows the event form', () => {
    const { getByText } = render(<App />)
    expect(getByText('Create an event')).toBeTruthy();
    expect(getByText('Name')).toBeTruthy();
    expect(getByText('Description')).toBeTruthy();
    expect(getByText('Starts at:')).toBeTruthy();
    expect(getByText('Ends at:')).toBeTruthy();
})