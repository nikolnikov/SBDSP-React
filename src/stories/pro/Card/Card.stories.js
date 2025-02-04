import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { Card } from './Card';

export default {
    title: 'Professional/Card',
    component: Card,
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

const Template = args => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur, eros sit amet ornare placerat, enim lectus hendrerit nisl, quis lacinia eros purus vel nunc. Donec imperdiet, leo quis fermentum luctus, nibh nibh vehicula ipsum, eget faucibus nisl enim sed felis. Donec sit amet tincidunt nisl. Nulla facilisi. Sed sit amet eros ullamcorper, aliquet nisl quis, ultricies nisl. Nulla facilisi. Sed sit amet eros ullamcorper, aliquet nisl quis, ultricies nisl.',
    title: 'Title'
};
Primary.argTypes = {
    customClasses: { table: { disable: true } }
};
