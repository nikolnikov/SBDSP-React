import React from 'react';
import { DSCButton } from './Button';
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
    title: 'Consumer/Button/Standard/Code',
    component: DSCButton,
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

const Template = args => <DSCButton {...args} />;

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

export const PrimaryDownload = Template.bind({});
PrimaryDownload.args = {
    isDownload: true
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
    <span class="ds-icon--plus-circle --left" aria-label="ds-icon--plus-circle"></span>
    <span>Button label</span>
</button>
        `,
        tsCode: '',
        htmlCode: `
<button type="button" class="ds-button --primary" aria-label="Button label">
    <span class="ds-icon--plus-circle --left" aria-label="ds-icon--plus-circle"></span>
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
    iconRight="ds-icon--plus-circle"
/>
        `,
        angularCode: `
<button type="button" class="ds-button --primary" aria-label="Button label">
    <span>Button label</span>
    <span class="ds-icon--plus-circle --right" aria-label="ds-icon--plus-circle"></span>
</button>
        `,
        tsCode: '',
        htmlCode: `
<button type="button" class="ds-button --primary" aria-label="Button label">
    <span>Button label</span>
    <span class="ds-icon--plus-circle --right" aria-label="ds-icon--plus-circle"></span>
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
/>
        `,
        angularCode: `
<button type="button" class="ds-button --primary" aria-label="Button label">
    <span class="ds-icon--info --left" aria-label="ds-icon--info"></span>
    <span>Button label</span>
    <span class="ds-icon--caret-right --right" aria-label="ds-icon--caret-right"></span>
</button>
        `,
        tsCode: '',
        htmlCode: `
<button type="button" class="ds-button --primary" aria-label="Button label">
    <span class="ds-icon--info --left" aria-label="ds-icon--info"></span>
    <span>Button label</span>
    <span class="ds-icon--caret-right --right" aria-label="ds-icon--caret-right"></span>
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
        title: 'Primary download button',
        template: PrimaryDownload,
        reactCode: `
import Button from '@ds-react/pro/Button';

<Button 
    isDownload
/>
        `,
        angularCode: `
<button class="ds-button --primary" (click)="dlBtnClicked($event)">
    <span class="ds-icon--download-simple --left" aria-label="download-simple"></span>
    <div class="ds-icon--loading --left"><div></div><div></div><div></div><div></div></div>
    Download<ins>ing</ins>
</button>
        `,
        tsCode: `
import { MatSnackBar } from "@angular/material/snack-bar";
  
dlBtnClicked(event: any) {
    event.srcElement.classList.add("--downloading");

    setTimeout(() => {
        event.srcElement.classList.remove("--downloading");
        this.toast.open("Report successfully downloaded", "", {
        duration: 5000,
        panelClass: ["ds-toast", "--info"],
        verticalPosition: "top",
        });
    }, 3000);
}
        `,
        htmlCode: ''
    },
    {
        title: 'Small button',
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

<Button label="Button" size="small" type="secondary" />
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
        title: 'Inverse button',
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
