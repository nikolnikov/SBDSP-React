import React from 'react';
import { Tabs } from './Tabs';
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
    title: 'Components/Tabs/Code',
    component: Tabs,
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

const Template = args => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    contentClasses: 'ds-pt-32',
    labels: [
        {
            isDisabled: false,
            name: 'Tab one'
        },
        {
            isDisabled: false,
            name: 'Tab two'
        }
    ],
    defaultSelectedTab: 0,
    children: [
        <React.Fragment key="0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat
            blandit aliquam etiam erat. Eu feugiat pretium nibh ipsum consequat
            nisl vel pretium. Nulla pharetra diam sit amet nisl suscipit
            adipiscing. Vivamus at augue eget arcu. Sit amet massa vitae tortor
            condimentum. Dolor magna eget est lorem ipsum dolor sit amet
            consectetur. Et odio pellentesque diam volutpat commodo sed egestas
            egestas. Nam at lectus urna duis convallis. Sagittis orci a
            scelerisque purus semper eget. Aenean sed adipiscing diam donec
            adipiscing. Elementum nibh tellus molestie nunc. Tempor orci eu
            lobortis elementum nibh tellus molestie nunc non. Nunc sed augue
            lacus viverra vitae congue.
        </React.Fragment>,

        <React.Fragment key="1">
            Ut pharetra sit amet aliquam id diam maecenas ultricies. Dui ut
            ornare lectus sit amet. Potenti nullam ac tortor vitae purus.
            Sagittis vitae et leo duis ut diam quam nulla. Quis lectus nulla at
            volutpat diam. Magna eget est lorem ipsum dolor sit amet consectetur
            adipiscing. Sit amet porttitor eget dolor morbi. At tempor commodo
            ullamcorper a. Pellentesque elit eget gravida cum sociis natoque. At
            urna condimentum mattis pellentesque id nibh tortor id. Amet mauris
            commodo quis imperdiet massa tincidunt. Magna fermentum iaculis eu
            non diam phasellus vestibulum lorem. Nibh nisl condimentum id
            venenatis a condimentum vitae. Venenatis urna cursus eget nunc
            scelerisque viverra mauris in aliquam. Pharetra vel turpis nunc eget
            lorem dolor. Pharetra magna ac placerat vestibulum lectus.
        </React.Fragment>
    ]
};

const storyData = [
    {
        title: 'Tabs',
        template: Primary,
        reactCode: `
import Tabs from '@ds-react/pro/Tabs';

<Tabs
    contentClasses="ds-pt-32"
    labels={[
        {
            isDisabled: false,
            name: 'Tab one'
        },
        {
            isDisabled: false,
            name: 'Tab two'
        }
    ]}
    defaultSelectedTab={0}
>
    {[
        <React.Fragment key="0">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Volutpat blandit aliquam etiam
            erat. Eu feugiat pretium nibh ipsum consequat nisl
            vel pretium. Nulla pharetra diam sit amet nisl
            suscipit adipiscing. Vivamus at augue eget arcu. Sit
            amet massa vitae tortor condimentum. Dolor magna
            eget est lorem ipsum dolor sit amet consectetur. Et
            odio pellentesque diam volutpat commodo sed egestas
            egestas. Nam at lectus urna duis convallis. Sagittis
            orci a scelerisque purus semper eget. Aenean sed
            adipiscing diam donec adipiscing. Elementum nibh
            tellus molestie nunc. Tempor orci eu lobortis
            elementum nibh tellus molestie nunc non. Nunc sed
            augue lacus viverra vitae congue.
        </React.Fragment>,

        <React.Fragment key="1">
            Ut pharetra sit amet aliquam id diam maecenas
            ultricies. Dui ut ornare lectus sit amet. Potenti
            nullam ac tortor vitae purus. Sagittis vitae et leo
            duis ut diam quam nulla. Quis lectus nulla at
            volutpat diam. Magna eget est lorem ipsum dolor sit
            amet consectetur adipiscing. Sit amet porttitor eget
            dolor morbi. At tempor commodo ullamcorper a.
            Pellentesque elit eget gravida cum sociis natoque.
            At urna condimentum mattis pellentesque id nibh
            tortor id. Amet mauris commodo quis imperdiet massa
            tincidunt. Magna fermentum iaculis eu non diam
            phasellus vestibulum lorem. Nibh nisl condimentum id
            venenatis a condimentum vitae. Venenatis urna cursus
            eget nunc scelerisque viverra mauris in aliquam.
            Pharetra vel turpis nunc eget lorem dolor. Pharetra
            magna ac placerat vestibulum lectus.
        </React.Fragment>
    ]}
</Tabs>
        `,
        angularCode: `
<div class="ds-tab__wrapper">
    <div class="ds-tab-set ds-col--12">
        <button
            class="ds-tab"
            aria-label="tab one"
            [ngClass]="{'--selected': selectedTab === 'tabOne'}"
            (click)="selectTab('tabOne')"
        >
            <span>Tab one</span>
        </button>

        <button
            class="ds-tab"
            aria-label="tab two"
            [ngClass]="{'--selected': selectedTab === 'tabTwo'}"
            (click)="selectTab('tabTwo')"
        >
            <span>Tab two</span>
        </button>
    </div>

    <div class="ds-pt-32" role="tabpanel">
        <ng-container *ngIf="selectedTab === 'tabOne'">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Volutpat blandit aliquam etiam
            erat. Eu feugiat pretium nibh ipsum consequat nisl
            vel pretium. Nulla pharetra diam sit amet nisl
            suscipit adipiscing. Vivamus at augue eget arcu. Sit
            amet massa vitae tortor condimentum. Dolor magna
            eget est lorem ipsum dolor sit amet consectetur. Et
            odio pellentesque diam volutpat commodo sed egestas
            egestas. Nam at lectus urna duis convallis. Sagittis
            orci a scelerisque purus semper eget. Aenean sed
            adipiscing diam donec adipiscing. Elementum nibh
            tellus molestie nunc. Tempor orci eu lobortis
            elementum nibh tellus molestie nunc non. Nunc sed
            augue lacus viverra vitae congue.
        </ng-container>
        <ng-container *ngIf="selectedTab === 'tabTwo'">
            Ut pharetra sit amet aliquam id diam maecenas
            ultricies. Dui ut ornare lectus sit amet. Potenti
            nullam ac tortor vitae purus. Sagittis vitae et leo
            duis ut diam quam nulla. Quis lectus nulla at
            volutpat diam. Magna eget est lorem ipsum dolor sit
            amet consectetur adipiscing. Sit amet porttitor eget
            dolor morbi. At tempor commodo ullamcorper a.
            Pellentesque elit eget gravida cum sociis natoque.
            At urna condimentum mattis pellentesque id nibh
            tortor id. Amet mauris commodo quis imperdiet massa
            tincidunt. Magna fermentum iaculis eu non diam
            phasellus vestibulum lorem. Nibh nisl condimentum id
            venenatis a condimentum vitae. Venenatis urna cursus
            eget nunc scelerisque viverra mauris in aliquam.
            Pharetra vel turpis nunc eget lorem dolor. Pharetra
            magna ac placerat vestibulum lectus.
        </ng-container>
    </div>
</div>
        `,
        tsCode: `
selectedTab: string = 'tabOne';

selectTab(tab: string) {
    this.selectedTab = tab;
}
        `,
        htmlCode: `
<div class="ds-tab__wrapper">
    <div class="ds-tab-set ds-col--12">
        <button class="ds-tab --selected" aria-label="tab one">
            <span>Tab one</span>
        </button>
        
        <button class="ds-tab" aria-label="tab two">
            <span>Tab two</span>
        </button>
    </div>
</div>
`
    }
];

const storyPropTypes = [
    'children: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.node])).isRequired,',
    'contentClasses: PropTypes.string,',
    'isDisabled: PropTypes.bool,',
    'labels: PropTypes.arrayOf(PropTypes.shape({isDisabled: PropTypes.bool, name: PropTypes.string.isRequired})).isRequired,',
    'defaultSelectedTab: PropTypes.number'
];
