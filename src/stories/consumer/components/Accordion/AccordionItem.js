import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const AccordionItem = ({
    onClick,
    content,
    header,
    isExpanded = false,
    isStandalone
}) => {
    const ariaExpanded = isExpanded ? 'true' : 'false';

    return (
        <div
            className={classNames('ds-accordion', {
                'is-active': isExpanded,
                '--standalone': isStandalone
            })}
        >
            <button
                className="ds-accordion__title"
                aria-expanded={ariaExpanded}
                onClick={() => onClick()}
                tabIndex="0"
            >
                <span className="accordion-title">{header}</span>
                <span className="ds-icon--expand" aria-label="expand"></span>
            </button>

            <div
                className={classNames('ds-accordion__content', {
                    'is-active': isExpanded
                })}
            >
                <div>{content}</div>
            </div>
        </div>
    );
};

AccordionItem.propTypes = {
    onClick: PropTypes.func,
    content: PropTypes.node,
    header: PropTypes.node,
    isExpanded: PropTypes.bool,
    isStandalone: PropTypes.bool
};

export default AccordionItem;
