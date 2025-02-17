'use client';

import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import AccordionMultipleItems from './AccordionMultipleItems';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Accordion = ({
    accordionContent,
    customClasses,
    defaultExpanded,
    isStandalone,
    openSingleItem
}) => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const content = accordionContent.map((item, index) => {
        const isOpen = index === activeIndex;

        const toggle = () => {
            if (isOpen) {
                index = -1;
            }

            setActiveIndex(index);
        };

        return openSingleItem ? (
            <AccordionItem
                isExpanded={isOpen}
                isStandalone={isStandalone}
                onClick={toggle}
                header={item.header}
                content={item.content}
                key={index}
            />
        ) : (
            <AccordionMultipleItems
                item={item}
                isStandalone={isStandalone}
                onClick={toggle}
                key={index}
                defaultExpanded={defaultExpanded}
            />
        );
    });

    return (
        <div className={classNames('accordion', customClasses)}>{content}</div>
    );
};

Accordion.propTypes = {
    accordionContent: PropTypes.array,
    customClasses: PropTypes.string,
    defaultExpanded: PropTypes.bool,
    isStandalone: PropTypes.bool,
    openSingleItem: PropTypes.bool
};

export default Accordion;
