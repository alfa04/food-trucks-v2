import React, {useState} from 'react';
import {ErrorBoundary} from 'react-error-boundary'
import Trucks from "../trucks-list/Trucks";
import ErrorFallbackPage from "../common/error-page/ErrorPage";
import './EReader.css';

const EReader = () => {
    const [errorSimulationStatus, setErrorSimulationStatus] = useState(true);
    const [initialPage, setInitialPage] = useState(1);

    // Info: The following handle reset will work as a force re-render for our error simulation
    function handleReset() {
        setErrorSimulationStatus(false);
        setInitialPage(15);
    }

    return (
        <div className="eReaderWrapper">
            <div className="eReaderFrame">
                <ErrorBoundary
                    FallbackComponent={ErrorFallbackPage}
                    onReset={handleReset}
                >
                    <Trucks errorSimulationStatus={errorSimulationStatus} initialPage={initialPage}/>
                </ErrorBoundary>
            </div>
        </div>

    );
};

export default EReader;