import { QDSPagination } from './Pagination';

export default {
    title: 'Components/Pagination',
    component: QDSPagination,
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

export const DefaultPagination = {
    args: {
        totalItemCount: 150,
        itemCountSelectionArray: ['10', '25', '50', '75', '100']
    },
    argTypes: {
        customClasses: { table: { disable: true } }
    }
};
