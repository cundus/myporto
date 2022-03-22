import { forwardRef } from "react";

const Work = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="h-[150vh] ">
      Work
    </div>
  );
});

export default Work;
