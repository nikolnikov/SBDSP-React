import React, { useState } from 'react';
import DSSideSheet from '../components/SideSheet';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const SideSheet = ({ 
    customClasses = [],
    children,
    title,
}) => {
    const [sidesheetOpen, setSidesheetOpen] = useState(false);

    return (
        <>
            <button
            className="ds-button --primary"
            onClick={() => {
                setSidesheetOpen(true);
            }}
            >
            Open Side Sheet
            </button>

            <DSSideSheet
                customClasses={classNames(customClasses)}
                onClose={() => {
                    setSidesheetOpen(false);
                  }}
                opened={sidesheetOpen}
                title={title}
            >
                {children}
            </DSSideSheet>
        </>
    );
};

SideSheet.propTypes = {
    children: PropTypes.node,
    customClasses: PropTypes.string,
    title: PropTypes.string,
};