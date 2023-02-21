import { Story } from '@storybook/react';
import { Theme } from '../../../src/01-app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => <div className={`app ${theme}`}><StoryComponent /></div>;
