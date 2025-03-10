import React from 'react';
import { QDSTooltip } from './Tooltip';

export default {
    title: 'Components/Tooltip',
    component: QDSTooltip,
    parameters: {
        layout: 'centered',
        actions: {
            disable: true
        },
        interactions: {
            disable: true
        }
    },
    tags: ['autodocs', '!dev']
};

export const DefaultTooltip = {
    args: {
        children: <span>Show tooltip</span>,
        message: 'Tooltip message goes here.',
        placement: 'top'
    },
    argTypes: {
        children: { table: { disable: true } }
    }
};
