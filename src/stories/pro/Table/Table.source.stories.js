import React from 'react';
import { Table } from './Table';
import { StoriesTemplate } from '../../Stories.template';
import {
    tableHeadDataOne,
    tableCellDataOne,
    tableHeadDataButton,
    tableCellDataButton,
    tableHeadDataMenu,
    tableCellDataMenu,
    tableHeadDataToggle,
    tableCellDataToggle
} from '../data';

export const StoryDocs = () => {
    return (
        <StoriesTemplate
            storyData={storyData}
            storyPropTypes={storyPropTypes}
        />
    );
};

export default {
    title: 'Professional/Table/Code',
    component: Table,
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

const Template = args => <Table {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isSortable: false,
    tableCellData: tableCellDataOne,
    tableHeadData: tableHeadDataOne
};

export const PrimaryFlatTrans = Template.bind({});
PrimaryFlatTrans.args = {
    isFlat: true,
    isSortable: false,
    isTransparent: true,
    tableCellData: tableCellDataOne,
    tableHeadData: tableHeadDataOne
};

export const PrimarySorting = Template.bind({});
PrimarySorting.args = {
    tableCellData: tableCellDataOne,
    tableHeadData: tableHeadDataOne
};

export const PrimarySortingButton = Template.bind({});
PrimarySortingButton.args = {
    tableCellData: tableCellDataButton,
    tableHeadData: tableHeadDataButton
};

export const PrimarySortingMenu = Template.bind({});
PrimarySortingMenu.args = {
    customClasses: 'ds-table__menu',
    tableCellData: tableCellDataMenu,
    tableHeadData: tableHeadDataMenu
};

export const PrimaryExpandable = Template.bind({});
PrimaryExpandable.args = {
    isExpandable: true,
    customClasses: 'ds-table__menu',
    tableCellData: tableCellDataToggle,
    tableHeadData: tableHeadDataToggle
};

const storyData = [
    {
        title: 'Table',
        template: Primary,
        reactCode: `
import Table from '@ds-react/pro/Table';

export const tableHeadDataExample = [
    {
        id: 'name',
        label: 'Patient name'
    },
    {
        id: 'test',
        label: 'Test ordered'
    },
    {
        id: 'labRefId',
        label: 'Lab ref ID'
    },
    {
        id: 'orderedBy',
        label: 'Ordered by'
    },
    {
        id: 'status',
        label: 'Status'
    }
];

export const tableCellDataExample = [
    {
        id: 0,
        name: 'Blake, Edward',
        test: 'Antibody Screen, RBC with Reflex to Identification, Titer, and Antigen Typing',
        labRefId: '1234',
        orderedBy: 'Osterman, Jon',
        status: 'Input needed'
    },
    {
        id: 1,
        name: 'Jupiter, Sally',
        test: 'CBC (includes Differential and Platelets) with Automated Differential',
        labRefId: '5678',
        orderedBy: 'Osterman, Jon',
        status: 'Received at Quest'
    },
    {
        id: 2,
        name: 'Kovachs, Walter',
        test: 'Lipid Panel',
        labRefId: '9012',
        orderedBy: 'Osterman, Jon',
        status: 'Resulted'
    }
];

<Table
    tableHeadData={tableHeadDataExample}
    tableCellData={tableCellDataExample}
/>
        `,
        angularCode: `
<table class="ds-table" mat-table [dataSource]="dataSource">
    <ng-container matColumnDef="name">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef> Patient name </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element">
            <span>{{element.name}}</span>
        </td>
    </ng-container>

    <ng-container matColumnDef="test">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef> Test ordered </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element">
            <span>{{element.test}}</span>
        </td>
    </ng-container>

    <ng-container matColumnDef="labRefId">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef> Lab ref ID </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element"> <span>{{element.labRefId}}</span> </td>
    </ng-container>

    <ng-container matColumnDef="orderedBy">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef> Ordered by </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element"> <span>{{element.orderedBy}}</span> </td>
    </ng-container>

    <ng-container matColumnDef="status">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef> Status </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element"> <span>{{element.status}}</span> </td>
    </ng-container>

    <tr class="ds-table__head" mat-header-row *matHeaderRowDef="displayedColumnsBasic"></tr>
    <tr class="ds-table__row" mat-row *matRowDef="let row; columns: displayedColumnsBasic;"></tr>
</table>
        `,
        tsCode: `
import { MatTableDataSource } from '@angular/material/table';

dataSource = new MatTableDataSource(ELEMENT_DATA);

displayedColumns: string[] = ['name', 'test', 'labRefId', 'orderedBy', 'status'];

export interface Patient {
    name: string;
    test: string;
    labRefId: string;
    orderedBy: string;
    status: string;
}

const ELEMENT_DATA: Patient[] = [
    {
        name: 'Blake, Edward', 
        test: 'Antibody Screen, RBC with Reflex to Identification, Titer, and Antigen Typing',
        labRefId: '1234',
        orderedBy: 'Osterman, Jon',
        status: 'Input needed'
    },
    {
        name: 'Jupiter, Sally',
        test: 'CBC (includes Differential and Platelets) with Automated Differential',
        labRefId: '5678',
        orderedBy: 'Osterman, Jon',
        status: 'Received at Quest'
    },
    {
        name: 'Kovachs, Walter',
        test: 'Lipid Panel',
        labRefId: '9012',
        orderedBy: 'Osterman, Jon',
        status: 'Resulted'
    }
];
        `,
        htmlCode: `
<table class="ds-table">
    <thead>
        <tr class="ds-table__head">
            <th class="ds-table__head-th"> Patient Name </th>

            <th class="ds-table__head-th"> Test ordered </th>

            <th class="ds-table__head-th"> Lab ref ID </th>

            <th class="ds-table__head-th"> Ordered by </th>

            <th class="ds-table__head-th"> Status </th>
        </tr>
    </thead>

    <tbody>
        <tr class="ds-table__row">
            <td class="ds-table__row-td">
                <span>Blake, Edward</span>
            </td>

            <td class="ds-table__row-td">
                <span>Antibody Screen, RBC with Reflex to Identification, Titer, and Antigen Typing</span>
            </td>

            <td class="ds-table__row-td">
                <span>1234</span>
            </td>

            <td class="ds-table__row-td">
                <span>Osterman, Jon</span>
            </td>

            <td class="ds-table__row-td">
                <span>Input needed</span>
            </td>
        </tr>
    </tbody>
</table>
`,
        cssCode: `
.ds-table__head-th:nth-child(1),
.ds-table__row-td:nth-child(1) {
    width: 200px;
}

.ds-table__head-th:nth-child(2),
.ds-table__row-td:nth-child(2) {
    width: auto;
}

.ds-table__head-th:nth-child(3),
.ds-table__row-td:nth-child(3) {
    width: 110px;
}

.ds-table__head-th:nth-child(4),
.ds-table__row-td:nth-child(4) {
    width: 160px;
}

.ds-table__head-th:nth-child(5),
.ds-table__row-td:nth-child(5) {
    width: 150px;
}
        `
    },
    {
        title: 'Table flat and transparent',
        template: PrimaryFlatTrans,
        reactCode: `
import Table from '@ds-react/pro/Table';

export const tableHeadDataExample = [
    {
        id: 'name',
        label: 'Patient name'
    },
    {
        id: 'test',
        label: 'Test ordered'
    },
    {
        id: 'labRefId',
        label: 'Lab ref ID'
    },
    {
        id: 'orderedBy',
        label: 'Ordered by'
    },
    {
        id: 'status',
        label: 'Status'
    }
];

export const tableCellDataExample = [
    {
        id: 0,
        name: 'Blake, Edward',
        test: 'Antibody Screen, RBC with Reflex to Identification, Titer, and Antigen Typing',
        labRefId: '1234',
        orderedBy: 'Osterman, Jon',
        status: 'Input needed'
    },
    {
        id: 1,
        name: 'Jupiter, Sally',
        test: 'CBC (includes Differential and Platelets) with Automated Differential',
        labRefId: '5678',
        orderedBy: 'Osterman, Jon',
        status: 'Received at Quest'
    },
    {
        id: 2,
        name: 'Kovachs, Walter',
        test: 'Lipid Panel',
        labRefId: '9012',
        orderedBy: 'Osterman, Jon',
        status: 'Resulted'
    }
];

<Table
    isFlat
    isTransparent
    tableHeadData={tableHeadDataExample}
    tableCellData={tableCellDataExample}
/>
        `,
        angularCode: `
<table class="ds-table --flat --transparent" mat-table [dataSource]="dataSource">
    <ng-container matColumnDef="name">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef> Patient name </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element">
            <span>{{element.name}}</span>
        </td>
    </ng-container>

    <ng-container matColumnDef="test">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef> Test ordered </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element">
            <span>{{element.test}}</span>
        </td>
    </ng-container>

    <ng-container matColumnDef="labRefId">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef> Lab ref ID </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element"> <span>{{element.labRefId}}</span> </td>
    </ng-container>

    <ng-container matColumnDef="orderedBy">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef> Ordered by </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element"> <span>{{element.orderedBy}}</span> </td>
    </ng-container>

    <ng-container matColumnDef="status">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef> Status </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element"> <span>{{element.status}}</span> </td>
    </ng-container>

    <tr class="ds-table__head" mat-header-row *matHeaderRowDef="displayedColumnsBasic"></tr>
    <tr class="ds-table__row" mat-row *matRowDef="let row; columns: displayedColumnsBasic;"></tr>
</table>
        `,
        tsCode: `
import { MatTableDataSource } from '@angular/material/table';

dataSource = new MatTableDataSource(ELEMENT_DATA);

displayedColumns: string[] = ['name', 'test', 'labRefId', 'orderedBy', 'status'];

export interface Patient {
    name: string;
    test: string;
    labRefId: string;
    orderedBy: string;
    status: string;
}

const ELEMENT_DATA: Patient[] = [
    {
        name: 'Blake, Edward', 
        test: 'Antibody Screen, RBC with Reflex to Identification, Titer, and Antigen Typing',
        labRefId: '1234',
        orderedBy: 'Osterman, Jon',
        status: 'Input needed'
    },
    {
        name: 'Jupiter, Sally',
        test: 'CBC (includes Differential and Platelets) with Automated Differential',
        labRefId: '5678',
        orderedBy: 'Osterman, Jon',
        status: 'Received at Quest'
    },
    {
        name: 'Kovachs, Walter',
        test: 'Lipid Panel',
        labRefId: '9012',
        orderedBy: 'Osterman, Jon',
        status: 'Resulted'
    }
];
        `,
        htmlCode: `
<table class="ds-table --flat --transparent">
    <thead>
        <tr class="ds-table__head">
            <th class="ds-table__head-th"> Patient Name </th>

            <th class="ds-table__head-th"> Test ordered </th>

            <th class="ds-table__head-th"> Lab ref ID </th>

            <th class="ds-table__head-th"> Ordered by </th>

            <th class="ds-table__head-th"> Status </th>
        </tr>
    </thead>

    <tbody>
        <tr class="ds-table__row">
            <td class="ds-table__row-td">
                <span>Blake, Edward</span>
            </td>

            <td class="ds-table__row-td">
                <span>Antibody Screen, RBC with Reflex to Identification, Titer, and Antigen Typing</span>
            </td>

            <td class="ds-table__row-td">
                <span>1234</span>
            </td>

            <td class="ds-table__row-td">
                <span>Osterman, Jon</span>
            </td>

            <td class="ds-table__row-td">
                <span>Input needed</span>
            </td>
        </tr>
    </tbody>
</table>
`,
        cssCode: `
.ds-table__head-th:nth-child(1),
.ds-table__row-td:nth-child(1) {
    width: 200px;
}

.ds-table__head-th:nth-child(2),
.ds-table__row-td:nth-child(2) {
    width: auto;
}

.ds-table__head-th:nth-child(3),
.ds-table__row-td:nth-child(3) {
    width: 110px;
}

.ds-table__head-th:nth-child(4),
.ds-table__row-td:nth-child(4) {
    width: 160px;
}

.ds-table__head-th:nth-child(5),
.ds-table__row-td:nth-child(5) {
    width: 150px;
}
`
    },
    {
        title: 'Table with sorting',
        template: PrimarySorting,
        reactCode: `
import React, { useState } from 'react';
import Table from '@ds-react/pro/Table';

const [sortOrder, setSortOrder] = useState('asc');
const [sortProperty, setSortProperty] = useState('name');

const sortOnChangeHandler = (property, order) => {
    setSortOrder(order);
    setSortProperty(property);
};

export const tableHeadDataExample = [
    {
        id: 'name',
        label: 'Patient name'
    },
    {
        id: 'test',
        label: 'Test ordered'
    },
    {
        id: 'labRefId',
        label: 'Lab ref ID'
    },
    {
        id: 'orderedBy',
        label: 'Ordered by'
    },
    {
        id: 'status',
        label: 'Status'
    }
];

export const tableCellDataExample = [
    {
        id: 0,
        name: 'Blake, Edward',
        test: 'Antibody Screen, RBC with Reflex to Identification, Titer, and Antigen Typing',
        labRefId: '1234',
        orderedBy: 'Osterman, Jon',
        status: 'Input needed'
    },
    {
        id: 1,
        name: 'Jupiter, Sally',
        test: 'CBC (includes Differential and Platelets) with Automated Differential',
        labRefId: '5678',
        orderedBy: 'Osterman, Jon',
        status: 'Received at Quest'
    },
    {
        id: 2,
        name: 'Kovachs, Walter',
        test: 'Lipid Panel',
        labRefId: '9012',
        orderedBy: 'Osterman, Jon',
        status: 'Resulted'
    }
];

<Table
    isSortable
    sortOnChangeHandler={sortOnChangeHandler}
    sortOrder={sortOrder}
    sortProperty={sortProperty}
    tableHeadData={tableHeadDataExample}
    tableCellData={tableCellDataExample}
/>
        `,
        angularCode: `
<table class="ds-table --sortable" mat-table [dataSource]="dataSource" matSort matSortActive="name" matSortDirection="asc" (matSortChange)="announceSortChange($event)">
    <ng-container matColumnDef="name">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef mat-sort-header> Patient name </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element">
            <span>{{element.name}}</span>
        </td>
    </ng-container>

    <ng-container matColumnDef="test">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef mat-sort-header> Test ordered </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element">
            <span>{{element.test}}</span>
        </td>
    </ng-container>

    <ng-container matColumnDef="labRefId">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef mat-sort-header> Lab ref ID </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element"> <span>{{element.labRefId}}</span> </td>
    </ng-container>

    <ng-container matColumnDef="orderedBy">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef mat-sort-header> Ordered by </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element"> <span>{{element.orderedBy}}</span> </td>
    </ng-container>

    <ng-container matColumnDef="status">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element"> <span>{{element.status}}</span> </td>
    </ng-container>

    <tr class="ds-table__head" mat-header-row *matHeaderRowDef="displayedColumnsBasic"></tr>
    <tr class="ds-table__row" mat-row *matRowDef="let row; columns: displayedColumnsBasic;"></tr>
</table>
        `,
        tsCode: `
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';

constructor(
    private _liveAnnouncer: LiveAnnouncer
) { }

ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.sort.disableClear = true;
}

@ViewChild(MatSort) sort: MatSort;

dataSource = new MatTableDataSource(ELEMENT_DATA);

displayedColumns: string[] = ['name', 'test', 'labRefId', 'orderedBy', 'status'];

announceSortChange(sortState: Sort) {
    if (sortState.direction) {
        this._liveAnnouncer.announce('Sorted {sortState.direction}ending');
    } else {
        this._liveAnnouncer.announce('Sorting cleared');
    }
}

export interface Patient {
    name: string;
    test: string;
    labRefId: string;
    orderedBy: string;
    status: string;
}

const ELEMENT_DATA: Patient[] = [
    {
        name: 'Blake, Edward', 
        test: 'Antibody Screen, RBC with Reflex to Identification, Titer, and Antigen Typing',
        labRefId: '1234',
        orderedBy: 'Osterman, Jon',
        status: 'Input needed'
    },
    {
        name: 'Jupiter, Sally',
        test: 'CBC (includes Differential and Platelets) with Automated Differential',
        labRefId: '5678',
        orderedBy: 'Osterman, Jon',
        status: 'Received at Quest'
    },
    {
        name: 'Kovachs, Walter',
        test: 'Lipid Panel',
        labRefId: '9012',
        orderedBy: 'Osterman, Jon',
        status: 'Resulted'
    }
];
        `,
        htmlCode: `
<table class="ds-table --sortable">
    <thead>
        <tr class="ds-table__head">
            <th class="ds-table__head-th"> Patient Name </th>

            <th class="ds-table__head-th"> Test ordered </th>

            <th class="ds-table__head-th"> Lab ref ID </th>

            <th class="ds-table__head-th"> Ordered by </th>

            <th class="ds-table__head-th --no-sort"> Status </th>
        </tr>
    </thead>

    <tbody>
        <tr class="ds-table__row">
            <td class="ds-table__row-td">
                <span>Blake, Edward</span>
            </td>

            <td class="ds-table__row-td">
                <span>Antibody Screen, RBC with Reflex to Identification, Titer, and Antigen Typing</span>
            </td>

            <td class="ds-table__row-td">
                <span>1234</span>
            </td>

            <td class="ds-table__row-td">
                <span>Osterman, Jon</span>
            </td>

            <td class="ds-table__row-td">
                <span>Input needed</span>
            </td>
        </tr>
    </tbody>
</table>
`,
        cssCode: `
.ds-table__head-th:nth-child(1),
.ds-table__row-td:nth-child(1) {
    width: 200px;
}

.ds-table__head-th:nth-child(2),
.ds-table__row-td:nth-child(2) {
    width: auto;
}

.ds-table__head-th:nth-child(3),
.ds-table__row-td:nth-child(3) {
    width: 110px;
}

.ds-table__head-th:nth-child(4),
.ds-table__row-td:nth-child(4) {
    width: 160px;
}

.ds-table__head-th:nth-child(5),
.ds-table__row-td:nth-child(5) {
    width: 150px;
}
`
    },
    {
        title: 'Table with sorting and action button',
        template: PrimarySortingButton,
        reactCode: `
import React, { useState } from 'react';
import Table from '@ds-react/pro/Table';

const [sortOrder, setSortOrder] = useState('asc');
const [sortProperty, setSortProperty] = useState('name');

const sortOnChangeHandler = (property, order) => {
    setSortOrder(order);
    setSortProperty(property);
};

export const tableHeadDataExample = [
    {
        id: 'name',
        label: 'Patient name'
    },
    {
        id: 'test',
        label: 'Test ordered'
    },
    {
        id: 'labRefId',
        label: 'Lab ref ID'
    },
    {
        id: 'orderedBy',
        label: 'Ordered by'
    },
    {
        id: 'status',
        label: 'Status'
    },
    {
        id: 'action',
        label: '',
        noSort: true
    }
];

export const tableCellDataExample = [
    {
        id: 0,
        name: 'Blake, Edward',
        test: 'Antibody Screen, RBC with Reflex to Identification, Titer, and Antigen Typing',
        labRefId: '1234',
        orderedBy: 'Osterman, Jon',
        status: 'Input needed',
        action: {
            title: 'Learn more',
            action: () => {
                console.log('Learn more');
            }
        }
    },
    {
        id: 1,
        name: 'Jupiter, Sally',
        test: 'CBC (includes Differential and Platelets) with Automated Differential',
        labRefId: '5678',
        orderedBy: 'Osterman, Jon',
        status: 'Received at Quest',
        action: {
            title: 'Learn more',
            action: () => {
                console.log('Learn more');
            }
        }
    },
    {
        id: 2,
        name: 'Kovachs, Walter',
        test: 'Lipid Panel',
        labRefId: '9012',
        orderedBy: 'Osterman, Jon',
        status: 'Resulted',
        action: {
            title: 'Learn more',
            action: () => {
                console.log('Learn more');
            }
        }
    }
];

<Table
    isSortable
    sortOnChangeHandler={sortOnChangeHandler}
    sortOrder={sortOrder}
    sortProperty={sortProperty}
    tableHeadData={tableHeadDataExample}
    tableCellData={tableCellDataExample}
/>
        `,
        angularCode: `
<table class="ds-table --sortable" mat-table [dataSource]="dataSource" matSort matSortActive="name" matSortDirection="asc" (matSortChange)="announceSortChange($event)">
    <ng-container matColumnDef="name">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef mat-sort-header> Patient name </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element">
            <span>{{element.name}}</span>
        </td>
    </ng-container>

    <ng-container matColumnDef="test">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef mat-sort-header> Test ordered </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element">
            <span>{{element.test}}</span>
        </td>
    </ng-container>

    <ng-container matColumnDef="labRefId">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef mat-sort-header> Lab ref ID </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element"> <span>{{element.labRefId}}</span> </td>
    </ng-container>

    <ng-container matColumnDef="orderedBy">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef mat-sort-header> Ordered by </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element"> <span>{{element.orderedBy}}</span> </td>
    </ng-container>

    <ng-container matColumnDef="status">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element"> <span>{{element.status}}</span> </td>
    </ng-container>

    <ng-container matColumnDef="actions">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef> </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element">
            <button class="ds-button --secondary" (click)="element.action()">
                Learn more
            </button>
        </td>
    </ng-container>

    <tr class="ds-table__head" mat-header-row *matHeaderRowDef="displayedColumnsBasic"></tr>
    <tr class="ds-table__row" mat-row *matRowDef="let row; columns: displayedColumnsBasic;"></tr>
</table>
        `,
        tsCode: `
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';

constructor(
    private _liveAnnouncer: LiveAnnouncer
) { }

ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.sort.disableClear = true;
}

@ViewChild(MatSort) sort: MatSort;

dataSource = new MatTableDataSource(ELEMENT_DATA);

displayedColumns: string[] = ['name', 'test', 'labRefId', 'orderedBy', 'status', 'actions'];

announceSortChange(sortState: Sort) {
    if (sortState.direction) {
        this._liveAnnouncer.announce('Sorted {sortState.direction}ending');
    } else {
        this._liveAnnouncer.announce('Sorting cleared');
    }
}

export interface Patient {
    name: string;
    test: string;
    labRefId: string;
    orderedBy: string;
    status: string;
}

const ELEMENT_DATA: Patient[] = [
    {
        name: 'Blake, Edward', 
        test: 'Antibody Screen, RBC with Reflex to Identification, Titer, and Antigen Typing',
        labRefId: '1234',
        orderedBy: 'Osterman, Jon',
        status: 'Input needed'
    },
    {
        name: 'Jupiter, Sally',
        test: 'CBC (includes Differential and Platelets) with Automated Differential',
        labRefId: '5678',
        orderedBy: 'Osterman, Jon',
        status: 'Received at Quest'
    },
    {
        name: 'Kovachs, Walter',
        test: 'Lipid Panel',
        labRefId: '9012',
        orderedBy: 'Osterman, Jon',
        status: 'Resulted'
    }
];
        `,
        htmlCode: `
<table class="ds-table --sortable">
    <thead>
        <tr class="ds-table__head">
            <th class="ds-table__head-th"> Patient Name </th>

            <th class="ds-table__head-th"> Test ordered </th>

            <th class="ds-table__head-th"> Lab ref ID </th>

            <th class="ds-table__head-th"> Ordered by </th>

            <th class="ds-table__head-th --no-sort"> Status </th>

            <th class="ds-table__head-th --actions --no-sort"> </th>
        </tr>
    </thead>

    <tbody>
        <tr class="ds-table__row">
            <td class="ds-table__row-td">
                <span>Blake, Edward</span>
            </td>

            <td class="ds-table__row-td">
                <span>Antibody Screen, RBC with Reflex to Identification, Titer, and Antigen Typing</span>
            </td>

            <td class="ds-table__row-td">
                <span>1234</span>
            </td>

            <td class="ds-table__row-td">
                <span>Osterman, Jon</span>
            </td>

            <td class="ds-table__row-td">
                <span>Input needed</span>
            </td>

            <td class="ds-table__row-td">
                <button class="ds-button --secondary">
                    Learn more
                </button>
            </td>
        </tr>
    </tbody>
</table>
`,
        cssCode: `
.ds-table__head-th:nth-child(1),
.ds-table__row-td:nth-child(1) {
    width: 200px;
}

.ds-table__head-th:nth-child(2),
.ds-table__row-td:nth-child(2) {
    width: auto;
}

.ds-table__head-th:nth-child(3),
.ds-table__row-td:nth-child(3) {
    width: 110px;
}

.ds-table__head-th:nth-child(4),
.ds-table__row-td:nth-child(4) {
    width: 160px;
}

.ds-table__head-th:nth-child(5),
.ds-table__row-td:nth-child(5) {
    width: 150px;
}

.ds-table__head-th:nth-child(6),
.ds-table__row-td:nth-child(6) {
    width: 150px;
}
`
    },
    {
        title: 'Table with sorting and menu',
        template: PrimarySortingMenu,
        reactCode: `
import React, { useState } from 'react';
import Table from '@ds-react/pro/Table';

const [sortOrder, setSortOrder] = useState('asc');
const [sortProperty, setSortProperty] = useState('name');

const sortOnChangeHandler = (property, order) => {
    setSortOrder(order);
    setSortProperty(property);
};

export const tableHeadDataExample = [
    {
        id: 'name',
        label: 'Patient name'
    },
    {
        id: 'test',
        label: 'Test ordered'
    },
    {
        id: 'labRefId',
        label: 'Lab ref ID'
    },
    {
        id: 'orderedBy',
        label: 'Ordered by'
    },
    {
        id: 'status',
        label: 'Status'
    },
    {
        id: 'action',
        label: '',
        noSort: true
    }
];

export const tableCellDataExample = [
    {
        id: 0,
        name: 'Blake, Edward',
        test: 'Antibody Screen, RBC with Reflex to Identification, Titer, and Antigen Typing',
        labRefId: '1234',
        orderedBy: 'Osterman, Jon',
        status: 'Input needed',
        action: {
            menuItems: [
                {
                    title: 'Edit',
                    action: () => {
                        console.log('Edit');
                    }
                },
                {
                    title: 'Print',
                    action: () => {
                        console.log('Print');
                    }
                },
                {
                    title: 'Cancel',
                    action: () => {
                        console.log('Cancel');
                    }
                }
            ]
        }
    },
    {
        id: 1,
        name: 'Jupiter, Sally',
        test: 'CBC (includes Differential and Platelets) with Automated Differential',
        labRefId: '5678',
        orderedBy: 'Osterman, Jon',
        status: 'Received at Quest',
        action: {
            menuItems: [
                {
                    title: 'Edit',
                    action: () => {
                        console.log('Edit');
                    }
                },
                {
                    title: 'Print',
                    action: () => {
                        console.log('Print');
                    }
                },
                {
                    title: 'Cancel',
                    action: () => {
                        console.log('Cancel');
                    }
                }
            ]
        }
    },
    {
        id: 2,
        name: 'Kovachs, Walter',
        test: 'Lipid Panel',
        labRefId: '9012',
        orderedBy: 'Osterman, Jon',
        status: 'Resulted',
        action: {
            menuItems: [
                {
                    title: 'Edit',
                    action: () => {
                        console.log('Edit');
                    }
                },
                {
                    title: 'Print',
                    action: () => {
                        console.log('Print');
                    }
                },
                {
                    title: 'Cancel',
                    action: () => {
                        console.log('Cancel');
                    }
                }
            ]
        }
    }
];

<Table
    isSortable
    sortOnChangeHandler={sortOnChangeHandler}
    sortOrder={sortOrder}
    sortProperty={sortProperty}
    tableHeadData={tableHeadDataExample}
    tableCellData={tableCellDataExample}
/>
        `,
        angularCode: `
<table class="ds-table --sortable" mat-table [dataSource]="dataSource" matSort matSortActive="name" matSortDirection="asc" (matSortChange)="announceSortChange($event)">
    <ng-container matColumnDef="name">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef mat-sort-header> Patient name </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element">
            <span>{{element.name}}</span>
        </td>
    </ng-container>

    <ng-container matColumnDef="test">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef mat-sort-header> Test ordered </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element">
            <span>{{element.test}}</span>
        </td>
    </ng-container>

    <ng-container matColumnDef="labRefId">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef mat-sort-header> Lab ref ID </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element"> <span>{{element.labRefId}}</span> </td>
    </ng-container>

    <ng-container matColumnDef="orderedBy">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef mat-sort-header> Ordered by </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element"> <span>{{element.orderedBy}}</span> </td>
    </ng-container>

    <ng-container matColumnDef="status">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element"> <span>{{element.status}}</span> </td>
    </ng-container>

    <ng-container matColumnDef="actions">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef> </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element">
            <button class="ds-button --icon ds-menu__trigger" aria-label="menu trigger" [matMenuTriggerFor]="menu">
                <span class="ds-icon--legacy--overflow" aria-label="menu"></span>
            </button>

            <mat-menu class="ds-dropdown" #menu="matMenu" xPosition="before">
                <button class="ds-menu__item" mat-menu-item (click)="action()">Edit</button>
                <button class="ds-menu__item" mat-menu-item (click)="action()">Print</button>
                <button class="ds-menu__item" mat-menu-item (click)="action()">Cancel</button>
            </mat-menu>
        </td>
    </ng-container>

    <tr class="ds-table__head" mat-header-row *matHeaderRowDef="displayedColumnsBasic"></tr>
    <tr class="ds-table__row" mat-row *matRowDef="let row; columns: displayedColumnsBasic;"></tr>
</table>
        `,
        tsCode: `
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';

constructor(
    private _liveAnnouncer: LiveAnnouncer
) { }

ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.sort.disableClear = true;
}

@ViewChild(MatSort) sort: MatSort;

dataSource = new MatTableDataSource(ELEMENT_DATA);

displayedColumns: string[] = ['name', 'test', 'labRefId', 'orderedBy', 'status', 'actions'];

announceSortChange(sortState: Sort) {
    if (sortState.direction) {
        this._liveAnnouncer.announce('Sorted {sortState.direction}ending');
    } else {
        this._liveAnnouncer.announce('Sorting cleared');
    }
}

export interface Patient {
    name: string;
    test: string;
    labRefId: string;
    orderedBy: string;
    status: string;
}

const ELEMENT_DATA: Patient[] = [
    {
        name: 'Blake, Edward', 
        test: 'Antibody Screen, RBC with Reflex to Identification, Titer, and Antigen Typing',
        labRefId: '1234',
        orderedBy: 'Osterman, Jon',
        status: 'Input needed'
    },
    {
        name: 'Jupiter, Sally',
        test: 'CBC (includes Differential and Platelets) with Automated Differential',
        labRefId: '5678',
        orderedBy: 'Osterman, Jon',
        status: 'Received at Quest'
    },
    {
        name: 'Kovachs, Walter',
        test: 'Lipid Panel',
        labRefId: '9012',
        orderedBy: 'Osterman, Jon',
        status: 'Resulted'
    }
];
        `,
        htmlCode: `
<table class="ds-table --sortable">
    <thead>
        <tr class="ds-table__head">
            <th class="ds-table__head-th"> Patient Name </th>

            <th class="ds-table__head-th"> Test ordered </th>

            <th class="ds-table__head-th"> Lab ref ID </th>

            <th class="ds-table__head-th"> Ordered by </th>

            <th class="ds-table__head-th --no-sort"> Status </th>

            <th class="ds-table__head-th --actions --no-sort"> </th>
        </tr>
    </thead>

    <tbody>
        <tr class="ds-table__row">
            <td class="ds-table__row-td">
                <span>Blake, Edward</span>
            </td>

            <td class="ds-table__row-td">
                <span>Antibody Screen, RBC with Reflex to Identification, Titer, and Antigen Typing</span>
            </td>

            <td class="ds-table__row-td">
                <span>1234</span>
            </td>

            <td class="ds-table__row-td">
                <span>Osterman, Jon</span>
            </td>

            <td class="ds-table__row-td">
                <span>Input needed</span>
            </td>

            <td class="ds-table__row-td">
                <button class="ds-button --primary ds-menu__trigger" aria-label="menu trigger">
                    <span class="ds-icon--legacy--overflow" aria-label="menu"></span>
                </button>

                <div class="ds-menu">
                    <div class="ds-menu__item">Edit</div>
                    <div class="ds-menu__item">Print</div>
                    <div class="ds-menu__item">Cancel</div>
                </div>
            </td>
        </tr>
    </tbody>
</table>
`,
        cssCode: `
.ds-table__head-th:nth-child(1),
.ds-table__row-td:nth-child(1) {
    width: 200px;
}

.ds-table__head-th:nth-child(2),
.ds-table__row-td:nth-child(2) {
    width: auto;
}

.ds-table__head-th:nth-child(3),
.ds-table__row-td:nth-child(3) {
    width: 110px;
}

.ds-table__head-th:nth-child(4),
.ds-table__row-td:nth-child(4) {
    width: 160px;
}

.ds-table__head-th:nth-child(5),
.ds-table__row-td:nth-child(5) {
    width: 150px;
}

.ds-table__head-th:nth-child(6),
.ds-table__row-td:nth-child(6) {
    width: 56px;
}
`
    },
    {
        title: 'Table expandable with sorting and menu',
        template: PrimaryExpandable,
        reactCode: `
import React, { useState } from 'react';
import Table from '@ds-react/pro/Table';

const [sortOrder, setSortOrder] = useState('asc');
const [sortProperty, setSortProperty] = useState('name');

const sortOnChangeHandler = (property, order) => {
    setSortOrder(order);
    setSortProperty(property);
};

export const tableHeadDataExample = [
    {
        id: 'toggle',
        label: '',
        noSort: true
    },
    {
        id: 'name',
        label: 'Patient name'
    },
    {
        id: 'test',
        label: 'Test ordered'
    },
    {
        id: 'labRefId',
        label: 'Lab ref ID'
    },
    {
        id: 'orderedBy',
        label: 'Ordered by'
    },
    {
        id: 'status',
        label: 'Status'
    },
    {
        id: 'action',
        label: '',
        noSort: true
    }
];

export const tableCellDataExample = [
    {
        id: 0,
        toggle: true,
        name: 'Blake, Edward',
        test: 'Antibody Screen, RBC with Reflex to Identification, Titer, and Antigen Typing',
        labRefId: '1234',
        orderedBy: 'Osterman, Jon',
        status: 'Input needed',
        action: {
            menuItems: [
                {
                    title: 'Edit',
                    action: () => {
                        console.log('Edit');
                    }
                },
                {
                    title: 'Print',
                    action: () => {
                        console.log('Print');
                    }
                },
                {
                    title: 'Cancel',
                    action: () => {
                        console.log('Cancel');
                    }
                }
            ]
        },
        expansionContent: 'Content goes here.'
    },
    {
        id: 1,
        toggle: true,
        name: 'Jupiter, Sally',
        test: 'CBC (includes Differential and Platelets) with Automated Differential',
        labRefId: '5678',
        orderedBy: 'Osterman, Jon',
        status: 'Received at Quest',
        action: {
            menuItems: [
                {
                    title: 'Edit',
                    action: () => {
                        console.log('Edit');
                    }
                },
                {
                    title: 'Print',
                    action: () => {
                        console.log('Print');
                    }
                },
                {
                    title: 'Cancel',
                    action: () => {
                        console.log('Cancel');
                    }
                }
            ]
        },
        expansionContent: 'Content goes here.'
    },
    {
        id: 2,
        toggle: true,
        name: 'Kovachs, Walter',
        test: 'Lipid Panel',
        labRefId: '9012',
        orderedBy: 'Osterman, Jon',
        status: 'Resulted',
        action: {
            menuItems: [
                {
                    title: 'Edit',
                    action: () => {
                        console.log('Edit');
                    }
                },
                {
                    title: 'Print',
                    action: () => {
                        console.log('Print');
                    }
                },
                {
                    title: 'Cancel',
                    action: () => {
                        console.log('Cancel');
                    }
                }
            ]
        },
        expansionContent: 'Content goes here.'
    }
];

<Table
    isExpandable
    isSortable
    sortOnChangeHandler={sortOnChangeHandler}
    sortOrder={sortOrder}
    sortProperty={sortProperty}
    tableHeadData={tableHeadDataExample}
    tableCellData={tableCellDataExample}
/>
        `,
        angularCode: `
<table class="ds-table --expandable --sortable" mat-table [dataSource]="dataSourceExpandable" multiTemplateDataRows matSort #sortExpandable="matSort" matSortActive="name" matSortDirection="asc" (matSortChange)="announceSortChange($event)">
    <ng-container matColumnDef="buttonExpand">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef></th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element" (click)="element.expandedElement = !element.expandedElement">
            <button class="ds-button --icon --md">
                <span class="ds-icon--expand" [class.--expanded]="element.expandedElement" aria-label="expand"></span>
            </button>
        </td>
    </ng-container>

    <ng-container matColumnDef="name">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef mat-sort-header> Patient name </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element">
            <span>{{element.name}}</span>
        </td>
    </ng-container>

    <ng-container matColumnDef="test">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef mat-sort-header> Test ordered </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element">
            <span>{{element.test}}</span>
        </td>
    </ng-container>

    <ng-container matColumnDef="labRefId">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef mat-sort-header> Lab ref ID </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element"> <span>{{element.labRefId}}</span> </td>
    </ng-container>

    <ng-container matColumnDef="orderedBy">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef mat-sort-header> Ordered by </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element"> <span>{{element.orderedBy}}</span> </td>
    </ng-container>

    <ng-container matColumnDef="status">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element"> <span>{{element.status}}</span> </td>
    </ng-container>

    <ng-container matColumnDef="actions">
        <th class="ds-table__head-th" mat-header-cell *matHeaderCellDef> </th>
        <td class="ds-table__row-td" mat-cell *matCellDef="let element">
            <button class="ds-button --icon ds-menu__trigger" aria-label="menu trigger" [matMenuTriggerFor]="menu">
                <span class="ds-icon--legacy--overflow" aria-label="menu"></span>
            </button>

            <mat-menu class="ds-dropdown" #menu="matMenu" xPosition="before">
                <button class="ds-menu__item" mat-menu-item (click)="action()">Edit</button>
                <button class="ds-menu__item" mat-menu-item (click)="action()">Print</button>
                <button class="ds-menu__item" mat-menu-item (click)="action()">Cancel</button>
            </mat-menu>
        </td>
    </ng-container>

    <tr class="ds-table__head" mat-header-row *matHeaderRowDef="displayedColumnsExpandable"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumnsExpandable;" class="ds-table__row"></tr>
    <tr mat-row *matRowDef="let row; columns: ['expandedDetail']" class="ds-table__row --expandable">
</table>
        `,
        tsCode: `
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';

constructor(
    private _liveAnnouncer: LiveAnnouncer
) { }

ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.sort.disableClear = true;
}

@ViewChild(MatSort) sort: MatSort;

dataSource = new MatTableDataSource(ELEMENT_DATA);

displayedColumns: string[] = ['buttonExpand', 'name', 'test', 'labRefId', 'orderedBy', 'status', 'actions'];

expandedElement: Expandable | undefined;

announceSortChange(sortState: Sort) {
    if (sortState.direction) {
        this._liveAnnouncer.announce('Sorted {sortState.direction}ending');
    } else {
        this._liveAnnouncer.announce('Sorting cleared');
    }
}

export interface Patient {
    name: string;
    test: string;
    labRefId: string;
    orderedBy: string;
    status: string;
}

const ELEMENT_DATA: Patient[] = [
    {
        name: 'Blake, Edward', 
        test: 'Antibody Screen, RBC with Reflex to Identification, Titer, and Antigen Typing',
        labRefId: '1234',
        orderedBy: 'Osterman, Jon',
        status: 'Input needed'
    },
    {
        name: 'Jupiter, Sally',
        test: 'CBC (includes Differential and Platelets) with Automated Differential',
        labRefId: '5678',
        orderedBy: 'Osterman, Jon',
        status: 'Received at Quest'
    },
    {
        name: 'Kovachs, Walter',
        test: 'Lipid Panel',
        labRefId: '9012',
        orderedBy: 'Osterman, Jon',
        status: 'Resulted'
    }
];
        `,
        cssCode: `
.ds-table__head-th:nth-child(1),
.ds-table__row-td:nth-child(1) {
    width: 56px;
}

.ds-table__head-th:nth-child(2),
.ds-table__row-td:nth-child(2) {
    width: 200px;
}

.ds-table__head-th:nth-child(3),
.ds-table__row-td:nth-child(3) {
    width: auto;
}

.ds-table__head-th:nth-child(4),
.ds-table__row-td:nth-child(4) {
    width: 110px;
}

.ds-table__head-th:nth-child(5),
.ds-table__row-td:nth-child(5) {
    width: 160px;
}

.ds-table__head-th:nth-child(6),
.ds-table__row-td:nth-child(6) {
    width: 140px;
}

.ds-table__head-th:nth-child(7),
.ds-table__row-td:nth-child(7) {
    width: 56px;
}
`
    }
];

const storyPropTypes = [
    'customClasses: PropTypes.string,',
    'isExpandable: PropTypes.bool,',
    'isFlat: PropTypes.bool,',
    'isSortable: PropTypes.bool,',
    'tableHeadData: PropTypes.array.isRequired,',
    'tableCellData: PropTypes.array.isRequired,',
    'isTransparent: PropTypes.bool,',
    "sortOrder: PropTypes.oneOf(['asc', 'desc']),",
    'sortProperty: PropTypes.string'
];
