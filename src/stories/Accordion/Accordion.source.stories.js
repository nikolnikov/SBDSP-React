import React from 'react';
import { Accordion } from './Accordion';
import { StoriesTemplate } from '../Stories.template';

export const StoryDocs = () => {
    return (
        <StoriesTemplate
            storyData={storyData}
            storyPropTypes={storyPropTypes}
        />
    );
};

export default {
    title: 'Components/Accordion/Code',
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
            page: StoryDocs
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
    ...Single.args,
    openSingleItem: false
};

const storyData = [
    {
        title: 'Single accordion',
        template: Single,
        reactCode: `
import Accordion from '@ds-react/pro/Accordion';

<Accordion
    accordionContent={[
        {
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.',
            header: 'Title 1'
        },
        {
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.',
            header: 'Title 2'
        }
    ]}
    openSingleItem
/>
        `,
        angularCode: `
<mat-accordion class="ds-accordion__wrapper">
    <mat-expansion-panel class="ds-accordion">
        <mat-expansion-panel-header class="ds-accordion__title">
            <span>Title 1</span>
        </mat-expansion-panel-header>

        <div class="ds-accordion__content">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.</div>
        </div>
    </mat-expansion-panel>

    <mat-expansion-panel class="ds-accordion">
        <mat-expansion-panel-header class="ds-accordion__title">
            <span>Title 2</span>
        </mat-expansion-panel-header>

        <div class="ds-accordion__content">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.</div>
        </div>
    </mat-expansion-panel>
</mat-accordion>
        `,
        tsCode: '',
        htmlCode: `
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
    },
    {
        title: 'Multiple accordion',
        template: Multiple,
        reactCode: `
import Accordion from '@ds-react/pro/Accordion';

<Accordion
    accordionContent={[
        {
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.',
            header: 'Title 1'
        },
        {
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.',
            header: 'Title 2'
        }
    ]}
/>
        `,
        angularCode: `
<mat-accordion class="ds-accordion__wrapper" [multi]="true">
    <mat-expansion-panel class="ds-accordion">
        <mat-expansion-panel-header class="ds-accordion__title">
            <span>Title 1</span>
        </mat-expansion-panel-header>

        <div class="ds-accordion__content">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.</div>
        </div>
    </mat-expansion-panel>

    <mat-expansion-panel class="ds-accordion">
        <mat-expansion-panel-header class="ds-accordion__title">
            <span>Title 2</span>
        </mat-expansion-panel-header>

        <div class="ds-accordion__content">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.</div>
        </div>
    </mat-expansion-panel>
</mat-accordion>
        `,
        tsCode: '',
        htmlCode: `
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
    }
];

const storyPropTypes = [
    'customClasses: PropTypes.string,',
    'openSingleItem: PropTypes.bool,',
    'defaultExpanded: PropTypes.bool,',
    'accordionContent: PropTypes.array'
];
