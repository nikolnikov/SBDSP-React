'use client';

import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';
import Button from '../Button';
import Overlay from '../Overlay';

const Modal = ({
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
            <div
                className={classNames('ds-modal ds-flex --row --wrap', {
                    '--alert': status === 'alert',
                    '--error': status === 'error',
                    '--informative': status === 'informative',
                    '--opened': opened
                })}
            >
                <div className="ds-modal__header">
                    {!hideX && (
                        <Button
                            ariaLabel="close"
                            type="icon"
                            medium
                            clickHandler={modalClose}
                        >
                            <span
                                className="ds-icon--close"
                                aria-label="close"
                            ></span>
                        </Button>
                    )}
                </div>

                <div className="ds-modal__content">
                    <h2>{title}</h2>

                    {children}
                </div>

                <div className="ds-modal__actions">
                    {ghostButtonLabel && (
                        <Button
                            ariaLabel={ghostButtonLabel}
                            type="ghost"
                            clickHandler={ghostButtonHandler}
                        >
                            {ghostButtonLabel}
                        </Button>
                    )}

                    {secondaryButtonLabel && (
                        <Button
                            ariaLabel={secondaryButtonLabel}
                            type="secondary"
                            clickHandler={secondaryButtonHandler}
                        >
                            {secondaryButtonLabel}
                        </Button>
                    )}

                    {buttonLabel && (
                        <Button
                            ariaLabel={buttonLabel}
                            clickHandler={buttonHandler}
                        >
                            {buttonLabel}
                        </Button>
                    )}
                </div>
            </div>

            <Overlay opened={opened} noScroll />
        </>
    );
};

Modal.propTypes = {
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
    title: propTypes.string.isRequired
};

export default Modal;
