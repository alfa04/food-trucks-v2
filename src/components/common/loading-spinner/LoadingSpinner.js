import { TailSpin } from "react-loader-spinner";
const LoadingSpinner = () => {
    return (
        <TailSpin
            height="80"
            width="80"
            color="#ccc"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    );
};
export default LoadingSpinner;