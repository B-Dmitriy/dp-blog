import React from 'react';
import '../../assets/styles/index.scss';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '01-app/providers/ThemeProvider';
import { Modal } from './Modal';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';

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
