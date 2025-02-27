import { Accordion } from './Accordion';

export default {
    title: 'Components/Accordion',
    component: Accordion,
    parameters: {
        layout: 'centered',
        actions: {
            disable: true
        },
        interactions: {
            disable: true
        }
    },
    tags: ['autodocs', '!dev']
};

export const MultipleItemAccordion = {
    args: {
        accordionContent: [
            {
                header: 'Title 1',
                icon: 'question',
                content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.'
            },
            {
                header: 'Title 2',
                icon: 'question',
                content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.'
            }
        ]
    },
    argTypes: {
        customClasses: { table: { disable: true } }
    }
};

export const SingleItemAccordion = {
    args: {
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
    },
    argTypes: {
        customClasses: { table: { disable: true } }
    }
};
