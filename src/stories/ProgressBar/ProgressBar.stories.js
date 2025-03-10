import { QDSProgressBar } from './ProgressBar';

export default {
    title: 'Components/Progress bar',
    component: QDSProgressBar,
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

export const DefaultProgressBar = {
    args: {
        fillPercentage: 50
    },
    argTypes: {
        customClasses: { table: { disable: true } }
    }
};
