import React from 'react';
import { Button } from './Button';
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
    title: 'Components/Button/Code',
    component: Button,
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

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Button label',
    type: 'primary'
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
    iconClass: 'ds-icon--plus-circle',
    label: 'Button label',
    type: 'primary'
};

export const PrimaryWithIconRight = Template.bind({});
PrimaryWithIconRight.args = {
    iconClass: 'ds-icon--plus-circle',
    iconRight: true,
    label: 'Button label',
    type: 'primary'
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
    label: 'Button label',
    isDisabled: true,
    type: 'primary'
};

export const PrimaryDestructive = Template.bind({});
PrimaryDestructive.args = {
    label: 'Button label',
    isDestructive: true,
    type: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button label',
    type: 'secondary'
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
    label: 'Button label',
    isDisabled: true,
    type: 'secondary'
};

export const Ghost = Template.bind({});
Ghost.args = {
    label: 'Button label',
    type: 'ghost'
};

export const GhostDestructive = Template.bind({});
GhostDestructive.args = {
    label: 'Button label',
    isDestructive: true,
    type: 'ghost'
};

export const PrimarySave = Template.bind({});
PrimarySave.args = {
    isSave: true
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
    label: 'Button label',
    size: 'small'
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
    label: 'Button label',
    size: 'small',
    type: 'secondary'
};

export const PrimaryInverse = Template.bind({});
PrimaryInverse.args = {
    label: 'Button label',
    isInverse: true
};

export const SecondaryInverse = Template.bind({});
SecondaryInverse.args = {
    label: 'Button label',
    isInverse: true,
    type: 'secondary'
};

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
        title: 'Button',
        template: Primary,
        reactCode: `
import Button from '@ds-react/pro/Button';

<Button label="Button" />
        `,
        angularCode: `
<button type="button" class="ds-button --primary" aria-label="Button label">
    <span>Button label</span>
</button>
        `,
        tsCode: '',
        htmlCode: `
<button type="button" class="ds-button --primary" aria-label="Button label">
    <span>Button label</span>
</button>
        `
    },
    {
        title: 'Button with icon',
        template: PrimaryWithIcon,
        reactCode: `
import Button from '@ds-react/pro/Button';

<Button label="Button" iconClass="ds-icon--plus-circle" />
        `,
        angularCode: `
<button type="button" class="ds-button --primary" aria-label="Button label">
    <span class="ds-icon--plus-circle --left" aria-label="ds-icon--plus-circle" role="img"></span>
    <span>Button label</span>
</button>
        `,
        tsCode: '',
        htmlCode: `
<button type="button" class="ds-button --primary" aria-label="Button label">
    <span class="ds-icon--plus-circle --left" aria-label="ds-icon--plus-circle" role="img"></span>
    <span>Button label</span>
</button>
        `
    },
    {
        title: 'Button with icon right',
        template: PrimaryWithIconRight,
        reactCode: `
import Button from '@ds-react/pro/Button';

<Button 
    label="Button"
    iconClass="ds-icon--plus-circle"
    iconRight
/>
        `,
        angularCode: `
<button type="button" class="ds-button --primary" aria-label="Button label">
    <span>Button label</span>
    <span class="ds-icon--plus-circle --right" aria-label="ds-icon--plus-circle" role="img"></span>
</button>
        `,
        tsCode: '',
        htmlCode: `
<button type="button" class="ds-button --primary" aria-label="Button label">
    <span>Button label</span>
    <span class="ds-icon--plus-circle --right" aria-label="ds-icon--plus-circle" role="img"></span>
</button>
        `
    },
    {
        title: 'Button disabled',
        template: PrimaryDisabled,
        reactCode: `
import Button from '@ds-react/pro/Button';

<Button 
    label="Button"
    isDisabled
/>
        `,
        angularCode: `
<button type="button" class="ds-button --primary --disabled" aria-label="Button label">
    <span>Button label</span>
</button>
        `,
        tsCode: '',
        htmlCode: `
<button type="button" class="ds-button --primary --disabled" aria-label="Button label">
    <span>Button label</span>
</button>
        `
    },
    {
        title: 'Button destructive',
        template: PrimaryDestructive,
        reactCode: `
import Button from '@ds-react/pro/Button';

<Button 
    label="Button"
    isDestructive
/>
        `,
        angularCode: `
<button type="button" class="ds-button --primary --destructive" aria-label="Button label">
    <span>Button label</span>
</button>
        `,
        tsCode: '',
        htmlCode: `
<button type="button" class="ds-button --primary --destructive" aria-label="Button label">
    <span>Button label</span>
</button>
        `
    },
    {
        title: 'Button secondary',
        template: Secondary,
        reactCode: `
import Button from '@ds-react/pro/Button';

<Button 
    label="Button"
    type="secondary"
/>
        `,
        angularCode: `
<button type="button" class="ds-button --secondary" aria-label="Button label">
    <span>Button label</span>
</button>
        `,
        tsCode: '',
        htmlCode: `
<button type="button" class="ds-button --secondary" aria-label="Button label">
    <span>Button label</span>
</button>
        `
    },
    {
        title: 'Button secondary disabled',
        template: SecondaryDisabled,
        reactCode: `
import Button from '@ds-react/pro/Button';

<Button 
    label="Button"
    type="secondary"
    isDisabled
/>
        `,
        angularCode: `
<button type="button" class="ds-button --secondary --disabled" aria-label="Button label">
    <span>Button label</span>
</button>
        `,
        tsCode: '',
        htmlCode: `
<button type="button" class="ds-button --secondary --disabled" aria-label="Button label">
    <span>Button label</span>
</button>
        `
    },
    {
        title: 'Button ghost',
        template: Ghost,
        reactCode: `
import Button from '@ds-react/pro/Button';

<Button 
    label="Button"
    type="ghost"
/>
        `,
        angularCode: `
<button type="button" class="ds-button --ghost" aria-label="Button label">
    <span>Button label</span>
</button>
        `,
        tsCode: '',
        htmlCode: `
<button type="button" class="ds-button --ghost" aria-label="Button label">
    <span>Button label</span>
</button>
        `
    },
    {
        title: 'Button ghost destructive',
        template: GhostDestructive,
        reactCode: `
import Button from '@ds-react/pro/Button';

<Button 
    label="Button"
    type="ghost"
    isDestructive
/>
        `,
        angularCode: `
<button type="button" class="ds-button --ghost --destructive" aria-label="Button label">
    <span>Button label</span>
</button>
        `,
        tsCode: '',
        htmlCode: `
<button type="button" class="ds-button --ghost --destructive" aria-label="Button label">
    <span>Button label</span>
</button>
        `
    },
    {
        title: 'Button save',
        template: PrimarySave,
        reactCode: `
import Button from '@ds-react/pro/Button';

<Button 
    isSave
/>
        `,
        angularCode: `
<button
    type="button"
    class="ds-button --primary --save {{
        customSaveClasses
    }}"
    aria-label="Button label"
    (click)="setSave(); test($event)"
>
    <div class="step1" *ngIf="buttonStatus === ''">
        <span>Save</span>
    </div>
    <div class="step2" *ngIf="buttonStatus === 'saving'">
        <div class="ds-loading --small ds-mr-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <span>Saving</span>
    </div>
    <div class="step3" *ngIf="buttonStatus === 'saved'">
        <div class="checkmark animate"></div>
        <span>Saved</span>
    </div>
</button>
        `,
        tsCode: `
buttonStatus: string = '';

ngOnInit() {
    this.updateButtonStatus();
}

updateButtonStatus() {
    if (this.buttonStatus === 'saving') {
        setTimeout(() => {
        this.buttonStatus = 'saved';
        this.updateButtonStatus();
        }, 3000);
    } else if (this.buttonStatus === 'saved') {
        setTimeout(() => {
        this.buttonStatus = '';
        }, 1500);
    }
}

setSave() {
    if (this.buttonStatus === '') {
        this.buttonStatus = 'saving';
        this.updateButtonStatus();
    }
}

get customSaveClasses() {
    return this.buttonStatus === 'saving'
        ? '--saving'
        : this.buttonStatus === 'saved'
        ? '--saved'
        : '';
}
        `,
        htmlCode: `
<button type="button" class="ds-button --primary --save" aria-label="Button label">
    <div className="step1">
        <span>Save</span>
    </div>
    <div className="step2">
        <div className="ds-loading --small ds-mr-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <span>Saving</span>
    </div>
    <div className="step3">
        <div className="checkmark animate"></div>
        <span>Saved</span>
    </div>
</button>
        `
    },
    {
        title: 'Button small',
        template: PrimarySmall,
        reactCode: `
import Button from '@ds-react/pro/Button';

<Button label="Button" size="small" />
        `,
        angularCode: `
<button type="button" class="ds-button --primary --small" aria-label="Button label">
    <span>Button label</span>
</button>
        `,
        tsCode: '',
        htmlCode: `
<button type="button" class="ds-button --primary --small" aria-label="Button label">
    <span>Button label</span>
</button>
        `
    },
    {
        title: 'Button secondary small',
        template: SecondarySmall,
        reactCode: `
import Button from '@ds-react/pro/Button';

<Button label="Button" size="small" secondary />
        `,
        angularCode: `
<button type="button" class="ds-button --secondary --small" aria-label="Button label">
    <span>Button label</span>
</button>
        `,
        tsCode: '',
        htmlCode: `
<button type="button" class="ds-button --secondary --small" aria-label="Button label">
    <span>Button label</span>
</button>
        `
    },
    {
        title: 'Button inverse',
        template: PrimaryInverse,
        theme: 'dark-bg',
        reactCode: `
import Button from '@ds-react/pro/Button';

<Button label="Button" isInverse />
        `,
        angularCode: `
<button type="button" class="ds-button --primary --inverse" aria-label="Button label">
    <span>Button label</span>
</button>
        `,
        tsCode: '',
        htmlCode: `
<button type="button" class="ds-button --primary --inverse" aria-label="Button label">
    <span>Button label</span>
</button>
        `
    },
    {
        title: 'Button secondary inverse',
        template: SecondaryInverse,
        theme: 'dark-bg',
        reactCode: `
import Button from '@ds-react/pro/Button';

<Button label="Button" type="secondary" isInverse />
        `,
        angularCode: `
<button type="button" class="ds-button --secondary --inverse" aria-label="Button label">
    <span>Button label</span>
</button>
        `,
        tsCode: '',
        htmlCode: `
<button type="button" class="ds-button --secondary --inverse" aria-label="Button label">
    <span>Button label</span>
</button>
        `
    },
    {
        title: 'Button icon large',
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
        title: 'Button icon medium',
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
        title: 'Button icon small',
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
        title: 'Button icon large inverse',
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
        title: 'Button icon medium inverse',
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
        title: 'Button icon small inverse',
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
