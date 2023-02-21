import { addDecorator } from '@storybook/react';
import { StyleDecorator } from './decorators/StyleDecorator';
import { ThemeDecorator } from './decorators/ThemeDecorator';
import { Theme } from '../../src/01-app/providers/ThemeProvider';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
