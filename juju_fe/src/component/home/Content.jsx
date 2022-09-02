import "./css/content.css";
import more from "../../assets/icon/more.png";
import like from "../../assets/icon/like.png";
import { Link } from "react-router-dom";
export default function Content({ data, lastElement }) {
  return (
    <div className="flex flex-col gap-4 box-border">
      <div className="flex gap-4 justify-center text-xs text-center">
        <button className="w-[50px]">
          <p className="border-b-2 border-blue">All</p>
        </button>
        <button className="w-[50px]">
          <p>Friends</p>
        </button>
      </div>
      <div className="thisGrid pt-2 pb-6 w-full">
        {data.map((item, i) => {
          return (
            <div
              className="drop-shadow text-xs bg-white rounded-md transition-spacing duration-1000"
              key={i}
            >
              <div className="flex flex-col gap-2">
                <Link to={`/detail/${item.id}`}>
                  <img
                    src={item.urls.thumb}
                    alt=""
                    className="rounded-xl w-full h-full"
                  />
                </Link>
                <div className="flex w-full justify-between gap-1 items-center px-2 text-[10px]">
                  <p>{item.alt_description}</p>
                  <Link to={`/detail/${item.id}`}>
                    <img src={more} alt="" width={"16px"} height={"16px"} />
                  </Link>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded-md drop-shadow text-[8px] text-gray">
                  <div className="flex gap-2 items-center font-bold">
                    <img
                      src={item.user.profile_image.large}
                      alt=""
                      className="rounded-full w-[24px] h-[24px] border"
                    />
                    <p>{item.user.name}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img src={like} alt="" width={"12px"} height={"12px"} />
                    {item.likes}
                  </div>
                </div>
              </div>
            </div>
          );
          // }
        })}
      </div>
      <div ref={lastElement} className="m-auto p-2"></div>
    </div>
  );
}
