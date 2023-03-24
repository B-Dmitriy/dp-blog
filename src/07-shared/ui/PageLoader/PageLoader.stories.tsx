import React from 'react';
import '../../assets/styles/index.scss';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '07-shared/lib/components/ThemeProvider';
import { PageLoader } from './PageLoader';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';

export default {
    title: 'shared/PageLoader',
    component: PageLoader,
} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof PageLoader> = (args) => <PageLoader {...args} />;

export const PageLoaderLight = Template.bind({});
PageLoaderLight.args = {};

export const PageLoaderDark = Template.bind({});
PageLoaderDark.args = {};

PageLoaderDark.decorators = [ThemeDecorator(Theme.DARK)];
