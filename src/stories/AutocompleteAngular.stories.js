import React from 'react';
import { Canvas, Unstyled } from '@storybook/blocks';
import { Autocomplete } from './Autocomplete';

export default {
    title: 'Components/Autocomplete/Angular',
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
                    <Unstyled>
                        <h3 className="title">Primary</h3>
                    </Unstyled>
                    <Canvas
                        of={Primary}
                        source={{
                            code: `

`
                        }}
                    />
                </>
            )
        }
    },
    tags: ['autodocs', '!dev']
};

const Template = args => <Autocomplete {...args} />;

export const Primary = Template.bind({});
Primay.args = {};
