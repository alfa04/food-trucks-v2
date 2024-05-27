import React, {useState} from 'react';
import LoadingSpinner from '../common/loading-spinner/LoadingSpinner';
import {useGetTrucks} from "../hooks/use-get-trucks/useGetTrucks";
import Header from "./common/list-header/Header";
import './Trucks.css';
import Controls from "./common/controls/Controls";

const Trucks = ({errorSimulationStatus, initialPage}) => {
    const [page, setPage] = useState(initialPage);
    const [itemsPerPage] = useState(10); // Add feature to make number of items dynamic
    const {data, isLoading} = useGetTrucks(page, itemsPerPage, errorSimulationStatus);

    return (
        isLoading ? <div className="loadingSpinner"><LoadingSpinner/></div> :

            data &&
            <>
                <Header>
                    Fresh Flavors on Wheels! Dare to 'Sc'roll!
                </Header>
                <div className="scrollableContent">
                    <div className="trucksList">
                        <div>
                            <ul>
                                {data.map(item => (
                                    <li key={item[':id']}>{item.applicant}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <Controls page={page} setPage={setPage} lastPage={data.length === 0}/>
            </>
    );
};

export default Trucks;