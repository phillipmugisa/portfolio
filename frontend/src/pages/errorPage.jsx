// react
import React from 'react';

// router
import { Link } from 'react-router-dom';

// components
import icons from '../components/utils/icons';

const ErrorPage = () => {
    return (
        <section className="container errors grid">
            <div className="error-icon">
                {icons.Error}
            </div>
            <h3 className="error-head">Opps! An Error Occured!</h3>
            <p className="error-type">Page Not Found (404)</p>
            <p className="error-sub">Please <Link to="/" className="link">Return to homepage.</Link></p>
        </section>
    );
}
 
export default ErrorPage;