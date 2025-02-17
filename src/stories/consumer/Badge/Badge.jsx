import React from 'react';
import DSBadge from '../components/Badge'
import classNames from 'classnames';
import PropTypes from 'prop-types';

import '!style-loader!css-loader!sass-loader!../../assets/css/dsc.scss';

export const DSCBadge = ({ 
    customClasses = [], isSecondary = false, label, status = 'neutral'
}) => {
    return (
        <DSBadge
            customClasses={classNames(customClasses)}
            isSecondary={isSecondary}
            label={label}
            status={status}
        />
    );
};

DSCBadge.propTypes = {
    customClasses: PropTypes.array,
    isSecondary: PropTypes.bool,
    label: PropTypes.string,
    status: PropTypes.oneOf(['neutral', 'informative', 'success', 'warning', 'critical']),
};