'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Tag = ({
    children,
    clickHandler,
    customClasses = [],
    disabled,
    secondary,
    selected,
    showClose
}) => {
    return (
        <button
            className={classNames('ds-tag', customClasses, {
                '--disabled': disabled,
                '--secondary': secondary,
                '--selected': selected
            })}
            onClick={clickHandler}
            aria-label={children}
            tabIndex={disabled ? '-1' : 0}
        >
            {children}
            {showClose && (
                <span className="ds-icon--close" aria-label="close"></span>
            )}
        </button>
    );
};

Tag.propTypes = {
    children: PropTypes.node.isRequired,
    clickHandler: PropTypes.func,
    customClasses: PropTypes.string,
    disabled: PropTypes.bool,
    secondary: PropTypes.bool,
    selected: PropTypes.bool,
    showClose: PropTypes.bool
};

export default Tag;
