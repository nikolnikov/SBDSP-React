'use client';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';

const HeaderTopBar = ({ topBarData }) => {
    return (
        <div className="ds-topbar --react">
            <div className="ds-row --margins">
                {(topBarData || []).map((navItem, idx) => (
                    <a
                        key={idx}
                        href={navItem.route}
                        className="ds-link --inverse"
                    >
                        {navItem.label}
                    </a>
                ))}

                <Button customClasses="ds-topbar__account" type="icon">
                    <span>LS</span>
                    <span
                        className="ds-icon--user-circle"
                        aria-label="user-circle"
                    ></span>
                </Button>
            </div>
        </div>
    );
};

HeaderTopBar.propTypes = {
    topBarData: PropTypes.array
};

export default HeaderTopBar;
