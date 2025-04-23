export const tableHeadDataOne = [
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

export const tableCellDataOne = [
    {
        id: { value: 0 },
        name: { value: 'Blake, Edward' },
        test: {
            value: 'Antibody Screen, RBC with Reflex to Identification, Titer, and Antigen Typing'
        },
        labRefId: { value: '1234' },
        orderedBy: { value: 'Osterman, Jon' },
        status: { value: 'Input needed' }
    },
    {
        id: { value: 1 },
        name: { value: 'Jupiter, Sally' },
        test: {
            value: 'CBC (includes Differential and Platelets) with Automated Differential'
        },
        labRefId: { value: '5678' },
        orderedBy: { value: 'Osterman, Jon' },
        status: { value: 'Received at Quest' }
    },
    {
        id: { value: 2 },
        name: { value: 'Kovachs, Walter' },
        test: { value: 'Lipid Panel' },
        labRefId: { value: '9012' },
        orderedBy: { value: 'Osterman, Jon' },
        status: { value: 'Resulted' }
    }
];

export const tableHeadDataTwo = [
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
        label: 'Status',
        defaultSort: true,
        defaultSortOrder: 'asc'
    },
    {
        id: 'actions',
        label: '',
        noSort: true
    }
];

export const tableCellDataTwo = [
    {
        id: { value: 0 },
        toggle: { value: true },
        name: { value: 'Blake, Edward', truncate: true },
        test: {
            value: 'Antibody Screen, RBC with Reflex to Identification, Titer, and Antigen Typing',
            truncate: true
        },
        labRefId: { value: '1234' },
        orderedBy: { value: 'Osterman, Jon', truncate: true },
        status: { value: 'Input needed' },
        actions: {
            menuItems: [
                {
                    title: 'Edit',
                    icon: 'edit',
                    action: () => {
                        console.log('Edit');
                    }
                },
                {
                    title: 'Print',
                    icon: 'print',
                    action: () => {
                        console.log('Print');
                    }
                },
                {
                    title: 'Delete',
                    icon: 'trash',
                    action: () => {
                        console.log('Delete');
                    }
                }
            ]
        },
        expandedContent: { value: `Content goes here.` }
    },
    {
        id: { value: 1 },
        toggle: { value: true },
        name: { value: 'Jupiter, Sally', truncate: true },
        test: {
            value: 'CBC (includes Differential and Platelets) with Automated Differential',
            truncate: true
        },
        labRefId: { value: '5678' },
        orderedBy: { value: 'Osterman, Jon', truncate: true },
        status: { value: 'Received at Quest' },
        actions: {
            menuItems: [
                {
                    title: 'Edit',
                    icon: 'edit',
                    action: () => {
                        console.log('Edit');
                    }
                },
                {
                    title: 'Print',
                    icon: 'print',
                    action: () => {
                        console.log('Print');
                    }
                },
                {
                    title: 'Delete',
                    icon: 'trash',
                    action: () => {
                        console.log('Delete');
                    }
                }
            ]
        },
        expandedContent: { value: `Content goes here.` }
    },
    {
        id: { value: 2 },
        toggle: { value: true },
        name: { value: 'Kovachs, Walter', truncate: true },
        test: { value: 'Lipid Panel', truncate: true },
        labRefId: { value: '9012' },
        orderedBy: { value: 'Osterman, Jon', truncate: true },
        status: { value: 'Resulted' },
        actions: {
            menuItems: [
                {
                    title: 'Edit',
                    icon: 'edit',
                    action: () => {
                        console.log('Edit');
                    }
                },
                {
                    title: 'Print',
                    icon: 'print',
                    action: () => {
                        console.log('Print');
                    }
                },
                {
                    title: 'Delete',
                    icon: 'trash',
                    action: () => {
                        console.log('Delete');
                    }
                }
            ]
        },
        expandedContent: { value: `Content goes here.` }
    }
];
