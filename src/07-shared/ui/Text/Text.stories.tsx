import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '07-shared/lib/components/ThemeProvider';
import { Text } from './Text';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';
import '../../assets/styles/index.scss';

export default {
    title: 'shared/Text',
    component: Text,
    args: {
        children: 'Inner text',
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Header = Template.bind({});
Header.args = {
    view: 'header',
};

export const Error = Template.bind({});
Error.args = {
    view: 'error',
};

export const Paragraph = Template.bind({});
Paragraph.args = {
    view: 'paragraph',
};

export const DarkParagraph = Template.bind({});
DarkParagraph.args = {
    view: 'paragraph',
};

DarkParagraph.decorators = [ThemeDecorator(Theme.DARK)];
