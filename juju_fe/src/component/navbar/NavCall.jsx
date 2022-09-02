import call from "../../assets/icon/call.png";
export default function NavCall() {
  return (
    <div className="max-w-480 m-auto">
      <div className="fixed z-40 text-white md:w-base w-full m-auto bg-blue flex justify-between px-6 py-4">
        <div className="border-b">
          <h1>JujuApps</h1>
        </div>
        <div className="flex items-center font-normal text-xs text-center gap-1 mr-2">
          <div className="w-[60px]  text-black bg-white px-2 rounded-md">
            All
          </div>
          <div className="w-[60px] px-2 rounded-md">missed</div>
        </div>
        <div className="flex items-center">
          <img src={call} alt="" className="object-cover w-[18px] h-[18px]" />
        </div>
      </div>
    </div>
  );
}
