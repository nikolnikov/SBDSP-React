'use client';

import React, { useRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import QDSIconButton from '../Button/IconButton.index';
import QDSOverlay from '../Overlay';

const QDSSideSheet = ({
    children,
    customClasses,
    isChatbot = false,
    onClose,
    opened,
    title
}) => {
    const sidesheetHeaderRef = useRef(null);

    const onSidesheetScroll = e => {
        const sidesheetScrollTop = e.currentTarget.scrollTop;
        if (!sidesheetHeaderRef.current) return; // Only applies when chatbot header is rendered
        if (sidesheetScrollTop > 0) {
            sidesheetHeaderRef.current.classList.add('--scrolled');
        } else {
            sidesheetHeaderRef.current.classList.remove('--scrolled');
        }
    };

    return (
        <>
            <div
                className={classNames('ds-sidesheet', customClasses, {
                    '--opened': opened,
                    '--chatbot': isChatbot
                })}
                onScroll={e => {
                    onSidesheetScroll(e);
                }}
            >
                {isChatbot ? (
                    children
                ) : (
                    <>
                        <div
                            className="ds-sidesheet__header"
                            ref={sidesheetHeaderRef}
                        >
                            <span>{title}</span>
                            <QDSIconButton
                                icon="close"
                                clickHandler={onClose}
                            />
                        </div>
                        <div className="ds-sidesheet__content">{children}</div>
                    </>
                )}
            </div>

            <QDSOverlay clickHandler={onClose} noScroll opened={opened} />
        </>
    );
};

QDSSideSheet.propTypes = {
    children: PropTypes.node,
    customClasses: PropTypes.string,
    opened: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string
};

export default QDSSideSheet;
