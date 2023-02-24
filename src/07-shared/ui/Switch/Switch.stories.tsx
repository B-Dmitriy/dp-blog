import React from 'react';
import '../../assets/styles/index.scss';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '01-app/providers/ThemeProvider';
import { Switch } from './Switch';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';

export default {
    title: 'shared/Switch',
    component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const SwitchActive = Template.bind({});
SwitchActive.args = {
    isActive: true,
};

export const SwitchActiveDark = Template.bind({});
SwitchActiveDark.args = {
    isActive: true,
};

SwitchActiveDark.decorators = [ThemeDecorator(Theme.DARK)];
