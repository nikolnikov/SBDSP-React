import { SideSheet } from './SideSheet';

export default {
    title: 'Components/Side sheet',
    component: SideSheet,
    parameters: {
        layout: 'centered',
        actions: {
            disable: true
        },
        interactions: {
            disable: true
        }
    },
    tags: ['autodocs', '!dev']
};

export const BasicSideSheet = {
    args: {
        children: 'Side sheet content.',
        title: 'Title'
    },
    argTypes: {
        customClasses: { table: { disable: true } }
    }
};
