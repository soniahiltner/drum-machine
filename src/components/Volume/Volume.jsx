/* eslint-disable react/prop-types */
import "./Volume.css"

function Volume({ volumeval, handleVolume }) {
  return (
    <div className="slider">
      <input
        type="range"
        min="0.0"
        max="1.0"
        step="0.01"
        value={volumeval}
        onChange={handleVolume}
      />
    </div>
  );
}
export default Volume;
