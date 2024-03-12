import '@testing-library/jest-dom'
import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import Hero from '../Components/Hero/Hero'

test('shows the children when the checkbox is checked', () => {
    render(<Hero />);

    fireEvent.click(screen.getByText(/UPPER/i))
})