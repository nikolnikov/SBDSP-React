import React from 'react';
import DSHeader from '../components/Header';
import DSNavRail from '../components/NavRail';
import PropTypes from 'prop-types';

export const QDSRail = ({ 
    navItems, noHeader = true
}) => {
    return (
        <>
            {!noHeader && (
                <DSHeader
                    logo="https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg"
                    logoSize="small"
                    margins
                />
            )}
            <DSNavRail
                navItems={navItems}
                noHeader={noHeader}
            />
        </>
    );
};

QDSRail.propTypes = {
    navItems: PropTypes.array.isRequired,
    noHeader: PropTypes.bool
};