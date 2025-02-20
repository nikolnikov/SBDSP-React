import React from 'react';
import { Button } from './Button';

export default {
    title: 'Components/Button/Standard',
    component: Button,
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
        label: 'Button label',
        size: 'large',
        type: 'primary'
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        clickHandler: { table: { disable: true } }
    }
};

export const PrimaryDisabled = {
    args: {
        ...Primary.args,
        isDisabled: true
    },
    argTypes: {
        ...Primary.argTypes
    }
};

export const PrimaryDestructive = {
    args: {
        ...Primary.args,
        isDestructive: true
    },
    argTypes: {
        ...Primary.argTypes
    }
};
