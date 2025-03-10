import { QDSSideSheet } from './SideSheet';

export default {
    title: 'Components/Side sheet',
    component: QDSSideSheet,
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
