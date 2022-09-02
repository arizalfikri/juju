import profile from "../../assets/icon/profile.png";
import chat from "../../assets/icon/chat-bubbles.png";
import notification from "../../assets/icon/notification.png";
import help from "../../assets/icon/help.png";
import conversation from "../../assets/icon/conversation.png";
import kucing from "../../assets/img/kucing.jpg";
import code from "../../assets/icon/qr-code.png";
export default function SectionSetting() {
  return (
    <div className="px-6 flex flex-col gap-6 mt-6">
      <div className="flex justify-between items-center drop-shadow bg-white text-sm border-b py-3 rounded-md px-4">
        <div className="flex gap-4 items-center">
          <img
            src={kucing}
            alt=""
            className="w-[50px] h-[50px] rounded-full drop-shadow object-cover"
          />
          <div className="flex flex-col gap-1">
            <p className="font-bold">Kucing Garong</p>
            <p className="text-xs text-gray">lagi pengen tidur Zzz</p>
          </div>
        </div>
        <div>
          <img src={code} alt="" className="w-[24px] h-[24px]" />
        </div>
      </div>
      <div className="flex flex-col gap-6 text-xs px-8  py-4 rounded-sm">
        <div className="flex gap-4 items-center">
          <img src={profile} alt="" className="w-[20px] h-[20px]" />
          <p>Account</p>
        </div>
        <div className="flex gap-4 items-center">
          <img src={chat} alt="" className="w-[20px] h-[20px]" />
          <p>Chat</p>
        </div>
        <div className="flex gap-4 items-center">
          <img src={notification} alt="" className="w-[20px] h-[20px]" />
          <p>Notification</p>
        </div>
        <div className="flex gap-4 items-center">
          <img src={help} alt="" className="w-[20px] h-[20px]" />
          <p>Help</p>
        </div>
        <div className="flex gap-4 items-center">
          <img src={conversation} alt="" className="w-[20px] h-[20px]" />
          <p>Tell a friend</p>
        </div>
      </div>
    </div>
  );
}
