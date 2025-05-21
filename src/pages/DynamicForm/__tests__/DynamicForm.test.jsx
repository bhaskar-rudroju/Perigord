/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import { DynamicForm } from '../DynamicForm';
 import formSchema from './mock_data.metadata.json';
import { expect } from 'vitest';
import '@testing-library/jest-dom'; 

describe('DynamicForm', () => {
    it('render dynamic form fields based on schema', () => {
        render(<DynamicForm formSchema={formSchema} />);
        expect(screen.getByText('Mock Registration Form')).toBeInTheDocument();
    });

    it('renders text input field', () => {
        render(<DynamicForm  formSchema={formSchema}/>);
        const textInput = screen.getByPlaceholderText('Enter your Name');
        expect(textInput).toBeInTheDocument();
    });

    it('renders number input field', () => {
        render(<DynamicForm  formSchema={formSchema} />);
        const numberInput = screen.getByPlaceholderText('Enter your age');
        expect(numberInput).toBeInTheDocument();
    });

    it('renders select input field', () => {
        render(<DynamicForm formSchema={formSchema}/>);
        const selectInput = screen.getByText('Gender');
        expect(selectInput).toBeInTheDocument();
    });

    it('renders checkbox input field', () => {
        render(<DynamicForm formSchema={formSchema}/>);
        const checkboxInput = screen.getByText('Subscribe');
        expect(checkboxInput).toBeInTheDocument();
    });


    it('submits form data when all fields are valid', () => {
        render(<DynamicForm formSchema={formSchema} />);
        const nameInput = screen.getByPlaceholderText('Enter your Name');
        const ageInput = screen.getByPlaceholderText('Enter your age');
        const submitButton = screen.getByText('Submit');
        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        fireEvent.change(ageInput, { target: { value: '30' } });
        fireEvent.click(submitButton);
        const successMessage = screen.getByText('Submitted Data');
        expect(successMessage).toBeInTheDocument();
    });

        it('shows error message for required fields', () => {
        render(<DynamicForm  formSchema={formSchema}/>);
        const submitButton = screen.getByText('Submit');
        fireEvent.click(submitButton);
        expect(screen.queryByText('Submitted Data')).toBeNull();
    });


});




