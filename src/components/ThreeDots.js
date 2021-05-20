import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function ThreeDots() {
    return (
      <Loader
        type="ThreeDots"
        color="#fff"
        height={40}
        width={80}
        margin={0}
        timeout={5000} //3 secs
      />
    );
  }


