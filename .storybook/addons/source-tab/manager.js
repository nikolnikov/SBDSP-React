import React from 'react';
import { addons, types } from '@storybook/manager-api';
import { AddonPanel } from '@storybook/components';
import { Source } from '@storybook/blocks';
import { useStorybookApi, useStorybookState } from '@storybook/manager-api';
import { useTheme } from '@storybook/theming';

const ADDON_ID = 'storybook/source-tab';
const PANEL_ID = `${ADDON_ID}/panel`;

const SourcePanel = () => {
    const api = useStorybookApi();
    const state = useStorybookState();
    const theme = useTheme();
    const story = api.getData(state.storyId, state.refId);

    if (!story) {
        return null;
    }

    return (
        <>
            <style jsx>{`
                .source-panel .docblock-source.sb-unstyled.css-1l5wzws {
                    border: 0 !important;
                    box-shadow: none !important;
                    margin: 0 !important;
                }

                .source-panel .css-111a2cx {
                    top: 0;
                    bottom: auto;
                }
                .source-panel .css-otxova {
                    margin: 0;
                    border-width: 0px 0px 1px 1px;
                    border-style: none none solid solid;
                    border-top-color: initial;
                    border-bottom-color: rgba(255, 255, 255, 0.1);
                    border-radius: 0 0 0 4px;
                }
            `}</style>

            <div className="source-panel">
                <Source
                    code={
                        story.parameters?.docs?.source?.code ||
                        'Loading source code...'
                    }
                    language="tsx"
                    dark={theme.base === 'dark'}
                />
            </div>
        </>
    );
};

addons.register(ADDON_ID, () => {
    addons.add(PANEL_ID, {
        type: types.PANEL,
        title: 'Source',
        render: ({ active }) => (
            <AddonPanel active={active || false}>
                <SourcePanel />
            </AddonPanel>
        )
    });
});
