import React from 'react';
import { Canvas, Unstyled } from '@storybook/blocks';
import { Accordion } from './Accordion';

export default {
    title: 'Components/Accordion/HTML',
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
                    <Unstyled>
                        <h3 className="title">Single</h3>
                        <p>Accordion with single item expanded.</p>
                    </Unstyled>
                    <Canvas
                        of={Single}
                        source={{
                            code: `
<div class="ds-accordion__wrapper">
    <div class="ds-accordion">
        <button class="ds-accordion__title" aria-expanded="false" tabindex="0">
            <span>Title 1</span>
            <span class="ds-icon--expand" aria-label="expand"></span>
        </button>
        
        <div class="ds-accordion__content">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.</div>
        </div>
    </div>
    
    <div class="ds-accordion">
        <button class="ds-accordion__title" aria-expanded="false" tabindex="0">
            <span>Title 2</span>
            <span class="ds-icon--expand" aria-label="expand"></span>
        </button>
        
        <div class="ds-accordion__content">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.</div>
        </div>
    </div>
</div>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Multiple</h3>
                        <p>
                            Accordion with multiple items expanded
                            simultaneously.
                        </p>
                    </Unstyled>
                    <Canvas
                        of={Multiple}
                        source={{
                            code: `
<div class="ds-accordion__wrapper">
    <div class="ds-accordion">
        <button class="ds-accordion__title" aria-expanded="false" tabindex="0" data-multiopen>
            <span>Title 1</span>
            <span class="ds-icon--expand" aria-label="expand"></span>
        </button>
        
        <div class="ds-accordion__content">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.</div>
        </div>
    </div>
    
    <div class="ds-accordion">
        <button class="ds-accordion__title" aria-expanded="false" tabindex="0" data-multiopen>
            <span>Title 2</span>
            <span class="ds-icon--expand" aria-label="expand"></span>
        </button>
        
        <div class="ds-accordion__content">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.</div>
        </div>
    </div>
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

const Template = args => <Accordion {...args} />;

export const Single = Template.bind({});
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
Multiple.args = {
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
    ]
};
