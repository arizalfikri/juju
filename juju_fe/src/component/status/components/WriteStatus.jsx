import close from "../../../assets/icon/close.png";
import send from "../../../assets/icon/send.png";
export default function WriteStatus({ image, setWriteStatus }) {
  return (
    <div className="flex flex-col justify-center min-h-screen max-w-480 relative">
      <div className="absolute w-full h-full -z-20 bg-[#000000]"></div>
      <img src={image} alt="" className="absolute -z-10 object-cover" />
      <div className=" min-h-screen flex flex-col w-full justify-between">
        <div className="flex justify-between p-4">
          <button>
            <img
              src={close}
              alt=""
              onClick={() => setWriteStatus(false)}
              className="w-3 h-3 object-cover"
            />
          </button>
        </div>
        <div className="flex gap-4 w-full p-4 items-center text-xs">
          <input
            type="text"
            className="rounded-full w-4/5 border bg-white px-4 py-1"
            placeholder="Description..."
          />
          <button className="bg-blue-2 p-[7px] rounded-full w-7 items-center">
            <img src={send} alt="" className="object-cover w-full h-full" />
          </button>
        </div>
      </div>
    </div>
  );
}
