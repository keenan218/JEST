import React from 'react';
import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react';
import HiddenMessage from '../HiddenMessage';

describe("Hidden Message tests", () => {
    test("Expect the current message to be null if the button isn't clicked yet", () => {
        const testMessage = "test Message";
        render(<HiddenMessage>{testMessage}</HiddenMessage>);

        //Query* functions will return the element or null if it cannot be found 
        //get* functions will return the element or throw an error if it cannot be found
        expect(screen.queryByText(testMessage)).toBeNull();
    });
    test("After button click, expect the message to be in the document", () => {
        const testMessage = "test Message";

        render(<HiddenMessage>{testMessage}</HiddenMessage>);

        fireEvent.click(screen.getByLabelText(/show/i))
        expect(screen.getByText(testMessage)).toBeDefined();

    });
})
