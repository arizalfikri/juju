import { Link, useParams } from "react-router-dom";
import arrowDown from "../assets/icon/arrow-down.png";
import more from "../assets/icon/more-white.png";
import back from "../assets/icon/back.png";
import addFriend from "../assets/icon/add-friend-white.png";
import bookmark from "../assets/icon/bookmark.png";
import shopping from "../assets/icon/shopping.png";
import upload from "../assets/icon/upload.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneData } from "../store/actions/action";
import AnimateLoading from "../component/AnimateLoading";
export default function Detail() {
  let { id } = useParams();
  const data = useSelector((store) => store.dataReducer.oneData);
  const [isLoading, setLoading] = useState(true);
  const [down, setDown] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOneData(id)).then(() => {
      setLoading(false);
    });
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className="mt-32">
          <AnimateLoading />
        </div>
      ) : (
        <div className="bg-cover m-auto bg-no-repeat min-h-screen max-w-480 flex flex-col justify-between drop-shadow text-xs">
          <img
            src={data.urls.regular}
            alt=""
            className="absolute -z-40 h-full w-full object-cover"
          />
          <div className="flex justify-between px-8 pt-6">
            <Link to={"/"}>
              <img
                src={back}
                alt=""
                className="w-[24px] h-[24px] object-cover hover:opacity-75"
              />
            </Link>
            <div>
              <img
                src={more}
                alt=""
                className="w-[24px] h-[24px] object-cover hover:opacity-75"
              />
            </div>
          </div>{" "}
          {down ? (
            <div className="bg-white-1 h-8 w-full transition-height duration-500 flex items-center">
              <button onClick={() => setDown(false)} className="m-auto">
                <img src={upload} alt="" className="w-4 h-4 object-cover" />
              </button>
            </div>
          ) : (
            <div className="bg-white-1 transition-height duration-500 drop-shadow h-56 relative rounded-t-2xl flex flex-col items-center">
              <button onClick={() => setDown(true)} className="z-10">
                <img
                  src={arrowDown}
                  alt=""
                  className="h-[20px] w-[20px] object-cover"
                />
              </button>
              <div className="absolute bottom-0 pb-3">
                <div className="flex flex-col w-full h-auto p-4 gap-2 mt-2">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                      <img
                        src={data.user.profile_image.medium}
                        alt="profile"
                        className="rounded-full h-[50px] w-[50px] object-cover border"
                      />
                      <div>
                        <p className="font-bold">{data.user.name}</p>
                        <p className="text-[10px]">
                          {data.user.total_photos} photos
                        </p>
                      </div>
                    </div>
                    <button className="flex gap-1 items-center bg-blue rounded-md px-2 py-1 text-white hover:bg-blue-2">
                      <img
                        src={addFriend}
                        alt=""
                        className="w-[14px] h-[14px]"
                      />
                      <p>follow</p>
                    </button>
                  </div>
                  <div className="flex flex-col gap-1 overflow-auto max-h-24">
                    <h1 className="font-bold">Judul</h1>
                    <p className="text-[10px]">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Cupiditate beatae sit facilis voluptatem aut velit,
                      laudantium adipisci libero modi, possimus amet temporibus
                      nulla blanditiis quasi iusto earum fuga, excepturi
                      repudiandae. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Maxime animi cumque aut earum voluptatum
                      sed pariatur cum corporis repudiandae temporibus. Rem,
                      quae at reprehenderit eos ea molestiae sequi nihil
                      numquam. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Ipsum, esse ea in ratione nam sapiente
                      illo maiores fuga amet recusandae possimus, sunt soluta,
                      temporibus non aliquid ut repudiandae tempore corrupti.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row-reverse px-6">
                  <div className="flex gap-3 items-">
                    <button className="flex gap-1 opacity-90 hover:opacity-100">
                      <img
                        src={bookmark}
                        alt=""
                        className="w-3 h-3 object-cover"
                      />
                      Save
                    </button>
                    <button className="flex gap-1 opacity-90 hover:opacity-100">
                      <img
                        src={shopping}
                        alt=""
                        className="w-3 h-3 object-cover"
                      />
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
