import { Card } from './Card';

export default {
    title: 'Components/Card',
    component: Card,
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

export const BasicCard = {
    args: {
        children:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur, eros sit amet ornare placerat, enim lectus hendrerit nisl, quis lacinia eros purus vel nunc. Donec imperdiet, leo quis fermentum luctus, nibh nibh vehicula ipsum, eget faucibus nisl enim sed felis.'
    },
    argTypes: {
        customClasses: { table: { disable: true } }
    }
};

export const CardWithTitle = {
    args: {
        ...BasicCard.args,
        title: 'Title'
    },
    argTypes: {
        ...BasicCard.argTypes
    }
};
