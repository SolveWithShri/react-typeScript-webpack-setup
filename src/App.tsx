import "./styles.css";

import IMAGE from "../assets/React.png";
import IMAGE_SVG from "../assets/React.svg";

export const App = () => {
  return (
    <>
      <h1>HI</h1>
      <img src={IMAGE} alt="React Logo" width={100} height={100} />
      <br />
      <img src={IMAGE_SVG} alt="React Logo" width={100} height={100} />
      <br />
      <div>
        <h1>process.env.name: {process.env.name}</h1>
        <h1>process.env.NODE_ENV: {process.env.NODE_ENV}</h1>
      </div>
    </>
  );
};
