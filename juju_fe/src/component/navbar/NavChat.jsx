import message from "../../assets/icon/message.png";
export default function NavChat() {
  return (
    <div className="max-w-480 m-auto">
      <div className="fixed z-40 m-auto md:w-base text-white bg-blue  px-6 w-full py-4">
        <div className="flex justify-between">
          <div className="border-b font-bold">
            <h1>JujuApps</h1>
          </div>
          <button>
            <img src={message} alt="" className="object-cover" />
          </button>
        </div>
      </div>
    </div>
  );
}
