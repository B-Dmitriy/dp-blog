import React from 'react';
import '../../assets/styles/index.scss';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '01-app/providers/ThemeProvider';
import { Button } from './Button';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    view: 'primary',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
    view: 'primary',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
