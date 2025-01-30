import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { ProgressBar } from './ProgressBar';

export default {
    title: 'Components/Progress Bar',
    component: ProgressBar,
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

const Template = args => <ProgressBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    fillPercentage: 50
};
Primary.argTypes = {
    customClasses: { table: { disable: true } }
};
