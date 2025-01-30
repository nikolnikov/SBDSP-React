import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { Datepicker } from './Datepicker';

export default {
    title: 'Components/Datepicker',
    component: Datepicker,
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

const Template = args => <Datepicker {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    inputId: 'datepicker-1',
    label: 'Datepicker',
    placeholder: 'mm/dd/yyyy'
};
Primary.argTypes = {
    inputId: { table: { disable: true } },
    customClasses: { table: { disable: true } },
    offset: { table: { disable: true } },
    showOnTop: { table: { disable: true } }
};
