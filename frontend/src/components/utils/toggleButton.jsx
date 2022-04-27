import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';

const ToggleButton = ({defaultOn, defaultOff, onChange}) => {

    const [{switchState, selectedItem}, setState] = useState({switchState : true, selectedItem: defaultOn});

    useEffect(() => {
        onChange(selectedItem)
    }, [selectedItem])

    const handleChange = (passedArg) => {
        if (passedArg) {
            setState(state => {
                return {
                    switchState : passedArg,
                    selectedItem : passedArg ? defaultOn : defaultOff
                }
            });
        }
        else {
            setState(state => {
                return {
                    switchState : !state.switchState,
                    selectedItem : !state.switchState ? defaultOn : defaultOff
                }
            });
        }
    }

    return (
        <div className={`toggle-switch flex`}>
            <label
                className={`toggle-switch-options ${!switchState ? 'active' : ''}`}
                onClick={() => handleChange(false)}
            >
                {defaultOff}
            </label>
            <label className="switch">
                <input type="checkbox" checked = {switchState} onChange={() => handleChange()} />
                <span className="slider round"></span>
            </label>
            <label
                className={`toggle-switch-options ${switchState ? 'active' : ''}`}
                onClick={() => handleChange(true)}
            >
                {defaultOn}
            </label>
        </div>
    );
}
 
export default ToggleButton;

ToggleButton.propTypes = {
    defaultOn: PropTypes.string.isRequired,
    defaultOff: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}