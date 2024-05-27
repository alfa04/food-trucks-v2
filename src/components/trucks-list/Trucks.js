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
    //return <LoadingSpinner />

    /*dd nomponent to naviga, sisable control when no more pages, and change de number of truck per page, filter just truck with button instead???*/
//Add use key for the key
    //- 481 -return empty the query
    //esta a partir quando nao carrega e fazemos refresh, temos de resetar qquer coisa, ver kent, remover a validação de data, tem de ser um reset

//<ErrorPage message={error}>Error</ErrorPage>

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