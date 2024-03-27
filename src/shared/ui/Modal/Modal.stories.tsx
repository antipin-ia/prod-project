import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Modal } from './Modal';

import 'app/styles/index.scss';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Lorem oasdoijsadoijsajdjsaodjsapodjasojdoknascknsaclknsacajscajscpajscasjcasjc',
    },
};
