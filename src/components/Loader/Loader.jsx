import { InfinitySpin } from "react-loader-spinner";
import css from "./Loader.module.css";

function Loader() {
  return (
    <div className={css.loaderCon}>
      <InfinitySpin width="200"
color="#4fa94d"/>
      <p>Loading, please wait...</p>
    </div>
  );
}
export default Loader;
