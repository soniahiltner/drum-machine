/* eslint-disable react/prop-types */
import "./Display.css"

const Display = ({ value }) => (
  <div id="display" className="lead">
    {value}
  </div>
);

export default Display;