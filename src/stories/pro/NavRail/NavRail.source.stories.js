import React from 'react';
import { NavRail } from './NavRail';
import { StoriesTemplate } from '../../Stories.template';
import { navItems } from '../data';

export const StoryDocs = () => {
    return (
        <StoriesTemplate
            isNavrail
            storyData={storyData}
            storyPropTypes={storyPropTypes}
        />
    );
};

export default {
    title: 'Professional/Navigation: Rail/Code',
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
            page: StoryDocs
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

export const PrimaryNoHeader = Template.bind({});
PrimaryNoHeader.args = {
    navItems: navItems,
    noHeader: true
};

const storyData = [
    {
        title: 'NavRail',
        template: Primary,
        reactCode: `
import NavRail from '@ds-react/pro/NavRail';

export const navItems = [
    {
        label: 'Home',
        iconClass: 'ds-icon--house',
        hasNotification: false,
        notificationCount: '',
        route: ''
    },
    {
        label: 'Tests',
        iconClass: 'ds-icon--test-tube-label',
        hasNotification: true,
        notificationCount: '#',
        route: '',
        subItems: [
            {
                label: 'Tests sub menu label',
                route: '',
                expandedSubItems: [
                    {
                        label: 'Sub menu label'
                    },
                    {
                        label: 'Sub menu label'
                    }
                ]
            },
            {
                label: 'Tests sub menu label',
                route: ''
            }
        ]
    },
    {
        label: 'Results',
        iconClass: 'ds-icon--notepad',
        hasNotification: true,
        notificationCount: '',
        route: '',
        subItems: [
            {
                label: 'Results sub menu label',
                route: '',
                expandedSubItems: [
                    {
                        label: 'Sub menu label'
                    },
                    {
                        label: 'Sub menu label'
                    }
                ]
            },
            {
                label: 'Results sub menu label',
                route: ''
            }
        ]
    }
];

<NavRail navItems={navItems} />
        `,
        angularCode: `
<div class="ds-navrail">
  <div class="ds-navrail__rail">
        <ng-container *ngFor="let item of navItems; index as i">
            <button class="ds-navrail__item" [class]="item.active" (click)="selectNavItem(i);" [value]="item.label" aria-label="item.label">
                <div class="ds-badge" [class.--dot]="!item.badgeValue" *ngIf="item.badge">{{ item.badgeValue }}</div>
                <span [class]="item.icon" [attr.aria-label]="item.label"></span>
                {{ item.label }}
            </button>
        </ng-container>
  </div>

  <div class="ds-navrail__drawer" [class.--opened]="showDrawer !== -1">
        <ng-container *ngFor="let item of drawerContents; index as i">
            <button class="ds-navrail__sub-item" *ngIf="!item.expandable" aria-label="item.label">
                {{ item.label }}
            </button>

            <ng-container *ngIf="item.expandable">
                <button class="ds-navrail__sub-item --expandable" [class.--opened]="showExpandedNav === item" (click)="expandSubNav(item)" aria-label="item.label">
                    {{ item.label }}
                </button>

                <div class="ds-navrail__sub-drawer" [class.--opened]="showExpandedNav === item">
                    <ng-container *ngFor="let subitem of item.expandedSubNav; index as i">
                        <button class="ds-navrail__sub-item" aria-label="subitem.label">
                        {{ subitem.label }}
                        </button>
                    </ng-container>
                </div>
            </ng-container>
        </ng-container>
  </div>

  <div class="ds-navrail__overlay" [class.--opened]="showDrawer !== -1" (click)="closeDrawer()"></div>
</div>
        `,
        tsCode: `
showDrawer = -1;
drawerContents: any[] = [];
showExpandedNav = false;

navItems = [
    {
        label: 'Tests',
        icon: 'ds-icon--test-tube-label',
        badge: false,
        badgeValue: '',
        subNav: [
            {
                label: 'Tests sub menu label',
                expandable: false,
                active: '',
            },
            {
                label: 'Tests sub menu label',
                expandable: true,
                active: '',
                expandedSubNav: [
                    {
                        label: 'Sub menu label',
                    },
                    {
                        label: 'Sub menu label',
                    },
                ],
            }
        ],
    },
];

closeDrawer() {
    this.showDrawer = -1;
    this.drawerContents = [];
    this.showExpandedNav = false;
    this.navItems = this.navItems.map((item) => {
        item.active = "";
        return item;
    });
}

selectNavItem(index: number) {
    if (this.showDrawer === index) {
        this.closeDrawer();
    } else {
        this.showDrawer = index;
        this.drawerContents = this.navItems[index]?.subNav ?? [];
        this.navItems = this.navItems.map((item, itemIndex) => {
            index === itemIndex ? (item.active = "--opened") : (item.active = "");
            return item;
        });
    }
}

expandSubNav(item: any) {
    if (this.showExpandedNav === item) {
        this.showExpandedNav = false;
    } else {
        this.showExpandedNav = item;
    }
}
        `,
        htmlCode: `
<div class="ds-navrail">
    <div class="ds-navrail__rail">
        <button class="ds-navrail__item" nav-item="1" aria-label="">
            <div class="ds-badge --dot"></div>
            <span class="ds-icon--test-tube-label" aria-label="tests"></span>
            Tests
        </button>
    </div>

    <div class="ds-navrail__drawer">
        <div menu-group="1">
            <button class="ds-navrail__sub-item" aria-label="">
                Tests sub menu label
            </button>

            <button class="ds-navrail__sub-item  --expandable" aria-label="">
                Tests sub menu label
            </button>

            <div class="ds-navrail__sub-drawer">
                <button class="ds-navrail__sub-item" aria-label="">
                    Sub menu label
                </button>
            </div>
        </div>
    </div>

    <div class="ds-navrail__overlay"></div>
</div>
`
    },
    {
        title: 'NavRail no header',
        template: PrimaryNoHeader,
        reactCode: `
import NavRail from '@ds-react/pro/NavRail';

export const navItems = [
    {
        label: 'Home',
        iconClass: 'ds-icon--house',
        hasNotification: false,
        notificationCount: '',
        route: ''
    },
    {
        label: 'Tests',
        iconClass: 'ds-icon--test-tube-label',
        hasNotification: true,
        notificationCount: '#',
        route: '',
        subItems: [
            {
                label: 'Tests sub menu label',
                route: '',
                expandedSubItems: [
                    {
                        label: 'Sub menu label'
                    },
                    {
                        label: 'Sub menu label'
                    }
                ]
            },
            {
                label: 'Tests sub menu label',
                route: ''
            }
        ]
    },
    {
        label: 'Results',
        iconClass: 'ds-icon--notepad',
        hasNotification: true,
        notificationCount: '',
        route: '',
        subItems: [
            {
                label: 'Results sub menu label',
                route: '',
                expandedSubItems: [
                    {
                        label: 'Sub menu label'
                    },
                    {
                        label: 'Sub menu label'
                    }
                ]
            },
            {
                label: 'Results sub menu label',
                route: ''
            }
        ]
    }
];

<NavRail navItems={navItems} noHeader />
        `,
        angularCode: `
<div class="ds-navrail --no-header">
  <div class="ds-navrail__rail">
        <ng-container *ngFor="let item of navItems; index as i">
            <button class="ds-navrail__item" [class]="item.active" (click)="selectNavItem(i);" [value]="item.label" aria-label="item.label">
                <div class="ds-badge" [class.--dot]="!item.badgeValue" *ngIf="item.badge">{{ item.badgeValue }}</div>
                <span [class]="item.icon" [attr.aria-label]="item.label"></span>
                {{ item.label }}
            </button>
        </ng-container>
  </div>

  <div class="ds-navrail__drawer" [class.--opened]="showDrawer !== -1">
        <ng-container *ngFor="let item of drawerContents; index as i">
            <button class="ds-navrail__sub-item" *ngIf="!item.expandable" aria-label="item.label">
                {{ item.label }}
            </button>

            <ng-container *ngIf="item.expandable">
                <button class="ds-navrail__sub-item --expandable" [class.--opened]="showExpandedNav === item" (click)="expandSubNav(item)" aria-label="item.label">
                    {{ item.label }}
                </button>

                <div class="ds-navrail__sub-drawer" [class.--opened]="showExpandedNav === item">
                    <ng-container *ngFor="let subitem of item.expandedSubNav; index as i">
                        <button class="ds-navrail__sub-item" aria-label="subitem.label">
                        {{ subitem.label }}
                        </button>
                    </ng-container>
                </div>
            </ng-container>
        </ng-container>
  </div>

  <div class="ds-navrail__overlay" [class.--opened]="showDrawer !== -1" (click)="closeDrawer()"></div>
</div>
        `,
        tsCode: `
showDrawer = -1;
drawerContents: any[] = [];
showExpandedNav = false;

navItems = [
    {
        label: 'Tests',
        icon: 'ds-icon--test-tube-label',
        badge: false,
        badgeValue: '',
        subNav: [
            {
                label: 'Tests sub menu label',
                expandable: false,
                active: '',
            },
            {
                label: 'Tests sub menu label',
                expandable: true,
                active: '',
                expandedSubNav: [
                    {
                        label: 'Sub menu label',
                    },
                    {
                        label: 'Sub menu label',
                    },
                ],
            }
        ],
    },
];

closeDrawer() {
    this.showDrawer = -1;
    this.drawerContents = [];
    this.showExpandedNav = false;
    this.navItems = this.navItems.map((item) => {
        item.active = "";
        return item;
    });
}

selectNavItem(index: number) {
    if (this.showDrawer === index) {
        this.closeDrawer();
    } else {
        this.showDrawer = index;
        this.drawerContents = this.navItems[index]?.subNav ?? [];
        this.navItems = this.navItems.map((item, itemIndex) => {
            index === itemIndex ? (item.active = "--opened") : (item.active = "");
            return item;
        });
    }
}

expandSubNav(item: any) {
    if (this.showExpandedNav === item) {
        this.showExpandedNav = false;
    } else {
        this.showExpandedNav = item;
    }
}
        `,
        htmlCode: `
<div class="ds-navrail --no-header">
    <div class="ds-navrail__rail">
        <button class="ds-navrail__item" nav-item="1" aria-label="">
            <div class="ds-badge --dot"></div>
            <span class="ds-icon--test-tube-label" aria-label="tests"></span>
            Tests
        </button>
    </div>

    <div class="ds-navrail__drawer">
        <div menu-group="1">
            <button class="ds-navrail__sub-item" aria-label="">
                Tests sub menu label
            </button>

            <button class="ds-navrail__sub-item  --expandable" aria-label="">
                Tests sub menu label
            </button>

            <div class="ds-navrail__sub-drawer">
                <button class="ds-navrail__sub-item" aria-label="">
                    Sub menu label
                </button>
            </div>
        </div>
    </div>

    <div class="ds-navrail__overlay"></div>
</div>
`
    }
];

const storyPropTypes = [
    'navItems: PropTypes.array.isRequired,',
    'noHeader: PropTypes.bool'
];
