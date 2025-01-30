import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { Loader } from './Loader';

export default {
    title: 'Components/Loader',
    component: Loader,
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
const Template = args => <Loader {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.argTypes = {
    customClasses: { table: { disable: true } },
    progress: { table: { disable: true } }
};
