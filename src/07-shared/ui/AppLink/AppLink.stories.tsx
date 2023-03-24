import React from 'react';
import '../../assets/styles/index.scss';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '07-shared/lib/components/ThemeProvider';
import { AppLink } from './AppLink';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';
import { RouterDecorator } from '../../../../config/storybook/decorators/RouterDecorator';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
        children: 'link',
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    view: 'primary',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    view: 'primary',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
    withIcon: true,
    view: 'primary',
};
