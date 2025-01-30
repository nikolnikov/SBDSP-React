import React from 'react';
import { Pagination } from './Pagination';
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
    title: 'Components/Pagination/Code',
    component: Pagination,
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

const Template = args => <Pagination {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    nextHandler: () => console.log('Next'),
    prevHandler: () => console.log('Prev'),
    totalItemCount: 150,
    itemCountSelectionArray: ['10', '25', '50', '75', '100']
};

const storyData = [
    {
        title: 'Pagination',
        template: Primary,
        reactCode: `
import Pagination from '@ds-react/pro/Pagination';

const nextHandler = () => {
    console.log('Next button clicked');
};

const prevHandler = () => {
    console.log('Prev button clicked');
};

<Pagination
    nextHandler={nextHandler}
    prevHandler={prevHandler}
    totalItemCount={150}
    itemCountSelectionArray={['10', '25', '50', '75', '100']}
/>
        `,
        angularCode: `
<mat-paginator 
    class="ds-pagination" 
    [length]="100"
    [pageSize]="10"
    [pageSizeOptions]="[10, 25, 50, 100]"
>
</mat-paginator>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-pagination">
    <div class="ds-pagination__content">
        <div class="ds-pagination__size">
            Items per page:

            <div class="ds-input__select">
                <select name="label">
                <option value="">10</option>
                <option value="">25</option>
                <option value="">50</option>
                <option value="">100</option>
                </select>
            </div>
        </div>

        <div class="ds-pagination__range">
            1 – 10 of 100
        </div>

        <div class="ds-pagination__actions">
            <button class="ds-button --icon --disabled">
                <div class="ds-tooltip">
                    <div class="--top" data-tip="Previous page">
                        <span class="ds-icon--caret-left" aria-label="Previous"></span>
                    </div>
                </div>
            </button>

            <button class="ds-button --icon">
                <div class="ds-tooltip">
                    <div class="--top" data-tip="Next page">
                        <span class="ds-icon--caret-right" aria-label="Next"></span>
                    </div>
                </div>
            </button>
        </div>
    </div>
</div>
`
    }
];

const storyPropTypes = [
    'customClasses: PropTypes.array,',
    'nextHandler: PropTypes.func,',
    'prevHandler: PropTypes.func,',
    'totalItemCount: PropTypes.number,',
    'itemCountSelectionArray: PropTypes.array'
];
