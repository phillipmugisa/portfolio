import React from 'react';

export const AlertWidget = ({alertType, alertMsg}) => {
    return (
        <>
            <div className={`alert-widget ${alertType}`}>
                <p className="error-msg">
                    {alertMsg}
                </p>
            </div>
        </>
    )
}