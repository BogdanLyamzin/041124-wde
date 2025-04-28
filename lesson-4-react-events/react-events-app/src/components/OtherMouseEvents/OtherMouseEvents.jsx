const OtherMouseEvents = () => {
  const handleDoubleClick = () => {
    console.log("Double click");
  };

  const handleMouseOver = () => {
    console.log("Mouse over");
  };

  const handleMouseOut = () => {
    console.log("Mouse out");
  };

  const handleMouseMove = () => {
    console.log("Mouse move");
  };

  return (
    <div>
      <p onDoubleClick={handleDoubleClick}>Double click event</p>
      <p onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        Mouse over/out event
      </p>
      <p onMouseMove={handleMouseMove}>
        Mouse move event
      </p>
    </div>
  );
};

export default OtherMouseEvents;
