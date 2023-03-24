import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '07-shared/lib/components/ThemeProvider';
import { Modal } from './Modal';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';
import '../../assets/styles/index.scss';

export default {
    title: 'shared/Modal',
    component: Modal,
    args: {
        isOpen: true,
        children: 'Modal content',
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalLight = Template.bind({});
ModalLight.args = {};

export const ModalDark = Template.bind({});
ModalDark.args = {};

ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
