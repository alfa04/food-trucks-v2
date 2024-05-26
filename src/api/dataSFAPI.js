export const fetchTrucksByOffset = async (offset, limit) => {
    const response = await fetch(`https://data.sfgov.org/api/id/rqzj-sfat.json?$query=select%20*%2C%20%3Aid%20offset%20${offset}%20limit%20${limit}`);

    if (!response.ok) {
        throw new Error('Network response was not ok'); // Add error boundary
    }

    return response.json();

};