import React from 'react';
import { Accordion } from './Accordion';
import { StoriesTemplate } from '../../Stories.template';

export const StoryDocs = () => {
    return (
        <StoriesTemplate
            storyData={storyData}
            storyPropTypes={storyPropTypes}
        />
    );
};

export default {
    title: 'Professional/Accordion/Code',
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

export const SingleIcon = Template.bind({});
SingleIcon.args = {
    accordionContent: [
        {
            header: 'Title 1',
            icon: 'ds-icon--question',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.'
        },
        {
            header: 'Title 2',
            icon: 'ds-icon--question',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.'
        }
    ],
    openSingleItem: true
};

export const Multiple = Template.bind({});
Multiple.args = {
    ...Single.args,
    openSingleItem: false
};

export const MultipleIcon = Template.bind({});
MultipleIcon.args = {
    ...SingleIcon.args,
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
            <div class="ds-accordion__title-wrapper">
                <span>Title 1</span>
            </div>
        </mat-expansion-panel-header>

        <div class="ds-accordion__content">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.</div>
        </div>
    </mat-expansion-panel>

    <mat-expansion-panel class="ds-accordion">
        <mat-expansion-panel-header class="ds-accordion__title">
            <div class="ds-accordion__title-wrapper">
                <span>Title 2</span>
            </div>
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
            <div class="ds-accordion__title-wrapper">
                <span>Title 1</span>
            </div>
            <span class="ds-icon--expand" aria-label="expand"></span>
        </button>
        
        <div class="ds-accordion__content">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.</div>
        </div>
    </div>
    
    <div class="ds-accordion">
        <button class="ds-accordion__title" aria-expanded="false" tabindex="0">
            <div class="ds-accordion__title-wrapper">
                <span>Title 2</span>
            </div>
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
        title: 'Single accordion with icon',
        template: SingleIcon,
        reactCode: `
import Accordion from '@ds-react/pro/Accordion';

<Accordion
    accordionContent={[
        {
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.',
            icon: 'ds-icon--question',
            header: 'Title 1'
        },
        {
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.',
            icon: 'ds-icon--question',
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
            <div class="ds-accordion__title-wrapper">
                <span class="ds-icon--question" aria-label="icon-question"></span>
                <span>Title 1</span>
            </div>
        </mat-expansion-panel-header>

        <div class="ds-accordion__content">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.</div>
        </div>
    </mat-expansion-panel>

    <mat-expansion-panel class="ds-accordion">
        <mat-expansion-panel-header class="ds-accordion__title">
            <div class="ds-accordion__title-wrapper">
                <span class="ds-icon--question" aria-label="icon-question"></span>
                <span>Title 2</span>
            </div>
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
            <div class="ds-accordion__title-wrapper">
                <span class="ds-icon--question" aria-label="icon-question"></span>
                <span>Title 1</span>
            </div>
            <span class="ds-icon--expand" aria-label="expand"></span>
        </button>
        
        <div class="ds-accordion__content">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.</div>
        </div>
    </div>
    
    <div class="ds-accordion">
        <button class="ds-accordion__title" aria-expanded="false" tabindex="0">
            <div class="ds-accordion__title-wrapper">
                <span class="ds-icon--question" aria-label="icon-question"></span>
                <span>Title 2</span>
            </div>
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
            <div class="ds-accordion__title-wrapper">
                <span>Title 1</span>
            </div>
        </mat-expansion-panel-header>

        <div class="ds-accordion__content">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.</div>
        </div>
    </mat-expansion-panel>

    <mat-expansion-panel class="ds-accordion">
        <mat-expansion-panel-header class="ds-accordion__title">
            <div class="ds-accordion__title-wrapper">
                <span>Title 2</span>
            </div>
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
            <div class="ds-accordion__title-wrapper">
                <span>Title 1</span>
            </div>
            <span class="ds-icon--expand" aria-label="expand"></span>
        </button>
        
        <div class="ds-accordion__content">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.</div>
        </div>
    </div>
    
    <div class="ds-accordion">
        <button class="ds-accordion__title" aria-expanded="false" tabindex="0" data-multiopen>
            <div class="ds-accordion__title-wrapper">
                <span>Title 2</span>
            </div>
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
        title: 'Multiple accordion with icon',
        template: MultipleIcon,
        reactCode: `
import Accordion from '@ds-react/pro/Accordion';

<Accordion
    accordionContent={[
        {
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.',
            icon: 'ds-icon--question',
            header: 'Title 1'
        },
        {
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.',
            icon: 'ds-icon--question',
            header: 'Title 2'
        }
    ]}
/>
        `,
        angularCode: `
<mat-accordion class="ds-accordion__wrapper" [multi]="true">
    <mat-expansion-panel class="ds-accordion">
        <mat-expansion-panel-header class="ds-accordion__title">
            <div class="ds-accordion__title-wrapper">
                <span class="ds-icon--question" aria-label="icon-question"></span>
                <span>Title 1</span>
            </div>
        </mat-expansion-panel-header>

        <div class="ds-accordion__content">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.</div>
        </div>
    </mat-expansion-panel>

    <mat-expansion-panel class="ds-accordion">
        <mat-expansion-panel-header class="ds-accordion__title">
            <div class="ds-accordion__title-wrapper">
                <span class="ds-icon--question" aria-label="icon-question"></span>
                <span>Title 2</span>
            </div>
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
            <div class="ds-accordion__title-wrapper">
                <span class="ds-icon--question" aria-label="icon-question"></span>
                <span>Title 1</span>
            </div>
            <span class="ds-icon--expand" aria-label="expand"></span>
        </button>
        
        <div class="ds-accordion__content">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.</div>
        </div>
    </div>
    
    <div class="ds-accordion">
        <button class="ds-accordion__title" aria-expanded="false" tabindex="0" data-multiopen>
            <div class="ds-accordion__title-wrapper">
                <span class="ds-icon--question" aria-label="icon-question"></span>
                <span>Title 2</span>
            </div>
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
