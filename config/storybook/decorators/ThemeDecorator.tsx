import { Story } from '@storybook/react';
import { Theme } from '../../../src/07-shared/lib/components/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => <div className={`app ${theme}`}><StoryComponent /></div>;
