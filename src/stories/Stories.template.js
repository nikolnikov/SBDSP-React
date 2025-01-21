import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Source, Story, Subtitle, Unstyled } from '@storybook/blocks';

export const StoriesTemplate = ({ storyData, storyPropTypes }) => {
    const Tabs = [
        {
            title: 'React'
        },
        {
            title: 'Angular',
            subtabs: [
                {
                    title: 'component.html'
                },
                {
                    title: 'component.ts'
                }
            ]
        },
        {
            title: 'HTML'
        }
    ];

    const [activeTabs, setActiveTabs] = useState({});

    const handleTabClick = (i, tab) => {
        setActiveTabs(prevState => {
            const newState = { ...prevState };

            if (prevState[i] === tab && !tab.includes('subtab')) {
                delete newState[i];
                delete newState[`${i}-subtab`];
            } else {
                newState[i] = tab;

                if (tab === 'Angular') {
                    const angularTab = Tabs.find(
                        tab => tab.title === 'Angular'
                    );
                    if (angularTab && angularTab.subtabs) {
                        newState[`${i}-subtab`] = angularTab.subtabs[0].title;
                    }
                }
            }

            return newState;
        });
    };

    const handleSubtabClick = (i, subtab) => {
        setActiveTabs(prevState => ({
            ...prevState,
            [`${i}-subtab`]: subtab
        }));
    };

    return (
        <>
            {storyData.map((story, i) => (
                <div className="ds-story" key={i}>
                    <div className="ds-story__canvas">
                        <div className="ds-story__header">
                            <Unstyled>
                                <h3>{story.title}</h3>
                            </Unstyled>
                        </div>

                        <div
                            className={`ds-story__preview ${story.theme ? story.theme : ''}`}
                        >
                            <Story of={story.template} />
                        </div>

                        <div
                            className={
                                `ds-story__tabs` +
                                (activeTabs[i] ? ' tabs-shown' : '')
                            }
                        >
                            {Tabs.map(tab => (
                                <button
                                    key={tab.title}
                                    className={`ds-story__tab ${activeTabs[i] === tab.title ? 'active' : ''}`}
                                    onClick={() => handleTabClick(i, tab.title)}
                                >
                                    {tab.title}
                                </button>
                            ))}
                        </div>

                        {Tabs.map(
                            tab =>
                                tab.subtabs &&
                                activeTabs[i] === tab.title &&
                                story.tsCode && (
                                    <div
                                        className="ds-story__subtabs"
                                        key={tab.title}
                                    >
                                        {tab.subtabs.map(subtab => (
                                            <button
                                                key={subtab.title}
                                                className={`ds-story__tab ${activeTabs[`${i}-subtab`] === subtab.title ? 'active' : ''}`}
                                                onClick={() =>
                                                    handleSubtabClick(
                                                        i,
                                                        subtab.title
                                                    )
                                                }
                                            >
                                                {subtab.title}
                                            </button>
                                        ))}
                                    </div>
                                )
                        )}

                        <div className="ds-story__source">
                            {activeTabs[i] === 'React' && story.reactCode && (
                                <Source dark code={story.reactCode} />
                            )}
                            {activeTabs[i] === 'Angular' &&
                                activeTabs[`${i}-subtab`] ===
                                    'component.html' &&
                                story.angularCode && (
                                    <Source dark code={story.angularCode} />
                                )}
                            {activeTabs[i] === 'Angular' &&
                                activeTabs[`${i}-subtab`] === 'component.ts' &&
                                story.tsCode && (
                                    <Source dark code={story.tsCode} />
                                )}
                            {activeTabs[i] === 'HTML' && story.htmlCode && (
                                <Source dark code={story.htmlCode} />
                            )}
                        </div>
                    </div>
                </div>
            ))}

            <Subtitle>
                <div className="props-card">
                    <h4>React props</h4>
                    <ul className="ds-list">
                        {storyPropTypes.map((propType, i) => (
                            <li key={i}>{propType}</li>
                        ))}
                    </ul>
                </div>
            </Subtitle>
        </>
    );
};

StoriesTemplate.propTypes = {
    storyData: PropTypes.array,
    storyPropTypes: PropTypes.array
};
