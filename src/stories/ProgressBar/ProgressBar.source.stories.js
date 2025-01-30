import React from 'react';
import { ProgressBar } from './ProgressBar';
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
    title: 'Components/Progress Bar/Code',
    component: ProgressBar,
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

const Template = args => <ProgressBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    fillPercentage: 50
};

const storyData = [
    {
        title: 'Progress Bar',
        template: Primary,
        reactCode: `
import ProgressBar from '@ds-react/pro/ProgressBar';

<ProgressBar fillPercentage={50} />
        `,
        angularCode: `
<div class="ds-progressbar">
    <div class="--fill" style="width: 50%;"></div>
</div>  
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-progressbar">
    <div class="--fill" style="width: 50%;"></div>
</div>
`
    }
];

const storyPropTypes = [
    'customClasses: PropTypes.array,',
    'fillPercentage: PropTypes.number,'
];
