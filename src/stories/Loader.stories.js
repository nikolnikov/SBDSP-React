import React from 'react';
import { Canvas, Subtitle, Unstyled } from '@storybook/blocks';
import { Loader } from './Loader';

export default {
    title: 'Components/Loader/React',
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
<Loader />
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
<Loader isCentered />
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
<Loader small />
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
<Loader small isCentered />
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Loader determinate</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryDeterminate}
                        source={{
                            code: `
<Loader isDeterminate />
`
                        }}
                    />

                    <Subtitle>
                        <div className="props-card">
                            <h4>Available props</h4>
                            <ul className="ds-list">
                                <li>customClasses: PropTypes.string,</li>
                                <li>isCentered: PropTypes.bool,</li>
                                <li>isDeterminate: PropTypes.bool,</li>
                                <li>isFixed: PropTypes.bool,</li>
                                <li>progress: PropTypes.number,</li>
                                <li>small: PropTypes.bool</li>
                            </ul>
                        </div>
                    </Subtitle>
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

export const PrimaryDeterminate = Template.bind({});
PrimaryDeterminate.storyName = 'Loader determinate';
PrimaryDeterminate.args = {
    isDeterminate: true
};
