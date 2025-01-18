import React from 'react';
import { Canvas, Unstyled } from '@storybook/blocks';
import { Loader } from './Loader';

export default {
    title: 'Components/Loader/HTML',
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
                    <Unstyled>
                        <h3 className="title">Loader</h3>
                    </Unstyled>
                    <Canvas
                        of={Primary}
                        source={{
                            code: `
<div class="ds-loading" role="progressbar">
    <div></div><div></div><div></div><div></div>
</div>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Loader centered</h3>
                    </Unstyled>
                    <Canvas
                        of={Primary}
                        source={{
                            code: `
<div class="ds-loading --center" role="progressbar">
    <div></div><div></div><div></div><div></div>
</div>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Loader small</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimarySmall}
                        source={{
                            code: `
<div class="ds-loading --small" role="progressbar">
    <div></div><div></div><div></div><div></div>
</div>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Loader small centered</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimarySmall}
                        source={{
                            code: `
<div class="ds-loading --small --centered" role="progressbar">
    <div></div><div></div><div></div><div></div>
</div>
`
                        }}
                    />
                </>
            )
        }
    },
    tags: ['autodocs', '!dev']
};

const Template = args => <Loader {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'Loader';
Primary.args = {};

export const PrimarySmall = Template.bind({});
PrimarySmall.storyName = 'Loader small';
PrimarySmall.args = {
    small: true
};
