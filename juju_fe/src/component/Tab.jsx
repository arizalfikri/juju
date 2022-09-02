import { Link } from "react-router-dom";
import plus from "../assets/icon/plus.png";
import home from "../assets/icon/home.png";
import phone from "../assets/icon/phone-call.png";
import chat from "../assets/icon/chat.png";
import setting from "../assets/icon/setting.png";
export default function Tab({ page }) {
  return (
    <div className="w-full md:w-base flex gap-20 justify-center fixed bottom-0 border-t bg-white-1">
      <div className="m-auto flex gap-24 relative items-center py-3 text-[10px]">
        <div className="flex gap-6 z-40 items-center">
          <Link to={"/"} className="flex flex-col items-center gap-1">
            <img src={home} alt="" className="w-[18px] h-[18px] object-cover" />
            {page === "home" ? (
              <p className="bg-blue rounded-md px-2 text-white">Home</p>
            ) : (
              <p className="rounded-md px-2">Home</p>
            )}
          </Link>
          <Link to={"/call"} className="flex flex-col items-center gap-1">
            <img
              src={phone}
              alt=""
              className="w-[18px] h-[18px] object-cover"
            />
            {page === "calls" ? (
              <p className="bg-blue rounded-md px-2 text-white">Calls</p>
            ) : (
              <p className="rounded-md px-2">Calls</p>
            )}
          </Link>
        </div>
        <div className="absolute -top-2 right-0 left-0">
          <div className="flex flex-col items-center">
            <Link to={"/status"} className=" text-center">
              <img
                src={plus}
                alt=""
                className="m-auto bg-blue p-2 w-[35x] h-[35px] rounded-full drop-shadow object-cover"
              />
              Status
            </Link>
          </div>
        </div>
        <div className="flex gap-6 z-40 items-center">
          <Link to={"/chat"} className="flex flex-col items-center gap-1">
            <img src={chat} alt="" className="object-cover w-[18px] h-[18px]" />
            {page === "chat" ? (
              <p className="bg-blue rounded-md px-2 text-white">Chat</p>
            ) : (
              <p className="rounded-md px-2">Chat</p>
            )}
          </Link>
          <Link to={"/setting"} className="flex flex-col items-center gap-1">
            <img
              src={setting}
              alt=""
              className="object-cover w-[18px] h-[18px]"
            />
            {page === "setting" ? (
              <p className="bg-blue rounded-md px-2 text-white">Setting</p>
            ) : (
              <p className="rounded-md px-2">Setting</p>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
