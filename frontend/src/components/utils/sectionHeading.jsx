import React from 'react';
import PropTypes from 'prop-types';

const SectionHeading = ({headingText, classes}) => {
    return (
        <h3 className={`section-heading ${classes}`}>
            {headingText}
        </h3>
    );
}
 
export default SectionHeading;

SectionHeading.propTypes = {
    headingText: PropTypes.string.isRequired,
    classes: PropTypes.string,
}