import React from 'react';
import { Canvas, Unstyled } from '@storybook/blocks';
import { Button } from './Button';

export default {
    title: 'Components/Button/HTML',
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
            page: () => (
                <>
                    <Unstyled>
                        <h3 className="title">Primary</h3>
                    </Unstyled>
                    <Canvas
                        of={Primary}
                        source={{
                            code: `
<button type="button" class="ds-button --primary" aria-label="Button label">
    <span>Button label</span>
</button>
`
                        }}
                    />

                    <h3 className="title">Primary With Icon</h3>
                    <Canvas
                        of={PrimaryWithIcon}
                        source={{
                            code: `
<button type="button" class="ds-button --primary" aria-label="Button label">
    <span class="ds-icon--plus-circle --left" aria-label="ds-icon--plus-circle" role="img"></span>
    <span>Button label</span>
</button>
`
                        }}
                    />

                    <h3 className="title">Primary With Icon Right</h3>
                    <Canvas
                        of={PrimaryWithIconRight}
                        source={{
                            code: `
<button type="button" class="ds-button --primary" aria-label="Button label">
    <span>Button label</span>
    <span class="ds-icon--plus-circle --right" aria-label="ds-icon--plus-circle" role="img"></span>
</button>
`
                        }}
                    />

                    <h3 className="title">Primary Disabled</h3>
                    <Canvas
                        of={PrimaryDisabled}
                        source={{
                            code: `
<button type="button" class="ds-button --primary --disabled" aria-label="Button label">
    <span>Button label</span>
</button>
`
                        }}
                    />

                    <h3 className="title">Primary Destructive</h3>
                    <Canvas
                        of={PrimaryDestructive}
                        source={{
                            code: `
<button type="button" class="ds-button --primary --warning" aria-label="Button label">
    <span>Button label</span>
</button>
`
                        }}
                    />

                    <h3 className="title">Secondary</h3>
                    <Canvas
                        of={Secondary}
                        source={{
                            code: `
<button type="button" class="ds-button --secondary" aria-label="Button label">
    <span>Button label</span>
</button>
`
                        }}
                    />

                    <h3 className="title">Secondary Disabled</h3>
                    <Canvas
                        of={SecondaryDisabled}
                        source={{
                            code: `
<button type="button" class="ds-button --secondary --disabled" aria-label="Button label">
    <span>Button label</span>
</button>
`
                        }}
                    />

                    <h3 className="title">Ghost</h3>
                    <Canvas
                        of={Ghost}
                        source={{
                            code: `
<button type="button" class="ds-button --ghost" aria-label="Button label">
    <span>Button label</span>
</button>
`
                        }}
                    />

                    <h3 className="title">Ghost Destructive</h3>
                    <Canvas
                        of={GhostDestructive}
                        source={{
                            code: `
<button type="button" class="ds-button --ghost --warning" aria-label="Button label">
    <span>Button label</span>
</button>
`
                        }}
                    />

                    <h3 className="title">Primary Save</h3>
                    <Canvas
                        of={PrimarySave}
                        source={{
                            code: `
<button type="button" class="ds-button --save" aria-label="Button label">
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
                        }}
                    />

                    <h3 className="title">Primary Small</h3>
                    <Canvas
                        of={PrimarySmall}
                        source={{
                            code: `
<button type="button" class="ds-button --small" aria-label="Button label">
    <span>Button label</span>
</button>
`
                        }}
                    />

                    <h3 className="title">Secondary Small</h3>
                    <Canvas
                        of={SecondarySmall}
                        source={{
                            code: `
<button type="button" class="ds-button --secondary --small" aria-label="Button label">
    <span>Button label</span>
</button>
`
                        }}
                    />

                    <h3 className="title">Primary Inverse</h3>
                    <Canvas
                        of={PrimaryInverse}
                        className={'inverse'}
                        source={{
                            code: `
<button type="button" class="ds-button --inverse" aria-label="Button label">
    <span>Button label</span>
</button>
`
                        }}
                    />

                    <h3 className="title">Secondary Inverse</h3>
                    <Canvas
                        of={SecondaryInverse}
                        className={'inverse'}
                        source={{
                            code: `
<button type="button" class="ds-button --secondary --inverse" aria-label="Button label">
    <span>Button label</span>
</button>
`
                        }}
                    />

                    <h3 className="title">Icon Button Large</h3>
                    <Canvas
                        of={IconButtonLarge}
                        source={{
                            code: `
<button type="button" class="ds-button --icon">
    <span class="ds-icon--gear" aria-label="ds-icon--gear" role="img"></span>
</button>
`
                        }}
                    />

                    <h3 className="title">Icon Button Medium</h3>
                    <Canvas
                        of={IconButtonMedium}
                        source={{
                            code: `
<button type="button" class="ds-button --icon --md">
    <span class="ds-icon--gear" aria-label="ds-icon--gear" role="img"></span>
</button>
`
                        }}
                    />

                    <h3 className="title">Icon Button Small</h3>
                    <Canvas
                        of={IconButtonSmall}
                        source={{
                            code: `
<button type="button" class="ds-button --icon --sm">
    <span class="ds-icon--gear" aria-label="ds-icon--gear" role="img"></span>
</button>
`
                        }}
                    />

                    <h3 className="title">Icon Button Large Inverse</h3>
                    <Canvas
                        of={IconButtonLargeInverse}
                        className="inverse"
                        source={{
                            code: `
<button type="button" class="ds-button --icon --inverse">
    <span class="ds-icon--gear" aria-label="ds-icon--gear" role="img"></span>
</button>
`
                        }}
                    />

                    <h3 className="title">Icon Button Medium Inverse</h3>
                    <Canvas
                        of={IconButtonMediumInverse}
                        className="inverse"
                        source={{
                            code: `
<button type="button" class="ds-button --icon --md --inverse">
    <span class="ds-icon--gear" aria-label="ds-icon--gear" role="img"></span>
</button>
`
                        }}
                    />

                    <h3 className="title">Icon Button Small Inverse</h3>
                    <Canvas
                        of={IconButtonSmallInverse}
                        className="inverse"
                        source={{
                            code: `
<button type="button" class="ds-button --icon --sm --inverse">
    <span class="ds-icon--gear" aria-label="ds-icon--gear" role="img"></span>
</button>
`
                        }}
                    />
                </>
            )
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
