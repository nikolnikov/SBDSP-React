import React, { useEffect, useState } from 'react';
import DSButton from '../components/Button'
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSButton = ({ 
    customClasses = null,
    icon = null,
    iconRight = null,
    isCondensed = false,
    isDestructive = false,
    isDisabled = false,
    isInverse = false,
    isSave = false,
    label,
    size = 'lg',
    type = 'primary',
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

    const buttonClick = e => {
        e.preventDefault();
        console.log('Button Clicked');
    };

    return (
        <DSButton
            clickHandler={isSave ? setSave : buttonClick}
            customClasses={isSave ? `${customSaveClasses}` : classNames(customClasses)}
            icon={icon}
            iconRight={iconRight}
            isCondensed={isCondensed}
            isDestructive={isDestructive}
            isDisabled={isDisabled}
            isInverse={isInverse}
            isSave={isSave}
            label={label}
            size={size}
            type={type}
        />
    );
};

QDSButton.propTypes = {
    label: PropTypes.string,
    customClasses: PropTypes.string,
    icon: PropTypes.string,
    iconRight: PropTypes.string,
    isCondensed: PropTypes.bool,
    isDestructive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isInverse: PropTypes.bool,
    isSave: PropTypes.bool,
    clickHandler: PropTypes.func,
    size: PropTypes.oneOf(['sm', 'lg']),
    type: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'option'])
};
