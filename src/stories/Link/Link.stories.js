import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { Link } from './Link';

export default {
    title: 'Components/Link',
    component: Link,
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

const Template = args => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Link example',
    url: 'https://www.google.com'
};
Primary.argTypes = {
    customClasses: { table: { disable: true } }
};
