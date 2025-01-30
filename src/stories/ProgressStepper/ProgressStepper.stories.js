import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { ProgressStepper } from './ProgressStepper';

export default {
    title: 'Components/Progress Stepper',
    component: ProgressStepper,
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

const Template = args => <ProgressStepper {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    indexLastCompletedStep: 1
};
Primary.argTypes = {
    customClasses: { table: { disable: true } },
    steps: { table: { disable: true } }
};
