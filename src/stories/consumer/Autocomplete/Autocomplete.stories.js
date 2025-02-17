import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { DSCAutocomplete } from './Autocomplete';

export default {
    title: 'Consumer/Autocomplete',
    component: DSCAutocomplete,
    parameters: {
        layout: 'centered',
        controls: {
            disable: true
        },
        actions: {
            disable: true
        },
        docs: {
            page: () => (
                <>
                    <Canvas of={Primary} sourceState="none" />
                    <Controls />
                </>
            )
        }
    },
    tags: ['autodocs', '!dev']
};

const Template = args => <DSCAutocomplete {...args} />;

const storyOptions = [
    'Adrian Veidt',
    'Dan Dreiberg',
    'Edward Blake',
    'Hollis Mason',
    'Jon Osterman',
    'Laurie Juspeczyk',
    'Sally Jupiter',
    'Walter Kovacs'
];

export const Primary = Template.bind({});
Primary.args = {
    label: 'Input label',
    getSelection: selection => {
        console.log(selection);
    },
    inputId: 'input-id',
    optionList: storyOptions
};
Primary.argTypes = {
    customClasses: { table: { disable: true } },
    getSelection: { table: { disable: true } },
    inputId: { table: { disable: true } },
    maxWidth: { table: { disable: true } },
    optionList: { table: { disable: true } }
};
