import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function ThreeDotsHabits() {
    return (
      <Loader
        type="ThreeDots"
        color="#fff"
        height={15}
        width={67}
        margin={0}
        timeout={5000} // secs
      />
    );
  }
