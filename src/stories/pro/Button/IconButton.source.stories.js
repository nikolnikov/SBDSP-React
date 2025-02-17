import React from 'react';
import { IconButton } from './IconButton';
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
    title: 'Professional/Button/Icon/Code',
    component: IconButton,
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

const Template = args => <IconButton {...args} />;

export const IconButtonLarge = Template.bind({});
IconButtonLarge.args = {
    iconClass: 'ds-icon--gear',
    type: 'icon'
};

export const IconButtonMedium = Template.bind({});
IconButtonMedium.args = {
    iconClass: 'ds-icon--gear',
    type: 'icon',
    size: 'medium'
};

export const IconButtonSmall = Template.bind({});
IconButtonSmall.args = {
    iconClass: 'ds-icon--gear',
    type: 'icon',
    size: 'small'
};

export const IconButtonLargeInverse = Template.bind({});
IconButtonLargeInverse.args = {
    iconClass: 'ds-icon--gear',
    type: 'icon',
    isInverse: true
};

export const IconButtonMediumInverse = Template.bind({});
IconButtonMediumInverse.args = {
    iconClass: 'ds-icon--gear',
    type: 'icon',
    size: 'medium',
    isInverse: true
};

export const IconButtonSmallInverse = Template.bind({});
IconButtonSmallInverse.args = {
    iconClass: 'ds-icon--gear',
    type: 'icon',
    size: 'small',
    isInverse: true
};

const storyData = [
    {
        title: 'Large icon button',
        template: IconButtonLarge,
        reactCode: `
import Button from '@ds-react/pro/Button';

<Button iconClass="ds-icon--gear" type="icon" />
        `,
        angularCode: `
<button type="button" class="ds-button --icon">
    <span class="ds-icon--gear" aria-label="ds-icon--gear" role="img"></span>
</button>
        `,
        tsCode: '',
        htmlCode: `
<button type="button" class="ds-button --icon">
    <span class="ds-icon--gear" aria-label="ds-icon--gear" role="img"></span>
</button>
        `
    },
    {
        title: 'Medium icon button',
        template: IconButtonMedium,
        reactCode: `
import Button from '@ds-react/pro/Button';

<Button 
    iconClass="ds-icon--gear" 
    size="medium"
    type="icon"
/>
        `,
        angularCode: `
<button type="button" class="ds-button --icon --md">
    <span class="ds-icon--gear" aria-label="ds-icon--gear" role="img"></span>
</button>
        `,
        tsCode: '',
        htmlCode: `
<button type="button" class="ds-button --icon --md">
    <span class="ds-icon--gear" aria-label="ds-icon--gear" role="img"></span>
</button>
        `
    },
    {
        title: 'Small icon button',
        template: IconButtonSmall,
        reactCode: `
import Button from '@ds-react/pro/Button';

<Button 
    iconClass="ds-icon--gear" 
    size="small"
    type="icon"
/>
        `,
        angularCode: `
<button type="button" class="ds-button --icon --sm">
    <span class="ds-icon--gear" aria-label="ds-icon--gear" role="img"></span>
</button>
        `,
        tsCode: '',
        htmlCode: `
<button type="button" class="ds-button --icon --sm">
    <span class="ds-icon--gear" aria-label="ds-icon--gear" role="img"></span>
</button>
        `
    },
    {
        title: 'Large inverse icon button',
        template: IconButtonLargeInverse,
        theme: 'dark-bg',
        reactCode: `
import Button from '@ds-react/pro/Button';

<Button 
    iconClass="ds-icon--gear"
    isInverse
    type="icon"
/>
        `,
        angularCode: `
<button type="button" class="ds-button --icon --inverse">
    <span class="ds-icon--gear" aria-label="ds-icon--gear" role="img"></span>
</button>
        `,
        tsCode: '',
        htmlCode: `
<button type="button" class="ds-button --icon --inverse">
    <span class="ds-icon--gear" aria-label="ds-icon--gear" role="img"></span>
</button>
        `
    },
    {
        title: 'Medium inverse icon button',
        template: IconButtonMediumInverse,
        theme: 'dark-bg',
        reactCode: `
import Button from '@ds-react/pro/Button';

<Button 
    iconClass="ds-icon--gear" 
    isInverse
    size="medium"
    type="icon"
/>
        `,
        angularCode: `
<button type="button" class="ds-button --icon --inverse --md">
    <span class="ds-icon--gear" aria-label="ds-icon--gear" role="img"></span>
</button>
        `,
        tsCode: '',
        htmlCode: `
<button type="button" class="ds-button --icon --inverse --md">
    <span class="ds-icon--gear" aria-label="ds-icon--gear" role="img"></span>
</button>
        `
    },
    {
        title: 'Small inverse icon button',
        template: IconButtonSmallInverse,
        theme: 'dark-bg',
        reactCode: `
import Button from '@ds-react/pro/Button';

<Button 
    iconClass="ds-icon--gear" 
    isInverse
    size="small"
    type="icon"
/>
        `,
        angularCode: `
<button type="button" class="ds-button --icon --inverse --sm">
    <span class="ds-icon--gear" aria-label="ds-icon--gear" role="img"></span>
</button>
        `,
        tsCode: '',
        htmlCode: `
<button type="button" class="ds-button --icon --inverse --sm">
    <span class="ds-icon--gear" aria-label="ds-icon--gear" role="img"></span>
</button>
        `
    }
];

const storyPropTypes = [
    'clickHandler: PropTypes.func,',
    'customClasses: PropTypes.string,',
    'iconClass: PropTypes.string,',
    'iconRight: PropTypes.bool,',
    'isDestructive: PropTypes.bool,',
    'isDisabled: PropTypes.bool,',
    'isInverse: PropTypes.bool,',
    'isSave: PropTypes.bool,',
    'label: PropTypes.string,',
    "size: PropTypes.oneOf(['small', 'medium', 'large']),",
    "type: PropTypes.oneOf(['secondary', 'ghost', 'icon'])"
];
