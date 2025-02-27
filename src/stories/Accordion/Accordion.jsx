import React from 'react';
import DSAccordion from '../components/Accordion';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Accordion = ({ 
    customClasses,
    openSingleItem = false,
    defaultExpanded = false,
    accordionContent,
}) => {
    return (
        <DSAccordion
            customClasses={classNames(customClasses)}
            openSingleItem={openSingleItem}
            defaultExpanded={defaultExpanded}
            accordionContent={accordionContent}
        />
    );
};

Accordion.propTypes = {
    customClasses: PropTypes.string,
    openSingleItem: PropTypes.bool,
    defaultExpanded: PropTypes.bool,
    accordionContent: PropTypes.arrayOf(
        PropTypes.shape({
            header: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired
        })
    ).isRequired,
};