import React, { useState } from 'react';

export default {
    title: 'Components/Loader/Skeleton',
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

export const BasicSkeletonLoader = {
    render: () => {
        const [loading, setLoading] = useState(true);

        const handleToggle = () => {
            setLoading(prev => !prev);
        };

        return (
            <div className="ds-skeleton-loader">
                <button
                    className="ds-button --primary ds-m-auto"
                    onClick={handleToggle}
                >
                    Toggle skeleton loader
                </button>

                <div className="ds-card ds-mt-64">
                    <div className="ds-card__content">
                        <div
                            className={
                                'ds-flex --row --start-center' +
                                (loading ? ' ds-loading-data' : '')
                            }
                        >
                            <div className="ds-avatar --solid --xl">HM</div>

                            <div className="ds-row ds-flex --column ds-ml-24">
                                <h3 className="ds-m-0">Hollis Mason</h3>
                                <div>Sex: M &nbsp;&nbsp; DOB: 09/21/1934</div>
                                <div>Location: New York, NY</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `const [loading, setLoading] = useState(true);

const handleToggle = () => {
    setLoading(prev => !prev);
};

<QDSButton
    clickHandler={handleToggle}
    label="Toggle skeleton loader"
/>

<div className={(loading ? " ds-loading-data" : "")}>
    Content to mask goes here.
</div>
                `
            }
        }
    }
};
