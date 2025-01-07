import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const Button = ({ 
    clickHandler = () => {},
    customClasses = null,
    iconClass = null,
    iconRight = false,
    isDestructive = false,
    isDisabled = false,
    isInverse = false,
    isSave = false,
    label,
    size = 'large',
    type = 'primary',
    ...props
}) => {  
    const [buttonStatus, setButtonStatus] = useState('');

    useEffect(() => {
        let timeoutId;

        if (buttonStatus === 'saving') {
            timeoutId = setTimeout(() => setButtonStatus('saved'), 3000);
        } else if (buttonStatus === 'saved') {
            timeoutId = setTimeout(() => setButtonStatus(''), 1500);
        }

        return () => clearTimeout(timeoutId);
    }, [buttonStatus]);

    const setSave = () => {
        if (buttonStatus === '') {
            setButtonStatus('saving');
        }
    };

    const customSaveClasses =
        buttonStatus === 'saving'
            ? '--saving'
            : buttonStatus === 'saved'
            ? '--saved'
            : '';

    const buttonClass = ['ds-button'];

    if (customClasses) {
        buttonClass.push(customClasses);
    }
    
    if (type === 'primary') {
        buttonClass.push('--primary');
    } else if (type === 'secondary') {
        buttonClass.push('--secondary');
    } else if (type === 'ghost') {
        buttonClass.push('--ghost');
    } else if (type === 'icon') {
        buttonClass.push('--icon');
    }

    if (size === 'large') {
        buttonClass.push('');
    } else if (size === 'small' && type !== 'icon') {
        buttonClass.push('--small');
    } else if (size === 'small' && type === 'icon') {
        buttonClass.push('--sm');
    } else if (size === 'medium' && type === 'icon') {
        buttonClass.push('--md');
    }

    if (isDestructive) {
        buttonClass.push('--warning');
    }

    if (isDisabled) {
        buttonClass.push('--disabled');
    }

    if (isInverse) {
        buttonClass.push('--inverse');
    }

    if (isSave) {
        buttonClass.push('--save ' + customSaveClasses);
    }

    return (
        <button
            type="button"
            className={buttonClass.join(' ')}
            aria-label={label}
            onClick={isSave ? setSave : clickHandler}
            {...props}
        >
            {isSave ? (
                <>
                    <div className="step1">
                        <span>Save</span>
                    </div>
                    <div className="step2">
                        <div className="ds-loading --small ds-mr-4">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <span>Saving</span>
                    </div>
                    <div className="step3">
                        <div className="checkmark animate"></div>
                        <span>Saved</span>
                    </div>
                </>
            ) : (
                type === 'icon' ? (
                    <span
                        className={`${iconClass}`}
                        aria-label={iconClass}
                        role="img"
                    ></span>
                ) : (
                    <>
                        {iconClass && !iconRight && (
                            <span
                                className={`${iconClass} --left`}
                                aria-label={iconClass}
                                role="img"
                            ></span>
                        )}
                        <span>{label}</span>
                        {iconClass && iconRight && (
                            <span
                                className={`${iconClass} --right`}
                                aria-label={iconClass}
                                role="img"
                            ></span>
                        )}
                    </>
                )
            )}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string,
    customClasses: PropTypes.string,
    iconClass: PropTypes.string,
    iconRight: PropTypes.bool,
    isDestructive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isInverse: PropTypes.bool,
    isSave: PropTypes.bool,
    clickHandler: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    type: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'icon']),
};
