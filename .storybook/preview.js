import '!style-loader!css-loader!sass-loader!/src/stories/assets/css/overrides.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        options: {
            storySort: {
                method: 'alphabetical',
                order: ['Components', ['React', 'Angular', 'HTML']],
                locales: 'en-US'
            }
        }
    }
};

export default preview;
