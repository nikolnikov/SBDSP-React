import React from 'react';
import { Toast } from './Toast';
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
    title: 'Components/Toast Notification/Code',
    component: Toast,
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

const Template = args => <Toast {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    duration: 3000,
    message: 'New results are available.'
};

export const PrimaryInfo = Template.bind({});
PrimaryInfo.args = {
    duration: 3000,
    message: 'New results are available.',
    status: 'informative'
};

export const PrimarySuccess = Template.bind({});
PrimarySuccess.args = {
    duration: 3000,
    message: 'New results are available.',
    status: 'success'
};

export const PrimaryError = Template.bind({});
PrimaryError.args = {
    duration: 3000,
    message: 'New results are available.',
    status: 'error'
};

export const PrimaryAlert = Template.bind({});
PrimaryAlert.args = {
    duration: 3000,
    message: 'New results are available.',
    status: 'alert'
};

export const PrimaryClose = Template.bind({});
PrimaryClose.args = {
    message: 'New results are available.'
};

export const PrimaryInfoClose = Template.bind({});
PrimaryInfoClose.args = {
    message: 'New results are available.',
    status: 'informative'
};

export const PrimarySuccessClose = Template.bind({});
PrimarySuccessClose.args = {
    message: 'New results are available.',
    status: 'success'
};

export const PrimaryErrorClose = Template.bind({});
PrimaryErrorClose.args = {
    message: 'New results are available.',
    status: 'error'
};

export const PrimaryAlertClose = Template.bind({});
PrimaryAlertClose.args = {
    message: 'New results are available.',
    status: 'alert'
};

export const PrimaryLink = Template.bind({});
PrimaryLink.args = {
    message: 'New results are available.',
    textLinkLabel: 'Undo'
};

export const PrimaryInfoLink = Template.bind({});
PrimaryInfoLink.args = {
    message: 'New results are available.',
    status: 'informative',
    textLinkLabel: 'Undo'
};

export const PrimarySuccessLink = Template.bind({});
PrimarySuccessLink.args = {
    message: 'New results are available.',
    status: 'success',
    textLinkLabel: 'Undo'
};

export const PrimaryErrorLink = Template.bind({});
PrimaryErrorLink.args = {
    message: 'New results are available.',
    status: 'error',
    textLinkLabel: 'Undo'
};

export const PrimaryAlertLink = Template.bind({});
PrimaryAlertLink.args = {
    message: 'New results are available.',
    status: 'alert',
    textLinkLabel: 'Undo'
};

const storyData = [
    {
        title: 'Toast notification',
        template: Primary,
        reactCode: `
import React, { useState } from 'react';
import Toast from '@ds-react/pro/Toast';

const [toastOpen, setToastOpen] = useState(false);

<Toast
    duration={3000}
    message="New results are available."
    onClose={() => {setToastOpen(false);}}
    opened={toastOpen}
/>
        `,
        angularCode: `
<button class="ds-button --primary" (click)="showToast()">
    Open toast
</button>
        `,
        tsCode: `
import { MatSnackBar } from '@angular/material/snack-bar';

constructor(private toast: MatSnackBar) {}

showToast() {
    this.toast.open('New results are available.', '', {
        duration: 3000,
        panelClass: 'ds-toast',
        verticalPosition: 'top',
    });
}
        `,
        htmlCode: `
<div class="ds-toast">
    <div class="ds-toast__content">
        <div class="ds-toast__message">
            New results are available.
        </div>
    </div>
</div>
`
    },
    {
        title: 'Toast notification informative',
        template: PrimaryInfo,
        reactCode: `
import React, { useState } from 'react';
import Toast from '@ds-react/pro/Toast';

const [toastOpen, setToastOpen] = useState(false);

<Toast
    duration={3000}
    message="New results are available."
    onClose={() => {setToastOpen(false);}}
    opened={toastOpen}
    status="informative"
/>
        `,
        angularCode: `
<button class="ds-button --primary" (click)="showToast()">
    Open toast
</button>
        `,
        tsCode: `
import { MatSnackBar } from '@angular/material/snack-bar';

constructor(private toast: MatSnackBar) {}

showToast() {
    this.toast.open('New results are available.', '', {
        duration: 3000,
        panelClass: ['ds-toast', '--informative'],
        verticalPosition: 'top',
    });
}
        `,
        htmlCode: `
<div class="ds-toast --informative">
    <div class="ds-toast__content">
        <div class="ds-toast__message">
            New results are available.
        </div>
    </div>
</div>
`
    },
    {
        title: 'Toast notification success',
        template: PrimarySuccess,
        reactCode: `
import React, { useState } from 'react';
import Toast from '@ds-react/pro/Toast';

const [toastOpen, setToastOpen] = useState(false);

<Toast
    duration={3000}
    message="New results are available."
    onClose={() => {setToastOpen(false);}}
    opened={toastOpen}
    status="success"
/>
        `,
        angularCode: `
<button class="ds-button --primary" (click)="showToast()">
    Open toast
</button>
        `,
        tsCode: `
import { MatSnackBar } from '@angular/material/snack-bar';

constructor(private toast: MatSnackBar) {}

showToast() {
    this.toast.open('New results are available.', '', {
        duration: 3000,
        panelClass: ['ds-toast', '--success'],
        verticalPosition: 'top',
    });
}
        `,
        htmlCode: `
<div class="ds-toast --success">
    <div class="ds-toast__content">
        <div class="ds-toast__message">
            New results are available.
        </div>
    </div>
</div>
`
    },
    {
        title: 'Toast notification error',
        template: PrimaryError,
        reactCode: `
import React, { useState } from 'react';
import Toast from '@ds-react/pro/Toast';

const [toastOpen, setToastOpen] = useState(false);

<Toast
    duration={3000}
    message="New results are available."
    onClose={() => {setToastOpen(false);}}
    opened={toastOpen}
    status="error"
/>
        `,
        angularCode: `
<button class="ds-button --primary" (click)="showToast()">
    Open toast
</button>
        `,
        tsCode: `
import { MatSnackBar } from '@angular/material/snack-bar';

constructor(private toast: MatSnackBar) {}

showToast() {
    this.toast.open('New results are available.', '', {
        duration: 3000,
        panelClass: ['ds-toast', '--error'],
        verticalPosition: 'top',
    });
}
        `,
        htmlCode: `
<div class="ds-toast --error">
    <div class="ds-toast__content">
        <div class="ds-toast__message">
            New results are available.
        </div>
    </div>
</div>
`
    },
    {
        title: 'Toast notification alert',
        template: PrimaryAlert,
        reactCode: `
import React, { useState } from 'react';
import Toast from '@ds-react/pro/Toast';

const [toastOpen, setToastOpen] = useState(false);

<Toast
    duration={3000}
    message="New results are available."
    onClose={() => {setToastOpen(false);}}
    opened={toastOpen}
    status="alert"
/>
        `,
        angularCode: `
<button class="ds-button --primary" (click)="showToast()">
    Open toast
</button>
        `,
        tsCode: `
import { MatSnackBar } from '@angular/material/snack-bar';

constructor(private toast: MatSnackBar) {}

showToast() {
    this.toast.open('New results are available.', '', {
        duration: 3000,
        panelClass: ['ds-toast', '--alert'],
        verticalPosition: 'top',
    });
}
        `,
        htmlCode: `
<div class="ds-toast --alert">
    <div class="ds-toast__content">
        <div class="ds-toast__message">
            New results are available.
        </div>
    </div>
</div>
`
    },
    {
        title: 'Toast notification with close button',
        template: PrimaryClose,
        reactCode: `
import React, { useState } from 'react';
import Toast from '@ds-react/pro/Toast';

const [toastOpen, setToastOpen] = useState(false);

<Toast
    message="New results are available."
    onClose={() => {setToastOpen(false);}}
    opened={toastOpen}
/>
        `,
        angularCode: `
<button class="ds-button --primary" (click)="showToast()">
    Open toast
</button>
        `,
        tsCode: `
import { MatSnackBar } from '@angular/material/snack-bar';

constructor(private toast: MatSnackBar) {}

closeText = ''; // Add text to replace X button with text
closeButton = this.closeText.trim() === '' ? ' ' : this.closeText;

showToast() {
    const panelClasses = 'ds-toast';

    if (this.closeText.trim() !== '') {
        panelClasses.push('--text-close');
    }

    this.toast.open(
        'New results are available.',
        this.closeButton,
        {
            panelClass: panelClasses,
            verticalPosition: 'top'
        }
    );
}
        `,
        htmlCode: `
<div class="ds-toast">
    <div class="ds-toast__content">
        <div class="ds-toast__message">
            New results are available.
        </div>
        <button class="ds-button --icon --md">
            <span class="ds-icon--close" aria-label="close"></span>
        </button>
    </div>
</div>
`
    },
    {
        title: 'Toast notification informative with close button',
        template: PrimaryInfoClose,
        reactCode: `
import React, { useState } from 'react';
import Toast from '@ds-react/pro/Toast';

const [toastOpen, setToastOpen] = useState(false);

<Toast
    message="New results are available."
    onClose={() => {setToastOpen(false);}}
    opened={toastOpen}
    status="informative"
/>
        `,
        angularCode: `
<button class="ds-button --primary" (click)="showToast()">
    Open toast
</button>
        `,
        tsCode: `
import { MatSnackBar } from '@angular/material/snack-bar';

constructor(private toast: MatSnackBar) {}

closeText = ''; // Add text to replace X button with text
closeButton = this.closeText.trim() === '' ? ' ' : this.closeText;

showToast() {
    const panelClasses = ['ds-toast', '--informative'];

    if (this.closeText.trim() !== '') {
        panelClasses.push('--text-close');
    }

    this.toast.open(
        'New results are available.',
        this.closeButton,
        {
            panelClass: panelClasses,
            verticalPosition: 'top'
        }
    );
}
        `,
        htmlCode: `
<div class="ds-toast --informative">
    <div class="ds-toast__content">
        <div class="ds-toast__message">
            New results are available.
        </div>
        <button class="ds-button --icon --md">
            <span class="ds-icon--close" aria-label="close"></span>
        </button>
    </div>
</div>
`
    },
    {
        title: 'Toast notification success with close button',
        template: PrimarySuccessClose,
        reactCode: `
import React, { useState } from 'react';
import Toast from '@ds-react/pro/Toast';

const [toastOpen, setToastOpen] = useState(false);

<Toast
    message="New results are available."
    onClose={() => {setToastOpen(false);}}
    opened={toastOpen}
    status="success"
/>
        `,
        angularCode: `
<button class="ds-button --primary" (click)="showToast()">
    Open toast
</button>
        `,
        tsCode: `
import { MatSnackBar } from '@angular/material/snack-bar';

constructor(private toast: MatSnackBar) {}

closeText = ''; // Add text to replace X button with text
closeButton = this.closeText.trim() === '' ? ' ' : this.closeText;

showToast() {
    const panelClasses = ['ds-toast', '--success'];

    if (this.closeText.trim() !== '') {
        panelClasses.push('--text-close');
    }

    this.toast.open(
        'New results are available.',
        this.closeButton,
        {
            panelClass: panelClasses,
            verticalPosition: 'top'
        }
    );
}
        `,
        htmlCode: `
<div class="ds-toast --success">
    <div class="ds-toast__content">
        <div class="ds-toast__message">
            New results are available.
        </div>
        <button class="ds-button --icon --md">
            <span class="ds-icon--close" aria-label="close"></span>
        </button>
    </div>
</div>
`
    },
    {
        title: 'Toast notification error with close button',
        template: PrimaryErrorClose,
        reactCode: `
import React, { useState } from 'react';
import Toast from '@ds-react/pro/Toast';

const [toastOpen, setToastOpen] = useState(false);

<Toast
    message="New results are available."
    onClose={() => {setToastOpen(false);}}
    opened={toastOpen}
    status="error"
/>
        `,
        angularCode: `
<button class="ds-button --primary" (click)="showToast()">
    Open toast
</button>
        `,
        tsCode: `
import { MatSnackBar } from '@angular/material/snack-bar';

constructor(private toast: MatSnackBar) {}

closeText = ''; // Add text to replace X button with text
closeButton = this.closeText.trim() === '' ? ' ' : this.closeText;

showToast() {
    const panelClasses = ['ds-toast', '--error'];

    if (this.closeText.trim() !== '') {
        panelClasses.push('--text-close');
    }

    this.toast.open(
        'New results are available.',
        this.closeButton,
        {
            panelClass: panelClasses,
            verticalPosition: 'top'
        }
    );
}
        `,
        htmlCode: `
<div class="ds-toast --error">
    <div class="ds-toast__content">
        <div class="ds-toast__message">
            New results are available.
        </div>
        <button class="ds-button --icon --md">
            <span class="ds-icon--close" aria-label="close"></span>
        </button>
    </div>
</div>
`
    },
    {
        title: 'Toast notification alert with close button',
        template: PrimaryAlertClose,
        reactCode: `
import React, { useState } from 'react';
import Toast from '@ds-react/pro/Toast';

const [toastOpen, setToastOpen] = useState(false);

<Toast
    message="New results are available."
    onClose={() => {setToastOpen(false);}}
    opened={toastOpen}
    status="alert"
/>
        `,
        angularCode: `
<button class="ds-button --primary" (click)="showToast()">
    Open toast
</button>
        `,
        tsCode: `
import { MatSnackBar } from '@angular/material/snack-bar';

constructor(private toast: MatSnackBar) {}

closeText = ''; // Add text to replace X button with text
closeButton = this.closeText.trim() === '' ? ' ' : this.closeText;

showToast() {
    const panelClasses = ['ds-toast', '--alert'];

    if (this.closeText.trim() !== '') {
        panelClasses.push('--text-close');
    }

    this.toast.open(
        'New results are available.',
        this.closeButton,
        {
            panelClass: panelClasses,
            verticalPosition: 'top'
        }
    );
}
        `,
        htmlCode: `
<div class="ds-toast --alert">
    <div class="ds-toast__content">
        <div class="ds-toast__message">
            New results are available.
        </div>
        <button class="ds-button --icon --md">
            <span class="ds-icon--close" aria-label="close"></span>
        </button>
    </div>
</div>
`
    },
    {
        title: 'Toast notification with close button',
        template: PrimaryClose,
        reactCode: `
import React, { useState } from 'react';
import Toast from '@ds-react/pro/Toast';

const [toastOpen, setToastOpen] = useState(false);

<Toast
    message="New results are available."
    onClose={() => {setToastOpen(false);}}
    opened={toastOpen}
/>
        `,
        angularCode: `
<button class="ds-button --primary" (click)="showToast()">
    Open toast
</button>
        `,
        tsCode: `
import { MatSnackBar } from '@angular/material/snack-bar';

constructor(private toast: MatSnackBar) {}

closeText = ''; // Add text to replace X button with text
closeButton = this.closeText.trim() === '' ? ' ' : this.closeText;

showToast() {
    const panelClasses = 'ds-toast';

    if (this.closeText.trim() !== '') {
        panelClasses.push('--text-close');
    }

    this.toast.open(
        'New results are available.',
        this.closeButton,
        {
            panelClass: panelClasses,
            verticalPosition: 'top'
        }
    );
}
        `,
        htmlCode: `
<div class="ds-toast">
    <div class="ds-toast__content">
        <div class="ds-toast__message">
            New results are available.
        </div>
        <button class="ds-button --icon --md">
            <span class="ds-icon--close" aria-label="close"></span>
        </button>
    </div>
</div>
`
    },
    {
        title: 'Toast notification with text link',
        template: PrimaryLink,
        reactCode: `
import React, { useState } from 'react';
import Toast from '@ds-react/pro/Toast';

const [toastOpen, setToastOpen] = useState(false);

<Toast
    message="New results are available."
    onClose={() => {setToastOpen(false);}}
    opened={toastOpen}
    textLinkLabel="Undo"
/>
        `,
        angularCode: `
<button class="ds-button --primary" (click)="showToast()">
    Open toast
</button>
        `,
        tsCode: `
import { MatSnackBar } from '@angular/material/snack-bar';

constructor(private toast: MatSnackBar) {}

closeText = 'Undo'; // Add text to replace X button with text
closeButton = this.closeText.trim() === '' ? ' ' : this.closeText;

showToast() {
    const panelClasses = 'ds-toast';

    if (this.closeText.trim() !== '') {
        panelClasses.push('--text-close');
    }

    this.toast.open(
        'New results are available.',
        this.closeButton,
        {
            panelClass: panelClasses,
            verticalPosition: 'top'
        }
    );
}
        `,
        htmlCode: `
<div class="ds-toast">
    <div class="ds-toast__content">
        <div class="ds-toast__message">
            New results are available.
        </div>
        <a href class="ds-link">Undo</a>
    </div>
</div>
`
    },
    {
        title: 'Toast notification informative with text link',
        template: PrimaryInfoLink,
        reactCode: `
import React, { useState } from 'react';
import Toast from '@ds-react/pro/Toast';

const [toastOpen, setToastOpen] = useState(false);

<Toast
    message="New results are available."
    onClose={() => {setToastOpen(false);}}
    opened={toastOpen}
    status="informative"
    textLinkLabel="Undo"
/>
        `,
        angularCode: `
<button class="ds-button --primary" (click)="showToast()">
    Open toast
</button>
        `,
        tsCode: `
import { MatSnackBar } from '@angular/material/snack-bar';

constructor(private toast: MatSnackBar) {}

closeText = 'Undo'; // Add text to replace X button with text
closeButton = this.closeText.trim() === '' ? ' ' : this.closeText;

showToast() {
    const panelClasses = ['ds-toast', '--informative'];

    if (this.closeText.trim() !== '') {
        panelClasses.push('--text-close');
    }

    this.toast.open(
        'New results are available.',
        this.closeButton,
        {
            panelClass: panelClasses,
            verticalPosition: 'top'
        }
    );
}
        `,
        htmlCode: `
<div class="ds-toast --informative">
    <div class="ds-toast__content">
        <div class="ds-toast__message">
            New results are available.
        </div>
        <a href class="ds-link">Undo</a>
    </div>
</div>
`
    },
    {
        title: 'Toast notification success with text link',
        template: PrimarySuccessLink,
        reactCode: `
import React, { useState } from 'react';
import Toast from '@ds-react/pro/Toast';

const [toastOpen, setToastOpen] = useState(false);

<Toast
    message="New results are available."
    onClose={() => {setToastOpen(false);}}
    opened={toastOpen}
    status="success"
    textLinkLabel="Undo"
/>
        `,
        angularCode: `
<button class="ds-button --primary" (click)="showToast()">
    Open toast
</button>
        `,
        tsCode: `
import { MatSnackBar } from '@angular/material/snack-bar';

constructor(private toast: MatSnackBar) {}

closeText = 'Undo'; // Add text to replace X button with text
closeButton = this.closeText.trim() === '' ? ' ' : this.closeText;

showToast() {
    const panelClasses = ['ds-toast', '--success'];

    if (this.closeText.trim() !== '') {
        panelClasses.push('--text-close');
    }

    this.toast.open(
        'New results are available.',
        this.closeButton,
        {
            panelClass: panelClasses,
            verticalPosition: 'top'
        }
    );
}
        `,
        htmlCode: `
<div class="ds-toast --success">
    <div class="ds-toast__content">
        <div class="ds-toast__message">
            New results are available.
        </div>
        <a href class="ds-link">Undo</a>
    </div>
</div>
`
    },
    {
        title: 'Toast notification error with text link',
        template: PrimaryErrorLink,
        reactCode: `
import React, { useState } from 'react';
import Toast from '@ds-react/pro/Toast';

const [toastOpen, setToastOpen] = useState(false);

<Toast
    message="New results are available."
    onClose={() => {setToastOpen(false);}}
    opened={toastOpen}
    status="error"
    textLinkLabel="Undo"
/>
        `,
        angularCode: `
<button class="ds-button --primary" (click)="showToast()">
    Open toast
</button>
        `,
        tsCode: `
import { MatSnackBar } from '@angular/material/snack-bar';

constructor(private toast: MatSnackBar) {}

closeText = 'Undo'; // Add text to replace X button with text
closeButton = this.closeText.trim() === '' ? ' ' : this.closeText;

showToast() {
    const panelClasses = ['ds-toast', '--error'];

    if (this.closeText.trim() !== '') {
        panelClasses.push('--text-close');
    }

    this.toast.open(
        'New results are available.',
        this.closeButton,
        {
            panelClass: panelClasses,
            verticalPosition: 'top'
        }
    );
}
        `,
        htmlCode: `
<div class="ds-toast --error">
    <div class="ds-toast__content">
        <div class="ds-toast__message">
            New results are available.
        </div>
        <a href class="ds-link">Undo</a>
    </div>
</div>
`
    },
    {
        title: 'Toast notification alert with text link',
        template: PrimaryAlertLink,
        reactCode: `
import React, { useState } from 'react';
import Toast from '@ds-react/pro/Toast';

const [toastOpen, setToastOpen] = useState(false);

<Toast
    message="New results are available."
    onClose={() => {setToastOpen(false);}}
    opened={toastOpen}
    status="alert"
    textLinkLabel="Undo"
/>
        `,
        angularCode: `
<button class="ds-button --primary" (click)="showToast()">
    Open toast
</button>
        `,
        tsCode: `
import { MatSnackBar } from '@angular/material/snack-bar';

constructor(private toast: MatSnackBar) {}

closeText = 'Undo'; // Add text to replace X button with text
closeButton = this.closeText.trim() === '' ? ' ' : this.closeText;

showToast() {
    const panelClasses = ['ds-toast', '--alert'];

    if (this.closeText.trim() !== '') {
        panelClasses.push('--text-close');
    }

    this.toast.open(
        'New results are available.',
        this.closeButton,
        {
            panelClass: panelClasses,
            verticalPosition: 'top'
        }
    );
}
        `,
        htmlCode: `
<div class="ds-toast --alert">
    <div class="ds-toast__content">
        <div class="ds-toast__message">
            New results are available.
        </div>
        <a href class="ds-link">Undo</a>
    </div>
</div>
`
    }
];

const storyPropTypes = [
    'duration: PropTypes.number,',
    'message: PropTypes.string.isRequired,',
    'noIcon: PropTypes.bool,',
    'onClose: PropTypes.func.isRequired,',
    'opened: PropTypes.bool.isRequired,',
    "status: PropTypes.oneOf(['success', 'error', 'alert', 'informative']),",
    'textLinkLabel: PropTypes.string'
];
