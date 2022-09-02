import menu from "../../assets/icon/menu.png";
export default function Navbar() {
  return (
    <div className="max-w-480 m-auto">
      <div className="fixed w-full md:w-base z-40 m-auto bg-blue flex justify-between px-6 py-4 text-white rounded-b-sm border-b font-bold">
        <div className="border-b">
          <h1>JujuApps</h1>
        </div>
        <button className="hover:opacity-50">
          <img src={menu} alt="" className="w-[18px] h-[18px] object-cover" />
        </button>
      </div>
    </div>
  );
}
