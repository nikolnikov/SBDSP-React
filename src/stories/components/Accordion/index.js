'use client';

import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import AccordionMultipleItems from './AccordionMultipleItems';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const QDSAccordion = ({
    customClasses,
    openSingleItem,
    defaultExpanded = false,
    accordionContent = []
}) => {
    const [activeIndex, setActiveIndex] = useState(
        openSingleItem && defaultExpanded ? 0 : -1
    );

    const content = accordionContent.map((item, index) => {
        if (openSingleItem) {
            const isOpen = index === activeIndex;
            return (
                <AccordionItem
                    isExpanded={isOpen}
                    key={index}
                    title={item.title}
                    icon={item.icon}
                    content={item.content}
                    onClick={() =>
                        setActiveIndex(prev => (prev === index ? -1 : index))
                    }
                />
            );
        }

        return (
            <AccordionMultipleItems
                key={index}
                item={item}
                onClick={() => {}}
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
