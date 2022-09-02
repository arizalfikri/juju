import { useEffect, useRef, useState } from "react";
import SectionStatus from "../component/status/SectionStatus";
export default function Status() {
  const [length, setLength] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setLength(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className="max-w-480 m-auto drop-shadow">
      <SectionStatus carousel={carousel} length={length} />
    </div>
  );
}
