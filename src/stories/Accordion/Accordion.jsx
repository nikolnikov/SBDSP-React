import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Accordion = ({ 
    customClasses,
    openSingleItem = true,
    isExpanded = false,
    accordionContent,
}) => {
    const [activeIndex, setActiveIndex] = useState(isExpanded ? 0 : -1);
    const [openStates, setOpenStates] = useState(
        accordionContent.map(() => isExpanded)
    );

    const toggle = index => {
        if (openSingleItem) {
            setActiveIndex(activeIndex === index ? -1 : index);
        } else {
            setOpenStates(prevStates => {
                const newStates = [...prevStates];
                newStates[index] = !newStates[index];
                return newStates;
            });
        }
    };

    const accordionClass = classNames('ds-accordion__wrapper', customClasses);

    return (
        <div className={accordionClass}>
            {accordionContent.map((item, index) => {
                const isOpen = openSingleItem ? index === activeIndex : openStates[index];
                const ariaExpanded = isOpen ? 'true' : 'false';

                return (
                    <div
                        key={index}
                        className={classNames('ds-accordion', {
                            '--expanded': isOpen
                        })}
                    >
                        <button
                            className="ds-accordion__title"
                            aria-expanded={ariaExpanded}
                            onClick={() => toggle(index)}
                            tabIndex="0"
                        >
                            <span>{item.header}</span>
                            <span className="ds-icon--expand" aria-label="expand"></span>
                        </button>

                        <div
                            className={classNames('ds-accordion__content', {
                                '--expanded': isOpen
                            })}
                        >
                            <div>{item.content}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

Accordion.propTypes = {
    customClasses: PropTypes.string,
    openSingleItem: PropTypes.bool,
    isExpanded: PropTypes.bool,
    accordionContent: PropTypes.arrayOf(
        PropTypes.shape({
            header: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired
        })
    ).isRequired,
};