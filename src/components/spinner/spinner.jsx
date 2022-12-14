import { SLoadingSpinner } from "./spinner.style";
const LoadingSpinner = () => {
  return (
    <SLoadingSpinner>
      <div className="loading_spinner">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>{" "}
      </div>
    </SLoadingSpinner>
  );
};

export default LoadingSpinner;
