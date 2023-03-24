import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '07-shared/lib/components/ThemeProvider';
import { Loader } from './Loader';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';
import '../../assets/styles/index.scss';

export default {
    title: 'shared/Loader',
    component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const LoaderLight = Template.bind({});
LoaderLight.args = {};

export const LoaderDark = Template.bind({});
LoaderDark.args = {};

LoaderDark.decorators = [ThemeDecorator(Theme.DARK)];
