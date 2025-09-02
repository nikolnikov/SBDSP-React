/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        {
            name: '@storybook/addon-essentials',
            options: {
                controls: false,
                actions: false
            }
        }
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    }
};

export default config;
