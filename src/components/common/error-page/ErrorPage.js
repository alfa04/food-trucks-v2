import React from 'react';
import './ErrorPage.css';

const ErrorFallbackPage = ({error, resetErrorBoundary}) => {
    return (
        <div className="errorPage">
            <h1>Oops! Something went wrong.</h1>
            <p>{error.message}</p>
            <div>
                <button className="retryButton" onClick={resetErrorBoundary}>
                    Retry
                </button>
            </div>
        </div>
    )
}

export default ErrorFallbackPage;