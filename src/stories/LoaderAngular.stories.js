import React from 'react';
import { Canvas, Source, Unstyled } from '@storybook/blocks';
import { Loader } from './Loader';
import { background } from '@storybook/theming';

export default {
    title: 'Components/Loader/Angular',
    component: Loader,
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
                        <h3 className="title">Loader</h3>
                    </Unstyled>
                    <Canvas
                        of={Primary}
                        source={{
                            code: `
<mat-spinner class="ds-loading"></mat-spinner>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Loader centered</h3>
                    </Unstyled>
                    <Canvas
                        of={Primary}
                        source={{
                            code: `
<mat-spinner class="ds-loading --center"></mat-spinner>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Loader small</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimarySmall}
                        source={{
                            code: `
<mat-spinner class="ds-loading --small"></mat-spinner>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Loader small centered</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimarySmall}
                        source={{
                            code: `
<mat-spinner class="ds-loading --small --center"></mat-spinner>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Loader determinate</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryDeterminate}
                        source={{
                            code: `
<mat-spinner class="ds-loading" mode="determinate" [value]="spinnerValue"></mat-spinner>
`
                        }}
                    />

                    <Unstyled>
                        <h3>Loader determinate ts</h3>
                    </Unstyled>
                    <div className="source-only">
                        <Canvas
                            source={{
                                code: `
isStart = false;
spinnerValue = 0;
intervalId = {} as any;
startLoading() {
    this.isStart = true;
    this.intervalId = setInterval(() => {
        if (this.spinnerValue < 100) {
            this.spinnerValue += 1;
        } else {
            clearInterval(this.intervalId);
        }
    }, 10);
}
`
                            }}
                            sourceState="shown"
                        />
                    </div>
                </>
            )
        }
    },
    tags: ['autodocs', '!dev']
};

const Template = args => <Loader {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'Loader';
Primary.args = {};

export const PrimarySmall = Template.bind({});
PrimarySmall.storyName = 'Loader small';
PrimarySmall.args = {
    small: true
};

export const PrimaryDeterminate = Template.bind({});
PrimaryDeterminate.storyName = 'Loader determinate';
PrimaryDeterminate.args = {
    isDeterminate: true
};
