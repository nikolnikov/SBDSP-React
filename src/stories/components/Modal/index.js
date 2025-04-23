'use client';

import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';
import QDSButton from '../Button';
import QDSIconButton from '../Button/IconButton.index';
import MuiModal from '@mui/material/Modal';

const QDSModal = ({
    backdropClickable = true,
    buttonHandler,
    buttonLabel,
    children,
    ghostButtonHandler,
    ghostButtonLabel,
    hideX,
    modalClose,
    opened,
    secondaryButtonHandler,
    secondaryButtonLabel,
    title,
    type
}) => {
    return (
        <MuiModal
            open={opened}
            onClose={backdropClickable ? modalClose : null}
            aria-label={title || 'modal'}
            role="dialog"
        >
            <div
                className={classNames('ds-modal', {
                    '--alert': type === 'alert',
                    '--error': type === 'error',
                    '--informative': type === 'informative',
                    '--opened': opened
                })}
            >
                <div className="ds-modal__header">
                    <h1>{title}</h1>

                    {!hideX && (
                        <QDSIconButton
                            icon="close"
                            size="md"
                            clickHandler={modalClose}
                        />
                    )}
                </div>

                <div className="ds-modal__content">{children}</div>

                <div className="ds-modal__actions">
                    {ghostButtonLabel && (
                        <QDSButton
                            label={ghostButtonLabel}
                            type="ghost"
                            clickHandler={ghostButtonHandler}
                        />
                    )}

                    <div className="ds-modal__actions-right">
                        {secondaryButtonLabel && (
                            <QDSButton
                                label={secondaryButtonLabel}
                                type="secondary"
                                clickHandler={secondaryButtonHandler}
                            />
                        )}

                        {buttonLabel && (
                            <QDSButton
                                label={buttonLabel}
                                clickHandler={buttonHandler}
                            />
                        )}
                    </div>
                </div>
            </div>
        </MuiModal>
    );
};

QDSModal.propTypes = {
    backdropClickable: propTypes.bool,
    buttonHandler: propTypes.func,
    buttonLabel: propTypes.string,
    children: propTypes.node.isRequired,
    ghostButtonHandler: propTypes.func,
    ghostButtonLabel: propTypes.string,
    hideX: propTypes.bool,
    modalClose: propTypes.func,
    opened: propTypes.bool,
    secondaryButtonHandler: propTypes.func,
    secondaryButtonLabel: propTypes.string,
    title: propTypes.string,
    type: propTypes.oneOf(['alert', 'error', 'informative'])
};

export default QDSModal;
