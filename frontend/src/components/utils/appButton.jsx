import React from 'react';
import PropTypes from 'prop-types';

function AppButton(props) {
    const classes = props.classes || '';
    const text = props.text;
    const disabled = props.disabled || false;

    return (
        <button
            className = {`btn ${classes}`}
            disabled = {disabled}
        >
            {text ? text : props.children}
        </button>
    );
}

AppButton.propTypes = {
    classes : PropTypes.string.isRequired,
    text : PropTypes.string,
    disabled : PropTypes.bool,
    onClickUrl : PropTypes.string
};


export default AppButton;