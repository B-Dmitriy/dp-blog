import React from 'react';
import '../../assets/styles/index.scss';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '07-shared/lib/components/ThemeProvider';
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
    disabled: false,
    view: 'primary',
    size: 'normal',
    leftIcon: undefined,
    rightIcon: undefined,
    children: 'Text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
    view: 'primary',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
