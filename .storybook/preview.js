import { themes } from '@storybook/theming';
import '!style-loader!css-loader!sass-loader!/src/stories/assets/css/overrides.css';
import '!style-loader!css-loader!sass-loader!/src/stories/assets/css/ds-story.scss';

/** @type { import('@storybook/react').Preview } */
const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
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
    }
};

export default preview;
