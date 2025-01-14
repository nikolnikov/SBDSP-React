import React from 'react';
import { Stories, Subtitle } from '@storybook/blocks';
import { Divider } from './Divider';

export default {
    title: 'Components/Divider/React',
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
                    <Stories />

                    <Subtitle>
                        <div className="props-card">
                            <h4>Available props</h4>
                            <ul className="ds-list">
                                <li>color: PropTypes.string,</li>
                                <li>customClasses: PropTypes.string,</li>
                            </ul>
                        </div>
                    </Subtitle>
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
(PrimaryWhite.parameters = {
    backgrounds: {
        default: 'green',
        values: [{ name: 'green', value: '#023616' }]
    }
}),
    (PrimaryWhite.args = { color: 'ds-white-bg' });
