import maintenance from "../assets/icon/maintenance.png";
export default function NotFound() {
  return (
    <div className="w-3/4 flex rounded-md drop-shadow gap-3 m-auto bg-white items-center p-3 mt-1/2">
      <div>
        <img src={maintenance} alt="" />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-bold">Sorry</h1>
        <p>Under Maintenance</p>
      </div>
    </div>
  );
}
