import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '07-shared/lib/components/ThemeProvider';
import GitHubIcon from '07-shared/assets/icons/github.svg';
import { Input } from './Input';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';

import '../../assets/styles/index.scss';

export default {
    title: 'shared/Input',
    component: Input,
    args: {
        label: 'Story label',
        value: 'test value',
        placeholder: 'Enter text...',
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const DefaultDark = Template.bind({});
DefaultDark.args = {};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
    view: 'clear',
};

export const Password = Template.bind({});
Password.args = {
    modification: 'secret',
};

export const Cleaner = Template.bind({});
Cleaner.args = {
    modification: 'cleaner',
};

export const Counter = Template.bind({});
Counter.args = {
    modification: 'counter',
    maxLength: 25,
};

export const Icon = Template.bind({});
Icon.args = {
    modification: 'icon',
    icon: <GitHubIcon />,
};

export const Error = Template.bind({});
Error.args = {
    error: 'Error: error text',
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
};

export const Readonly = Template.bind({});
Readonly.args = {
    readOnly: true,
};
