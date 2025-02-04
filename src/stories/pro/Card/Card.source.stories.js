import React from 'react';
import { Card } from './Card';
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
    title: 'Professional/Card/Code',
    component: Card,
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

const Template = args => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur, eros sit amet ornare placerat, enim lectus hendrerit nisl, quis lacinia eros purus vel nunc. Donec imperdiet, leo quis fermentum luctus, nibh nibh vehicula ipsum, eget faucibus nisl enim sed felis. Donec sit amet tincidunt nisl. Nulla facilisi. Sed sit amet eros ullamcorper, aliquet nisl quis, ultricies nisl. Nulla facilisi. Sed sit amet eros ullamcorper, aliquet nisl quis, ultricies nisl.'
};

export const PrimaryTitle = Template.bind({});
PrimaryTitle.args = {
    ...Primary.args,
    title: 'Title'
};

const storyData = [
    {
        title: 'Card',
        template: Primary,
        reactCode: `
import Card from '@ds-react/pro/Card';

<Card>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur, eros sit amet ornare placerat, enim lectus hendrerit nisl, quis lacinia eros purus vel nunc. Donec imperdiet, leo quis fermentum luctus, nibh nibh vehicula ipsum, eget faucibus nisl enim sed felis. Donec sit amet tincidunt nisl. Nulla facilisi. Sed sit amet eros ullamcorper, aliquet nisl quis, ultricies nisl. Nulla facilisi. Sed sit amet eros ullamcorper, aliquet nisl quis, ultricies nisl.
</Card>

        `,
        angularCode: `
<div class="ds-card">
    <div class="ds-card__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur, eros sit amet ornare placerat, enim lectus hendrerit nisl, quis lacinia eros purus vel nunc. Donec imperdiet, leo quis fermentum luctus, nibh nibh vehicula ipsum, eget faucibus nisl enim sed felis. Donec sit amet tincidunt nisl. Nulla facilisi. Sed sit amet eros ullamcorper, aliquet nisl quis, ultricies nisl. Nulla facilisi. Sed sit amet eros ullamcorper, aliquet nisl quis, ultricies nisl.
    </div>
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-card">
    <div class="ds-card__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur, eros sit amet ornare placerat, enim lectus hendrerit nisl, quis lacinia eros purus vel nunc. Donec imperdiet, leo quis fermentum luctus, nibh nibh vehicula ipsum, eget faucibus nisl enim sed felis. Donec sit amet tincidunt nisl. Nulla facilisi. Sed sit amet eros ullamcorper, aliquet nisl quis, ultricies nisl. Nulla facilisi. Sed sit amet eros ullamcorper, aliquet nisl quis, ultricies nisl.
    </div>
</div>
`
    },
    {
        title: 'Card with title',
        template: PrimaryTitle,
        reactCode: `
import Card from '@ds-react/pro/Card';

<Card title="Title">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur, eros sit amet ornare placerat, enim lectus hendrerit nisl, quis lacinia eros purus vel nunc. Donec imperdiet, leo quis fermentum luctus, nibh nibh vehicula ipsum, eget faucibus nisl enim sed felis. Donec sit amet tincidunt nisl. Nulla facilisi. Sed sit amet eros ullamcorper, aliquet nisl quis, ultricies nisl. Nulla facilisi. Sed sit amet eros ullamcorper, aliquet nisl quis, ultricies nisl.
</Card>

        `,
        angularCode: `
<div class="ds-card">
    <div class="ds-card__content">
        <div class="ds-card__title">Title</div>

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur, eros sit amet ornare placerat, enim lectus hendrerit nisl, quis lacinia eros purus vel nunc. Donec imperdiet, leo quis fermentum luctus, nibh nibh vehicula ipsum, eget faucibus nisl enim sed felis. Donec sit amet tincidunt nisl. Nulla facilisi. Sed sit amet eros ullamcorper, aliquet nisl quis, ultricies nisl. Nulla facilisi. Sed sit amet eros ullamcorper, aliquet nisl quis, ultricies nisl.
    </div>
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-card">
    <div class="ds-card__content">
        <div class="ds-card__title">Title</div>
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur, eros sit amet ornare placerat, enim lectus hendrerit nisl, quis lacinia eros purus vel nunc. Donec imperdiet, leo quis fermentum luctus, nibh nibh vehicula ipsum, eget faucibus nisl enim sed felis. Donec sit amet tincidunt nisl. Nulla facilisi. Sed sit amet eros ullamcorper, aliquet nisl quis, ultricies nisl. Nulla facilisi. Sed sit amet eros ullamcorper, aliquet nisl quis, ultricies nisl.
    </div>
</div>
`
    }
];

const storyPropTypes = [
    'customClasses: PropTypes.string,',
    'children: PropTypes.node,',
    'title: PropTypes.string'
];
