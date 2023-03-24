import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '07-shared/lib/components/ThemeProvider';
import { IconLink } from './IconLink';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';
import '../../assets/styles/index.scss';

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
