import { render, screen } from '@testing-library/react';
import { Text } from './Text';

const innerText = 'innerText';

describe('Text tests', () => {
    it('should be paragraph render', () => {
        render(<Text>{innerText}</Text>);

        const text = screen.getByTestId('text_paragraph_testid');

        expect(text).toBeInTheDocument();
        expect(text).toHaveClass('paragraph');
    });
    it('should be header render', () => {
        render(<Text view="header" className="test_class">{innerText}</Text>);

        const text = screen.getByTestId('text_header_testid');

        expect(text).toBeInTheDocument();
        expect(text).toHaveClass('header');
        expect(text).toHaveClass('test_class');
    });
    it('should be error render', () => {
        render(<Text view="error" className="test_class">{innerText}</Text>);

        const text = screen.getByTestId('text_paragraph_testid');

        expect(text).toBeInTheDocument();
        expect(text).toHaveClass('error');
    });
});
