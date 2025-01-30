import React from 'react';
import { Loader } from './Loader';
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
    title: 'Professional/Loader/Code',
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
            page: StoryDocs
        }
    },
    tags: ['autodocs', '!dev']
};

const Template = args => <Loader {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
    small: true
};

export const PrimaryDeterminate = Template.bind({});
PrimaryDeterminate.args = {
    isDeterminate: true
};

const storyData = [
    {
        title: 'Loader',
        template: Primary,
        reactCode: `
import Loader from '@ds-react/pro/Loader';

<Loader />
        `,
        angularCode: `
<mat-spinner class="ds-loading"></mat-spinner>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-loading" role="progressbar">
    <div></div><div></div><div></div><div></div>
</div>
`
    },
    {
        title: 'Loader small',
        template: PrimarySmall,
        reactCode: `
import Loader from '@ds-react/pro/Loader';

<Loader small />
        `,
        angularCode: `
<mat-spinner class="ds-loading --small"></mat-spinner>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-loading --small" role="progressbar">
    <div></div><div></div><div></div><div></div>
</div>
`
    },
    {
        title: 'Loader determinate',
        template: PrimaryDeterminate,
        reactCode: `
import React, { useState, useEffect, useRef } from 'react';
import Loader from '@ds-react/pro/Loader';

const [progress, setProgress] = useState(0);
const animationFrameIdRef = useRef(null);
const isDeterminate = true;
const speed = 2; // Adjust this value to control the speed (higher value = faster)

useEffect(() => {
    if (isDeterminate) {
        let lastTimestamp = null;

        const animate = timestamp => {
            if (lastTimestamp !== null) {
                const elapsed = timestamp - lastTimestamp;
                setProgress(prevProgress => {
                    const increment = (elapsed * speed) / 16.67;
                    if (prevProgress + increment >= 100) {
                        cancelAnimationFrame(animationFrameIdRef.current);
                        return 100;
                    }
                    return prevProgress + increment;
                });
            }
            lastTimestamp = timestamp;
            animationFrameIdRef.current = requestAnimationFrame(animate);
        };

        animationFrameIdRef.current = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameIdRef.current);
    }
}, [isDeterminate, speed]);

<Loader isDeterminate />
        `,
        angularCode: `
<mat-spinner 
    class="ds-loading"
    mode="determinate"
    [value]="spinnerValue"
></mat-spinner>
        `,
        tsCode: `
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
        `,
        htmlCode: ''
    }
];

const storyPropTypes = [
    'customClasses: PropTypes.string,',
    'isCentered: PropTypes.bool,',
    'isDeterminate: PropTypes.bool,',
    'isFixed: PropTypes.bool,',
    'progress: PropTypes.number,',
    'small: PropTypes.bool'
];
