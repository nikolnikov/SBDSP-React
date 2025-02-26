import React from 'react';
import { Tooltip } from './Tooltip';

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
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
        placement: 'top',
        tooltip: 'Tooltip message goes here.'
    },
    argTypes: {
        children: { table: { disable: true } }
    }
};
