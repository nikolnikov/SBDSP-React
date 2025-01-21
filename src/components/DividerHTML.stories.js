import React from 'react';
import { Canvas, Unstyled } from '@storybook/blocks';
import { Divider } from './Divider';

export default {
    title: 'Components/Divider/HTML',
    component: Divider,
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
                        <h3 className="title">Divider</h3>
                    </Unstyled>
                    <Canvas
                        of={Primary}
                        source={{
                            code: `
<hr />
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Divider dark gray</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryDarkGray}
                        source={{
                            code: `
<hr class="ds-gray__300-bg" />
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Divider gray</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryGray}
                        source={{
                            code: `
<hr class="ds-gray__200-bg" />
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Divider white</h3>
                    </Unstyled>

                    <div className="dark-bg">
                        <Canvas
                            of={PrimaryWhite}
                            source={{
                                code: `
    <hr class="ds-white-bg" />
    `
                            }}
                        />
                    </div>
                </>
            )
        }
    },
    tags: ['autodocs', '!dev']
};

const Template = args => <Divider {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'Divider';
Primary.args = {};

export const PrimaryDarkGray = Template.bind({});
PrimaryDarkGray.storyName = 'Divider dark gray';
PrimaryDarkGray.args = { color: 'ds-gray__300-bg' };

export const PrimaryGray = Template.bind({});
PrimaryGray.storyName = 'Divider gray';
PrimaryGray.args = { color: 'ds-gray__200-bg' };

export const PrimaryWhite = Template.bind({});
PrimaryWhite.storyName = 'Divider white';
PrimaryWhite.args = { color: 'ds-white-bg' };
