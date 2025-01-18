import React from 'react';
import { Stories, Subtitle } from '@storybook/blocks';
import { Accordion } from './Accordion';

export default {
    title: 'Components/Accordion/React',
    component: Accordion,
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
                                <li>customClasses: PropTypes.string,</li>
                                <li>openSingleItem: PropTypes.bool,</li>
                                <li>defaultExpanded: PropTypes.bool,</li>
                                <li>accordionContent: PropTypes.array</li>
                            </ul>
                        </div>
                    </Subtitle>
                </>
            )
        }
    },
    tags: ['autodocs', '!dev']
};

const Template = args => <Accordion {...args} />;

export const Single = Template.bind({});
Single.storyName = 'Single accordion';
Single.parameters = {
    docs: {
        description: {
            story: 'Accordion with single item expanded.'
        }
    }
};
Single.args = {
    accordionContent: [
        {
            header: 'Title 1',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.'
        },
        {
            header: 'Title 2',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.'
        }
    ],
    openSingleItem: true
};

export const Multiple = Template.bind({});
Multiple.storyName = 'Multiple accordion';
Multiple.parameters = {
    docs: {
        description: {
            story: 'Accordion with multiple items expanded simultaneously.'
        }
    }
};
Multiple.args = {
    ...Single.args
};
