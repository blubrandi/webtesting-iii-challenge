import React from 'react'
import ReactDom from 'react-dom'

import Dashboard from './Dashboard.js'

import { render, fireEvent } from 'react-testing-library'
import { toBeEnabled, toBeDisabled } from "jest-dom/extend-expect"
import 'react-testing-library'

describe('<Dashboard />', () => {

    it('runs the tests', () => {
        expect(true).toBe(true)
    })

    // it('should be unlocked by default and change to locked when clicked', () => {
    //     const { getByText } = render(<Dashboard />)

    //     const button = getByText(/unlocked/i)
    //     fireEvent.click(button)

    //     getByText(/locked/i)
    // })

    it('should be unlocked by default and change to locked when clicked', () => {
        const { toBeDisabled } = render(<Dashboard />)

        const button = getByText(/unlocked/i)
        fireEvent.click(button)

        getByText(/locked/i)
    })

    it('should be unlocked by default and change to locked when clicked', () => {
        const { getByText } = render(<Dashboard />)

        const button = getByText(/locked/i)

    })
})