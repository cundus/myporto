import { forwardRef } from "react";
import { Profile } from "../assets";

const Hero = forwardRef((props, ref) => {
  console.log(ref, "hero");
  return (
    <div
      ref={ref}
      className=" h-[30vh] md:h-[50vh] flex  justify-center items-center "
    >
      <img
        src={Profile}
        alt="pic"
        className="animate-bounce-in w-28 h-28 rounded-full border-2 border-white/50 object-cover object-right-top md:object-none md:object-top mr-8 md:mr-10 md:w-60 md:h-60 md:rounded-lg"
      />
      <div className="w-1/2 md:w-[18rem] animate-slide-in">
        <p className="text-4xl text-white font-mono">Hi!</p>
        <p className="md:text-2xl break-word text-white font-mono">
          I'm{" "}
          <span className="font-bold text-xl text-blue-500 md:text-3xl">
            Sundus
          </span>
          , a Frontend Developer based in Jakarta, Indonesia.
        </p>
      </div>
    </div>
  );
});

export default Hero;
