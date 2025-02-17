import React from 'react';
import { Button } from './Button';
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
    title: 'Professional/Button/Standard/Code',
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
    iconRight: 'ds-icon--plus-circle',
    label: 'Button label',
    type: 'primary'
};

export const PrimaryWithBothIcons = Template.bind({});
PrimaryWithBothIcons.args = {
    iconClass: 'ds-icon--info',
    iconRight: 'ds-icon--caret-right',
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

const storyData = [
    {
        title: 'Primary button',
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
        title: 'Primary button with left icon',
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
        title: 'Primary button with right icon',
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
        title: 'Primary button with both icons',
        template: PrimaryWithBothIcons,
        reactCode: `
import Button from '@ds-react/pro/Button';

<Button 
    label="Button"
    iconClass="ds-icon--info"
    iconRight="ds-icon--caret-right"
    iconRight
/>
        `,
        angularCode: `
<button type="button" class="ds-button --primary" aria-label="Button label">
    <span class="ds-icon--info --left" aria-label="ds-icon--info" role="img"></span>
    <span>Button label</span>
    <span class="ds-icon--caret-right --right" aria-label="ds-icon--caret-right" role="img"></span>
</button>
        `,
        tsCode: '',
        htmlCode: `
<button type="button" class="ds-button --primary" aria-label="Button label">
    <span class="ds-icon--info --left" aria-label="ds-icon--info" role="img"></span>
    <span>Button label</span>
    <span class="ds-icon--caret-right --right" aria-label="ds-icon--caret-right" role="img"></span>
</button>
        `
    },
    {
        title: 'Primary disabled button',
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
        title: 'Primary destructive button',
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
        title: 'Secondary button',
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
        title: 'Secondary disabled button',
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
        title: 'Ghost button',
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
        title: 'Ghost destructive button',
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
        title: 'Primary save button',
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
        title: 'Primary small button',
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
        title: 'Secondary small button',
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
        title: 'Primary inverse button',
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
        title: 'Secondary inverse button',
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
    "size: PropTypes.oneOf(['small', 'large']),",
    "type: PropTypes.oneOf(['primary', 'secondary', 'ghost'])"
];
