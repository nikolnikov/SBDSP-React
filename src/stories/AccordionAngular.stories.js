import React from 'react';
import { Canvas, Unstyled } from '@storybook/blocks';
import { Accordion } from './Accordion';

export default {
    title: 'Components/Accordion/Angular',
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
                        <h3 className="title">Single accordion</h3>
                        <p>Accordion with single item expanded.</p>
                    </Unstyled>
                    <Canvas
                        of={Single}
                        source={{
                            code: `
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
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Multiple accordion</h3>
                        <p>
                            Accordion with multiple items expanded
                            simultaneously.
                        </p>
                    </Unstyled>
                    <Canvas
                        of={Multiple}
                        source={{
                            code: `
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
