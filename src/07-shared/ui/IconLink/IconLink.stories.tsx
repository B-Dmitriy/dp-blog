import React from 'react';
import '../../assets/styles/index.scss';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '01-app/providers/ThemeProvider';
import { IconLink } from './IconLink';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';

export default {
    title: 'shared/IconLink',
    component: IconLink,
    args: {
        href: '/',
    },
} as ComponentMeta<typeof IconLink>;

const Template: ComponentStory<typeof IconLink> = (args) => <IconLink {...args} />;

export const IconLinkLight = Template.bind({});
IconLinkLight.args = {
    type: 'gh',
};

export const IconLinkDark = Template.bind({});
IconLinkDark.args = {
    type: 'gh',
};

IconLinkDark.decorators = [ThemeDecorator(Theme.DARK)];
