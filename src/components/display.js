import React from "react";
import '../stylesheets/display.css';

const Display = ({value}) => (
    <div id="display" className="lead">{value}</div>
);

export default Display;