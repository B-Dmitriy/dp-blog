import React from 'react';
import '../../assets/styles/index.scss';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '01-app/providers/ThemeProvider';
import { Loader } from './Loader';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';

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
