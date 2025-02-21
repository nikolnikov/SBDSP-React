import { themes } from '@storybook/theming';
import '@iframe-resizer/child';
import '!style-loader!css-loader!sass-loader!/src/stories/assets/css/overrides.css';
import '!style-loader!css-loader!sass-loader!/src/stories/assets/css/dsp.scss';

const parameters = {
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
};
