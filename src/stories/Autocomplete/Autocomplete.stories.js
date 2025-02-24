import { Autocomplete } from './Autocomplete';

export default {
    title: 'Components/Autocomplete',
    component: Autocomplete,
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

export const BasicAutocomplete = {
    args: {
        label: 'Input label',
        getSelection: selection => {
            console.log(selection);
        },
        inputId: 'input-id',
        optionList: storyOptions
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        getSelection: { table: { disable: true } },
        inputId: { table: { disable: true } },
        maxWidth: { table: { disable: true } },
        optionList: { table: { disable: true } }
    }
};

export const AutocompleteWithIcon = {
    args: {
        ...BasicAutocomplete.args,
        searchIcon: true
    },
    argTypes: {
        ...BasicAutocomplete.argTypes
    }
};
