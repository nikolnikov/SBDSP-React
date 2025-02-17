import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { NavRail } from './NavRail';
import { navItems } from '../data';

export default {
    title: 'Professional/Navigation: Rail',
    component: NavRail,
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
                    <div className="navrail">
                        <Canvas of={Primary} sourceState="none" />
                    </div>
                    <Controls />
                </>
            )
        }
    },
    tags: ['autodocs', '!dev']
};

const Template = args => <NavRail {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    navItems: navItems,
    noHeader: false
};
