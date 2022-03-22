import React, { forwardRef } from "react";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";

const Footer = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="p-10 border-t-2 flex flex-col items-center  border-white/50 "
    >
      <div className="flex justify-center items-center text-white text-2xl font-mono">
        <a target="_blank" href="https://www.linkedin.com/in/sundusardian">
          <AiOutlineLinkedin className="mr-4 md:text-4xl text-2xl " />
        </a>
        <a target="_blank" href="https://www.github.com/cundus">
          <AiOutlineGithub className="mr-4 md:text-4xl text-2xl" />
        </a>
        <a target="_blank" href="mailto:sundusardian@gmail.com">
          <AiOutlineMail className=" md:text-4xl text-2xl" />
        </a>
      </div>
      <p className="text-sm font-thin font-mono mt-8 text-white ">
        Sundus Ardian ©2022
      </p>
    </div>
  );
});

export default Footer;
