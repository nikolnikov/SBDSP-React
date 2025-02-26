import { Pagination } from './Pagination';

export default {
    title: 'Components/Pagination',
    component: Pagination,
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
        nextHandler: () => console.log('Next'),
        prevHandler: () => console.log('Prev'),
        totalItemCount: 150,
        itemCountSelectionArray: ['10', '25', '50', '75', '100']
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        nextHandler: { table: { disable: true } },
        prevHandler: { table: { disable: true } }
    }
};
