import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { Datepicker } from './Datepicker';

export default {
    title: 'Components/Datepicker',
    component: Datepicker,
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

export const BasicDatepicker = {
    args: {
        label: 'Select a date',
        hintMessage: 'mm/dd/yyyy',
        inputId: 'datepicker'
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        inputId: { table: { disable: true } },
        offset: { table: { disable: true } },
        showOnTop: { table: { disable: true } }
    }
};

export const DateRangePicker = {
    args: {
        isRange: true,
        label: 'Custom range',
        hintMessage: 'mm/dd/yyyy - mm/dd/yyyy',
        inputId: 'datepicker2',
        showOnTop: true
    },
    argTypes: {
        ...BasicDatepicker.argTypes
    }
};
