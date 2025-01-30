'use client';

import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';
import Button from '../Button';
import MuiModal from '@mui/material/Modal';

const Modal = ({
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
    status,
    title
}) => {
    return (
        <>
            <MuiModal
                open={opened}
                onClose={backdropClickable ? modalClose : null}
                aria-labelledby={title || 'modal'}
            >
                <div
                    className={classNames('ds-modal', {
                        '--alert': status === 'alert',
                        '--error': status === 'error',
                        '--informative': status === 'informative',
                        '--opened': opened
                    })}
                >
                    <div className="ds-modal__header">
                        <h1>{title}</h1>

                        {!hideX && (
                            <Button
                                ariaLabel="close"
                                iconClass="ds-icon--close"
                                type="icon"
                                size="medium"
                                clickHandler={modalClose}
                            />
                        )}
                    </div>

                    <div className="ds-modal__content">{children}</div>

                    <div className="ds-modal__actions">
                        {ghostButtonLabel && (
                            <Button
                                ariaLabel={ghostButtonLabel}
                                label={ghostButtonLabel}
                                type="ghost"
                                clickHandler={ghostButtonHandler}
                            />
                        )}

                        <div className="ds-modal__actions-right">
                            {secondaryButtonLabel && (
                                <Button
                                    ariaLabel={secondaryButtonLabel}
                                    label={secondaryButtonLabel}
                                    type="secondary"
                                    clickHandler={secondaryButtonHandler}
                                />
                            )}

                            {buttonLabel && (
                                <Button
                                    ariaLabel={buttonLabel}
                                    label={buttonLabel}
                                    clickHandler={buttonHandler}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </MuiModal>
        </>
    );
};

Modal.propTypes = {
    backdropClickable: propTypes.bool,
    buttonHandler: propTypes.func,
    buttonLabel: propTypes.string,
    children: propTypes.node.isRequired,
    ghostButtonHandler: propTypes.func,
    ghostButtonLabel: propTypes.string,
    hideX: propTypes.bool,
    linkLabel: propTypes.string,
    modalClose: propTypes.func,
    opened: propTypes.bool,
    secondaryButtonHandler: propTypes.func,
    secondaryButtonLabel: propTypes.string,
    status: propTypes.oneOf(['alert', 'error', 'informative']),
    title: propTypes.string
};

export default Modal;
