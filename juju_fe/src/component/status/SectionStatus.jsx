import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import WriteStatus from "./components/WriteStatus";
import close from "../../assets/icon/close.png";
import flash from "../../assets/icon/flash.png";
import view from "../../assets/icon/view.png";
import switchCamera from "../../assets/icon/switch-camera.png";
export default function SectionStatus({ carousel, length }) {
  const data = useSelector((store) => store.dataReducer.data);
  const [img, setImg] = useState("");
  const webRef = useRef();
  const [writeStatus, setWriteStatus] = useState(false);
  const capture = useCallback(() => {
    const imageSrc = webRef.current.getScreenshot();
    setImg(imageSrc);
    setWriteStatus(true);
  }, [webRef]);
  const videoConstraints = {
    facingMode: "user",
  };
  if (!writeStatus) {
    return (
      <div className="flex flex-col min-h-screen justify-between relative">
        <div className="absolute w-full h-full -z-20 bg-[#000000]"></div>
        <div className="absolute w-full h-full -z-10">
          <Webcam
            ref={webRef}
            screenshotFormat="image/jpeg"
            className={"min-h-screen"}
            audio={false}
            videoConstraints={videoConstraints}
          />
        </div>
        <div className="flex justify-between gap-6 items-center px-4 py-4">
          <Link to={"/"}>
            <img
              src={close}
              alt=""
              className="h-[10px] w-[10px] object-cover"
            />
          </Link>
          <img src={flash} alt="" className="h-[14px] w-[14px] object-cover" />
        </div>
        <motion.div>
          <motion.div
            ref={carousel}
            className="carousel  overflow-hidden cursor-grab max-w-base mb-2"
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -length }}
              className="flex gap-2 w-full h-full"
            >
              {data.map((el, i) => {
                return (
                  <motion.img
                    key={i}
                    src={el.urls.thumb}
                    alt=""
                    className="rounded-md max-h-[50px] object-cover min-w-[90px]"
                  />
                );
              })}
            </motion.div>
          </motion.div>
          <motion.div className="flex justify-between items-center px-10 py-2">
            <motion.img src={view} alt="" />
            <motion.button
              className="w-[50px] h-[50px] border-2 rounded-full hover:bg-red-800"
              onClick={capture}
            ></motion.button>
            <motion.img src={switchCamera} alt="" />
          </motion.div>
        </motion.div>
      </div>
    );
  } else {
    return <WriteStatus setWriteStatus={setWriteStatus} image={img} />;
  }
}
