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
        id: 'action',
        label: '',
        noSort: true
    }
];

export const tableCellDataTwo = [
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
