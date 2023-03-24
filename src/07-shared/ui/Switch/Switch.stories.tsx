import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '07-shared/lib/components/ThemeProvider';
import { Switch } from './Switch';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';
import '../../assets/styles/index.scss';

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
