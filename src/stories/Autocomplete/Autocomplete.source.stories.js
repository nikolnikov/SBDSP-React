import React from 'react';
import { Autocomplete } from './Autocomplete';
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
    title: 'Components/Autocomplete/Code',
    component: Autocomplete,
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

const Template = args => <Autocomplete {...args} />;

const storyOptions = [
    'Adrian Veidt',
    'Dan Dreiberg',
    'Edward Blake',
    'Hollis Mason',
    'Jon Osterman',
    'Laurie Juspeczyk',
    'Sally Jupiter',
    'Walter Kovacs'
];

export const Primary = Template.bind({});
Primary.storyName = 'Autocomplete';
Primary.args = {
    label: 'Input label',
    getSelection: selection => {
        console.log(selection);
    },
    inputId: 'input-id',
    optionList: storyOptions
};

export const PrimaryRequired = Template.bind({});
PrimaryRequired.storyName = 'Autocomplete required';
PrimaryRequired.args = {
    ...Primary.args,
    isRequired: true
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.storyName = 'Autocomplete disabled';
PrimaryDisabled.args = {
    ...Primary.args,
    isDisabled: true
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.storyName = 'Autocomplete with search icon';
PrimaryWithIcon.args = {
    ...Primary.args,
    searchIcon: true
};

export const PrimaryWithError = Template.bind({});
PrimaryWithError.storyName = 'Autocomplete with error';
PrimaryWithError.args = {
    ...Primary.args,
    errorMessage: 'Error message goes here.',
    hasError: true
};

export const PrimaryWithHint = Template.bind({});
PrimaryWithHint.storyName = 'Autocomplete with hint';
PrimaryWithHint.args = {
    ...Primary.args,
    hintMessage: 'Hint message goes here.'
};

const storyData = [
    {
        title: 'Autocomplete',
        template: Primary,
        reactCode: `
import Autocomplete from '@ds-react/pro/Autocomplete';

<Autocomplete
    getSelection={() => {}}
    inputId="input"
    label="Input label"
    optionList={[
        'Adrian Veidt',
        'Dan Dreiberg',
        'Edward Blake',
        'Hollis Mason',
        'Jon Osterman',
        'Laurie Juspeczyk',
        'Sally Jupiter',
        'Walter Kovacs'
    ]}
/>
        `,
        angularCode: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <input type="text" matInput [formControl]="autocomplete" [matAutocomplete]="auto" />

    <mat-autocomplete class="ds-dropdown" autoActiveFirstOption #auto="matAutocomplete">
        <mat-option class="ds-dropdown__item" *ngFor="let option of filteredOptions | async" [value]="option">
            {{ option }}
        </mat-option>
    </mat-autocomplete>
</mat-form-field>
        `,
        tsCode: `
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

myControl = new FormControl('');
options: string[] = [
    'Adrian Veidt',
    'Dan Dreiberg',
    'Edward Blake',
    'Hollis Mason',
    'Jon Osterman',
    'Laurie Juspeczyk',
    'Sally Jupiter',
    'Walter Kovacs'
];
filteredOptions: Observable<string[]>;

ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || ''))
    );
}

private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option =>
        option.toLowerCase().includes(filterValue)
    );
}
        `,
        htmlCode: `
<div class="ds-input">
    <label class="ds-input__label" for="input" aria-label="Static Input">
        <span>Input label</span>
    </label>
    <input type="text" id="input" />
</div>

<div class="ds-dropdown">
    <div class="ds-dropdown__item">Item 1</div>
    <div class="ds-dropdown__item">Item 2</div>
    <div class="ds-dropdown__item">Item 3</div>
</div>
        `
    },
    {
        title: 'Autocomplete required',
        template: PrimaryRequired,
        reactCode: `
import Autocomplete from '@ds-react/pro/Autocomplete';

<Autocomplete
    getSelection={() => {}}
    inputId="input"
    isRequired
    label="Input label"
    optionList={[
        'Adrian Veidt',
        'Dan Dreiberg',
        'Edward Blake',
        'Hollis Mason',
        'Jon Osterman',
        'Laurie Juspeczyk',
        'Sally Jupiter',
        'Walter Kovacs'
    ]}
/>
        `,
        angularCode: `
<mat-form-field class="ds-input --required">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <input type="text" matInput [formControl]="autocomplete" [matAutocomplete]="auto" />

    <mat-autocomplete class="ds-dropdown" autoActiveFirstOption #auto="matAutocomplete">
        <mat-option class="ds-dropdown__item" *ngFor="let option of filteredOptions | async" [value]="option">
            {{ option }}
        </mat-option>
    </mat-autocomplete>
</mat-form-field>
        `,
        tsCode: `
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

myControl = new FormControl('');
options: string[] = [
    'Adrian Veidt',
    'Dan Dreiberg',
    'Edward Blake',
    'Hollis Mason',
    'Jon Osterman',
    'Laurie Juspeczyk',
    'Sally Jupiter',
    'Walter Kovacs'
];
filteredOptions: Observable<string[]>;

ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || ''))
    );
}

private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option =>
        option.toLowerCase().includes(filterValue)
    );
}
        `,
        htmlCode: `
<div class="ds-input --required">
    <label class="ds-input__label" for="input" aria-label="Static Input">
        <span>Input label</span>
    </label>
    <input type="text" id="input" />
</div>

<div class="ds-dropdown">
    <div class="ds-dropdown__item">Item 1</div>
    <div class="ds-dropdown__item">Item 2</div>
    <div class="ds-dropdown__item">Item 3</div>
</div>
        `
    },
    {
        title: 'Autocomplete disabled',
        template: PrimaryDisabled,
        reactCode: `
import Autocomplete from '@ds-react/pro/Autocomplete';

<Autocomplete
    getSelection={() => {}}
    inputId="input"
    isDisabled
    label="Input label"
    optionList={[
        'Adrian Veidt',
        'Dan Dreiberg',
        'Edward Blake',
        'Hollis Mason',
        'Jon Osterman',
        'Laurie Juspeczyk',
        'Sally Jupiter',
        'Walter Kovacs'
    ]}
/>
        `,
        angularCode: `
<mat-form-field class="ds-input --disabled">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <input type="text" matInput [formControl]="autocomplete" [matAutocomplete]="auto" disabled />

    <mat-autocomplete class="ds-dropdown" autoActiveFirstOption #auto="matAutocomplete">
        <mat-option class="ds-dropdown__item" *ngFor="let option of filteredOptions | async" [value]="option">
            {{ option }}
        </mat-option>
    </mat-autocomplete>
</mat-form-field>
        `,
        tsCode: `
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

myControl = new FormControl('');
options: string[] = [
    'Adrian Veidt',
    'Dan Dreiberg',
    'Edward Blake',
    'Hollis Mason',
    'Jon Osterman',
    'Laurie Juspeczyk',
    'Sally Jupiter',
    'Walter Kovacs'
];
filteredOptions: Observable<string[]>;

ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || ''))
    );
}

private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option =>
        option.toLowerCase().includes(filterValue)
    );
}
        `,
        htmlCode: `
<div class="ds-input --disabled">
    <label class="ds-input__label" for="input" aria-label="Static Input">
        <span>Input label</span>
    </label>
    <input type="text" id="input" disabled />
</div>

<div class="ds-dropdown">
    <div class="ds-dropdown__item">Item 1</div>
    <div class="ds-dropdown__item">Item 2</div>
    <div class="ds-dropdown__item">Item 3</div>
</div>
        `
    },
    {
        title: 'Autocomplete with search icon',
        template: PrimaryWithIcon,
        reactCode: `
import Autocomplete from '@ds-react/pro/Autocomplete';

<Autocomplete
    getSelection={() => {}}
    inputId="input"
    label="Input label"
    optionList={[
        'Adrian Veidt',
        'Dan Dreiberg',
        'Edward Blake',
        'Hollis Mason',
        'Jon Osterman',
        'Laurie Juspeczyk',
        'Sally Jupiter',
        'Walter Kovacs'
    ]}
    searchIcon
/>
        `,
        angularCode: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <span class="ds-icon--search" matPrefix></span>
    <input type="text" matInput [formControl]="autocomplete" [matAutocomplete]="auto" />

    <mat-autocomplete class="ds-dropdown" autoActiveFirstOption #auto="matAutocomplete">
        <mat-option class="ds-dropdown__item" *ngFor="let option of filteredOptions | async" [value]="option">
            {{ option }}
        </mat-option>
    </mat-autocomplete>
</mat-form-field>
        `,
        tsCode: `
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

myControl = new FormControl('');
options: string[] = [
    'Adrian Veidt',
    'Dan Dreiberg',
    'Edward Blake',
    'Hollis Mason',
    'Jon Osterman',
    'Laurie Juspeczyk',
    'Sally Jupiter',
    'Walter Kovacs'
];
filteredOptions: Observable<string[]>;

ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || ''))
    );
}

private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option =>
        option.toLowerCase().includes(filterValue)
    );
}
        `,
        htmlCode: `
<div class="ds-input --icons --icon-left">
    <label class="ds-input__label" for="input" aria-label="Static Input">
        <span>Input label</span>
    </label>
    <div class="ds-flex --start-center --row">
        <span class="ds-icon--search --left" aria-label="search"></span>                                
        <input type="text" id="input" />
    </div>
</div>

<div class="ds-dropdown">
    <div class="ds-dropdown__item">Item 1</div>
    <div class="ds-dropdown__item">Item 2</div>
    <div class="ds-dropdown__item">Item 3</div>
</div>
        `
    },
    {
        title: 'Autocomplete with error',
        template: PrimaryWithError,
        reactCode: `
import Autocomplete from '@ds-react/pro/Autocomplete';

<Autocomplete
    errorMessage="Error message goes here."
    getSelection={() => {}}
    hasError
    inputId="input"
    label="Input label"
    optionList={[
        'Adrian Veidt',
        'Dan Dreiberg',
        'Edward Blake',
        'Hollis Mason',
        'Jon Osterman',
        'Laurie Juspeczyk',
        'Sally Jupiter',
        'Walter Kovacs'
    ]}
/>
        `,
        angularCode: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <input type="text" matInput [formControl]="autocomplete" [matAutocomplete]="auto" />

    <div class="ds-input__error" *ngIf="input.hasError('required')">
        Error message goes here.
    </div>

    <mat-autocomplete class="ds-dropdown" autoActiveFirstOption #auto="matAutocomplete">
        <mat-option class="ds-dropdown__item" *ngFor="let option of filteredOptions | async" [value]="option">
            {{ option }}
        </mat-option>
    </mat-autocomplete>
</mat-form-field>
        `,
        tsCode: `
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

myControl = new FormControl('');
options: string[] = [
    'Adrian Veidt',
    'Dan Dreiberg',
    'Edward Blake',
    'Hollis Mason',
    'Jon Osterman',
    'Laurie Juspeczyk',
    'Sally Jupiter',
    'Walter Kovacs'
];
filteredOptions: Observable<string[]>;

ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || ''))
    );
}

private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option =>
        option.toLowerCase().includes(filterValue)
    );
}
        `,
        htmlCode: `
<div class="ds-input --error">
    <label class="ds-input__label" for="input" aria-label="Static Input">
        <span>Input label</span>
    </label>
    <input type="text" id="input" />

    <div class="ds-input__error">
        Error message goes here.
    </div>
</div>

<div class="ds-dropdown">
    <div class="ds-dropdown__item">Item 1</div>
    <div class="ds-dropdown__item">Item 2</div>
    <div class="ds-dropdown__item">Item 3</div>
</div>
        `
    },
    {
        title: 'Autocomplete with hint',
        template: PrimaryWithHint,
        reactCode: `
import Autocomplete from '@ds-react/pro/Autocomplete';

<Autocomplete
    getSelection={() => {}}
    hintMessage="Hint message goes here."
    inputId="input"
    label="Input label"
    optionList={[
        'Adrian Veidt',
        'Dan Dreiberg',
        'Edward Blake',
        'Hollis Mason',
        'Jon Osterman',
        'Laurie Juspeczyk',
        'Sally Jupiter',
        'Walter Kovacs'
    ]}
/>
        `,
        angularCode: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <input type="text" matInput [formControl]="autocomplete" [matAutocomplete]="auto" />

    <div class="ds-input__hint">
        Hint goes here
    </div>

    <mat-autocomplete class="ds-dropdown" autoActiveFirstOption #auto="matAutocomplete">
        <mat-option class="ds-dropdown__item" *ngFor="let option of filteredOptions | async" [value]="option">
            {{ option }}
        </mat-option>
    </mat-autocomplete>
</mat-form-field>
        `,
        tsCode: `
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

myControl = new FormControl('');
options: string[] = [
    'Adrian Veidt',
    'Dan Dreiberg',
    'Edward Blake',
    'Hollis Mason',
    'Jon Osterman',
    'Laurie Juspeczyk',
    'Sally Jupiter',
    'Walter Kovacs'
];
filteredOptions: Observable<string[]>;

ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || ''))
    );
}

private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option =>
        option.toLowerCase().includes(filterValue)
    );
}
        `,
        htmlCode: `
<div class="ds-input">
    <label class="ds-input__label" for="input" aria-label="Static Input">
        <span>Input label</span>
    </label>
    <input type="text" id="input" />

    <div class="ds-input__hint">
        Hint message goes here.
    </div>
</div>

<div class="ds-dropdown">
    <div class="ds-dropdown__item">Item 1</div>
    <div class="ds-dropdown__item">Item 2</div>
    <div class="ds-dropdown__item">Item 3</div>
</div>
        `
    }
];

const storyPropTypes = [
    'customClasses: PropTypes.string,',
    'errorMessage: PropTypes.string,',
    'hasError: PropTypes.bool,',
    'hintMessage: PropTypes.string,',
    'inputId: PropTypes.string,',
    'isDisabled: PropTypes.bool,',
    'searchIcon: PropTypes.bool,',
    'label: PropTypes.string,',
    'placeholder: PropTypes.string,',
    'isRequired: PropTypes.bool,',
    'maxWidth: PropTypes.number,',
    'getSelection: PropTypes.func,',
    'optionList: PropTypes.array'
];
