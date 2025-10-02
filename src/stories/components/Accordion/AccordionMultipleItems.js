import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import PropTypes from 'prop-types';

const AccordionMultipleItems = ({ onClick, item, defaultExpanded }) => {
    const [isOpen, setOpen] = useState(defaultExpanded);

    const toggle = () => {
        onClick({ expanded: !isOpen, target: item });
        setOpen(() => !isOpen);
    };

    return (
        <AccordionItem
            isExpanded={isOpen}
            onClick={toggle}
            title={item.title}
            icon={item.icon}
            content={item.content}
        />
    );
};

AccordionMultipleItems.propTypes = {
    onClick: PropTypes.func,
    item: PropTypes.object,
    defaultExpanded: PropTypes.bool
};

export default AccordionMultipleItems;
