'use client';

import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const QDSTabs = ({
    children,
    contentClasses = [],
    labels,
    defaultSelectedTab
}) => {
    const [selectedValue, setSelectedValue] = useState(defaultSelectedTab);
    const tabContent = children;
    const tabRef = useRef([]);

    const onSelect = idx => {
        setSelectedValue(idx);
    };

    const addActiveClass = tabIndex => {
        tabRef.current.forEach((tab, idx) => {
            tab.classList.remove('--selected');

            if (idx === tabIndex) {
                tab.classList.add('--selected');
            }
        });
    };

    useEffect(() => {
        tabRef.current[selectedValue].classList.add('--selected');
    }, [selectedValue]);

    const tabItems = labels.map((props, idx) => (
        <button
            className={classNames('ds-tab', {
                '--disabled': props.isDisabled
            })}
            aria-label={props.name}
            key={idx}
            ref={el => (tabRef.current[idx] = el)}
            onClick={() => {
                onSelect(idx);
                addActiveClass(idx);
            }}
        >
            <span>{props.name}</span>
        </button>
    ));

    return (
        <div className="ds-tab__wrapper">
            <div className="ds-tab-set">{tabItems}</div>
            <div className={contentClasses} role="tabpanel">
                {tabContent[selectedValue]}
            </div>
        </div>
    );
};

QDSTabs.propTypes = {
    children: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.object, PropTypes.node])
    ).isRequired,
    contentClasses: PropTypes.string,
    labels: PropTypes.arrayOf(
        PropTypes.shape({
            isDisabled: PropTypes.bool,
            name: PropTypes.string.isRequired
        })
    ).isRequired,
    defaultSelectedTab: PropTypes.number
};

export default QDSTabs;
