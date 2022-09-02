import "../component/css/detail.css";
import kucing from "../assets/img/kucing.jpg";
import search from "../assets/icon/search.png";
export default function ListContact({ description }) {
  const length = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <div>
      <div className="pt-[5.8em] pb-2 bg-blue text-xs px-6 w-full">
        <div className="relative items-center">
          <input
            type="text"
            placeholder="Search"
            className="p-2 rounded-sm text-white w-full bg-[#36376b]"
          />
          <img
            src={search}
            alt=""
            className="absolute right-[11px] top-3 w-[12px] h-[12px] object-cover "
          />
        </div>
      </div>
      <div className="max-w-480 bg-white m-auto min-h-screen flex flex-col gap-8 pt-5 pb-20 px-6">
        {length.map((element) => {
          return (
            <a
              href=""
              key={element}
              className="flex justify-between items-center w-full text-[10px] text-gray"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={kucing}
                  alt=""
                  className="rounded-full w-[45px] h-[45px] object-cover"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-black text-xs">Joe</h3>
                  <p>
                    {description.length > 50
                      ? description.slice(0, 50) + "..."
                      : description}
                  </p>
                </div>
              </div>
              <div className="text-[8px]">11.56</div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
