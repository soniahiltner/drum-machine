/* eslint-disable react/prop-types */
import "./Power.css"

function Power({ value, handleToggle }) {
  return (
    <div>
      <button
        id="power"
        className="pad"
        onClick={handleToggle}
        style={{ backgroundColor: value && "#8e7758" }}
      >
        POWER
      </button>
    </div>
  );
}
export default Power;
