import React from 'react';
import PropTypes from 'prop-types';

function AppButton(props) {
    const classes = props.classes || '';
    const text = props.text;
    const disabled = props.disabled || false;
    const onClickHandler = props.onClick;

    return (
        <button
            className = {`btn ${classes}`}
            disabled = {disabled}
            onClick={onClickHandler}
        >
            {text ? text : props.children}
        </button>
    );
}

AppButton.propTypes = {
    classes : PropTypes.string.isRequired,
    text : PropTypes.string,
    disabled : PropTypes.bool,
    onClickUrl : PropTypes.string,
    onClickHandler : PropTypes.func,
};


export default AppButton;