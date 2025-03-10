'use client';

import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import AccordionMultipleItems from './AccordionMultipleItems';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const QDSAccordion = ({
    customClasses,
    openSingleItem,
    defaultExpanded,
    accordionContent
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
                onClick={toggle}
                header={item.header}
                icon={item.icon}
                content={item.content}
                key={index}
            />
        ) : (
            <AccordionMultipleItems
                item={item}
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

QDSAccordion.propTypes = {
    customClasses: PropTypes.string,
    openSingleItem: PropTypes.bool,
    defaultExpanded: PropTypes.bool,
    accordionContent: PropTypes.array
};

export default QDSAccordion;
