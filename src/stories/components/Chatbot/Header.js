import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import QDSIcon from '../Icon';
import QDSIconButton from '../Button/IconButton.index';

const QDSChatbotHeader = ({
    onClose,
    title,
    isExtended,
    showRestart = false,
    extend,
    restart,
    isScrolled = false
}) => {
    const extendIcon = isExtended ? 'arrows-in-simple' : 'arrows-out-simple';
    const extendTooltip = isExtended ? 'Collapse' : 'Expand';

    return (
        <div
            className={classNames('ds-chatbot__header', {
                '--scrolled': isScrolled
            })}
        >
            <div className="ds-chatbot__header-title">
                <QDSIcon name="ai" className="ds-mr-8" />

                <span>{title}</span>
            </div>

            <div className="ds-chatbot__header-actions">
                {showRestart && (
                    <QDSIconButton
                        icon="arrow-clockwise"
                        clickHandler={restart}
                        size="md"
                        tooltip="Restart chat"
                    />
                )}

                <QDSIconButton
                    icon={extendIcon}
                    clickHandler={extend}
                    size="md"
                    tooltip={extendTooltip}
                />

                <QDSIconButton
                    icon="close"
                    clickHandler={onClose}
                    size="md"
                    tooltip="Close"
                />
            </div>
        </div>
    );
};

QDSChatbotHeader.propTypes = {
    onClose: PropTypes.func,
    title: PropTypes.string,
    isExtended: PropTypes.bool,
    showRestart: PropTypes.bool,
    extend: PropTypes.func,
    restart: PropTypes.func,
    isScrolled: PropTypes.bool
};

export default QDSChatbotHeader;
