import React from 'react';
import { Stories, Subtitle } from '@storybook/blocks';
import { ContextualMenu } from './ContextualMenu';
import { menuItemData } from './data';

export default {
    title: 'Components/Contextual Menu/React',
    component: ContextualMenu,
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
                    <Stories />

                    <Subtitle>
                        <div className="props-card">
                            <h4>Available props</h4>
                            <ul className="ds-list">
                                <li>children: PropTypes.node,</li>
                                <li>closeMenu: PropTypes.func,</li>
                                <li>menuItems: PropTypes.array,</li>
                                <li>menuRight: PropTypes.bool,</li>
                                <li>menuWidth: PropTypes.number,</li>
                                <li>menuClass: PropTypes.string,</li>
                                <li>openMenu: PropTypes.object,</li>
                            </ul>
                        </div>
                    </Subtitle>
                </>
            )
        }
    },
    tags: ['autodocs', '!dev']
};

const Template = args => <ContextualMenu {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'Contextual menu';
Primary.args = {
    closeMenu: () => console.log('Close menu'),
    menuItems: menuItemData,
    openMenu: { current: 'menu' }
};

export const PrimaryRight = Template.bind({});
PrimaryRight.storyName = 'Contextual menu right';
PrimaryRight.args = {
    ...Primary.args,
    menuRight: true
};
