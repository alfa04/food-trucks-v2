import {useQuery} from '@tanstack/react-query';
import {fetchTrucksByOffset} from '../../../api/dataSFAPI';

export const useGetTrucks = (pageNumber, itemsPerPage, errorSimulationStatus) => {

    // Info: When the user firstly arrives at page number 15, an error is dispached
    if (pageNumber === 15 && errorSimulationStatus) {
        throw new Error("You firstly arrived at page number 15.");
    }

    if (pageNumber < 1 || itemsPerPage < 1) {
        throw new Error("Page number and items per page must be positive integers.");
    }

    const offset = (pageNumber - 1) * itemsPerPage;
    const limit = itemsPerPage;

    return useQuery({
        queryKey: ['trucks', offset, limit],
        queryFn: () => fetchTrucksByOffset(offset, limit),
    });
};
