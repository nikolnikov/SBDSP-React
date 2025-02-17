import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import PropTypes from 'prop-types';

const AccordionMultipleItems = ({
    onClick,
    item,
    defaultExpanded,
    isStandalone
}) => {
    const [isOpen, setOpen] = useState(defaultExpanded);

    const toggle = () => {
        onClick({ expanded: !isOpen, target: item });
        setOpen(() => !isOpen);
    };

    return (
        <AccordionItem
            isExpanded={isOpen}
            onClick={toggle}
            header={item.header}
            content={item.content}
            isStandalone={isStandalone}
        />
    );
};

AccordionMultipleItems.propTypes = {
    onClick: PropTypes.func,
    item: PropTypes.object,
    defaultExpanded: PropTypes.bool
};

export default AccordionMultipleItems;
