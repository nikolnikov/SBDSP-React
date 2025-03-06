import React from 'react';
import { Canvas, Stories } from '@storybook/addon-docs/blocks';
import { Icon } from './Icons';
import '!style-loader!css-loader!sass-loader!./icons.scss';

// export const StoryDocs = () => {
//     return (
//         <div className="icons-wrapper">
//             <h3>Flat</h3>
//             <Canvas />
//         </div>
//     );
// };

export default {
    title: 'Components/Icons',
    component: Icon,
    parameters: {
        layout: 'centered',
        actions: {
            disable: true
        },
        controls: {
            disable: true
        },
        interactions: {
            disable: true
        }
    },

    tags: ['autodocs', '!dev']
};

const Template = args => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
    color: 'gray__900',
    name: 'info',
    size: '24'
};
