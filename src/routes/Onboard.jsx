import { useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { Footer, Hero, Navbar, Work } from "../components";

const Onboard = () => {
  const heroRef = useRef(null);
  const workRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <div className="relative bg-black">
      <Navbar hero={heroRef} work={workRef} contact={footerRef} />
      <Hero ref={heroRef} />
      <Work ref={workRef} />
      <Footer ref={footerRef} />
    </div>
  );
};

export default Onboard;
