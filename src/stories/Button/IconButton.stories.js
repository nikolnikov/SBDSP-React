import React from 'react';
import { IconButton } from './IconButton';

export default {
    title: 'Components/Button/Icon',
    component: IconButton,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'Light',
            values: [
                { name: 'Light', value: '#ffffff' },
                { name: 'Dark', value: '#034C1F' }
            ]
        },
        actions: {
            disable: true
        },
        interactions: {
            disable: true
        }
    },
    tags: ['autodocs']
};

export const Primary = {
    args: {
        iconClass: 'ds-icon--gear',
        size: 'large',
        type: 'icon'
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        clickHandler: { table: { disable: true } }
    }
};
