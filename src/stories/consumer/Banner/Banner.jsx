import React from 'react';
import DSBanner from '../components/Banner';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '!style-loader!css-loader!sass-loader!../../assets/css/dsc.scss';

export const DSCBanner = ({ 
    children,
    dismissHandler = () => {},
    customClasses = [],
    icon,
    useBrandedIcon = false,
    isCentered = false,
    title
}) => {
    return (
        <DSBanner
            children={children}
            customClasses={classNames(customClasses)}
            dismissHandler={dismissHandler}
            icon={icon}
            useBrandedIcon={useBrandedIcon}
            isCentered={isCentered}
            title={title}
        />
    );
};

DSCBanner.propTypes = {
    children: PropTypes.node,
    dismissHandler: PropTypes.func,
    customClasses: PropTypes.string,
    icon: PropTypes.string,
    useBrandedIcon: PropTypes.bool,
    isCentered: PropTypes.bool,
    title: PropTypes.string
};