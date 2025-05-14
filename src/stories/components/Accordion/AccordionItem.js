import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const AccordionItem = ({
    onClick,
    content,
    title,
    icon,
    isExpanded = false
}) => {
    const ariaExpanded = isExpanded ? 'true' : 'false';

    return (
        <div
            className={classNames('ds-accordion', {
                '--expanded': isExpanded
            })}
        >
            <button
                className="ds-accordion__title"
                aria-expanded={ariaExpanded}
                onClick={() => onClick()}
                tabIndex="0"
            >
                <div className="ds-accordion__title-wrapper">
                    {icon && (
                        <span
                            className={`ds-icon--${icon}`}
                            aria-label={icon}
                        ></span>
                    )}
                    {title}
                </div>
                <span className="ds-icon--expand" aria-label="expand"></span>
            </button>

            <div
                className={classNames('ds-accordion__content', {
                    '--expanded': isExpanded
                })}
            >
                <div>{content}</div>
            </div>
        </div>
    );
};

AccordionItem.propTypes = {
    icon: PropTypes.string,
    onClick: PropTypes.func,
    content: PropTypes.node,
    title: PropTypes.node,
    isExpanded: PropTypes.bool
};

export default AccordionItem;
