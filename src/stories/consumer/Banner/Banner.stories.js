import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { DSCBanner } from './Banner';

export default {
    title: 'Consumer/Banner',
    component: DSCBanner,
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

const Template = args => <DSCBanner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: (
        <p>
            Use code <strong>20%WEEK</strong> and take action on the symptoms
            keeping you from feeling your best.
        </p>
    ),
    dismissHandler: () => {}
};
Primary.argTypes = {
    customClasses: { table: { disable: true } }
};
