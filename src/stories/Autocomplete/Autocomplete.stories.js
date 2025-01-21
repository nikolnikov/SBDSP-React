import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { Autocomplete } from './Autocomplete';

export default {
    title: 'Components/Autocomplete',
    component: Autocomplete,
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

const Template = args => <Autocomplete {...args} />;

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
Primary.storyName = 'Autocomplete';
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
