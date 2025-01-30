import React from 'react';
import { SideSheet } from './SideSheet';
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
    title: 'Components/Side Sheet/Code',
    component: SideSheet,
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

const Template = args => <SideSheet {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Side sheet content.',
    title: 'Title'
};

const storyData = [
    {
        title: 'Side sheet',
        template: Primary,
        reactCode: `
import React, { useState } from 'react';
import SideSheet from '@ds-react/pro/SideSheet';

const [sidesheetOpen, setSidesheetOpen] = useState(false);

<SideSheet
    opened={sidesheetOpen}
    onClose={() => { setSidesheetOpen(false); }}
    title="Title"
>
    Side sheet content.
</SideSheet>
        `,
        angularCode: `
<div class="ds-sidesheet" [ngClass]="{'--opened' : showSideSheet}" (scroll)="onSidesheetScroll($event)">
    <div class="ds-sidesheet__header">
        <span>Title</span>

        <button class="ds-button --icon" (click)="showSideSheet = !showSideSheet">
            <span class="ds-icon--close" aria-label="close"></span>
        </button>
    </div>

    <div class="ds-sidesheet__content">
        Side sheet content.
    </div>
</div>

<div class="ds-overlay" [ngClass]="{'--opened' : showSideSheet}" (click)="showSideSheet = !showSideSheet"></div>
        `,
        tsCode: `
import { Component, Input } from '@angular/core';

@Input() showSideSheet: boolean|undefined;

onSidesheetScroll(event: Event) {
    const elem = event.currentTarget as HTMLElement;

    if (!elem) {
        return;
    }

    const dsSidesheet = document.querySelector(".ds-sidesheet");
    const dsSidesheetHeader = document.querySelector(".ds-sidesheet__header");

    dsSidesheet.addEventListener("scroll", function () {
        const sidesheetScrollTop = elem.scrollTop;

        if (sidesheetScrollTop > 0) {
            dsSidesheetHeader?.classList.add("--scrolled");
        } else {
            dsSidesheetHeader?.classList.remove("--scrolled");
        }
    });
}
        `,
        htmlCode: `
<div class="ds-sidesheet --opened">
    <div class="ds-sidesheet__header">
        <span>Title</span>

        <button class="ds-button --icon">
        <span class="ds-icon--close" aria-label="close"></span>
        </button>
    </div>

    <div class="ds-sidesheet__content">
        Side sheet content.
    </div>
</div>
`
    }
];

const storyPropTypes = [
    'children: PropTypes.node,',
    'customClasses: PropTypes.string,',
    'opened: PropTypes.bool.isRequired,',
    'onClose: PropTypes.func.isRequired,',
    'title: PropTypes.string,'
];
