import React, { useEffect } from 'react';
import { themes } from '@storybook/theming';
// import '@iframe-resizer/child';
import '!style-loader!css-loader!sass-loader!/src/assets/css/overrides.css';
import '!style-loader!css-loader!sass-loader!/src/assets/css/dsp.scss';

export const parameters = {
    docs: {
        source: {
            theme: themes.dark
        }
    },
    options: {
        storySort: {
            order: 'alphabetical',
            locales: 'en-US'
        }
    }
};

export const decorators = [
    (Story, context) => {
        useEffect(() => {
            const storyName = context.name.toLowerCase();
            if (storyName.includes('inverse')) {
                document.body.classList.add('dark-theme');
            } else {
                document.body.classList.remove('dark-theme');
            }

            return () => {
                document.body.classList.remove('dark-theme');
            };
        }, [context.name]);

        return <Story />;
    }
];
