import Content from "../component/home/Content";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useCallback, useEffect, useState, useRef } from "react";
import { fetchData, sendCode } from "../store/actions/action";
import Tab from "../component/Tab";
import Navbar from "../component/navbar/Navbar";
import AnimateLoading from "../component/AnimateLoading";
import NotFound from "../component/NotFound";
export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [isError, setError] = useState(false);
  const [newdata, setData] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const dispatch = useDispatch();
  const listen = useRef();
  const lastElement = useCallback(
    (node) => {
      if (listen.current) listen.current.disconnect();
      listen.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && showMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) listen.current.observe(node);
    },
    [page, showMore]
  );
  useEffect(() => {
    dispatch(fetchData(page))
      .then((result) => {
        setLoading(true);
        return result;
      })
      .then((data) => {
        console.log(data, "<<<<<");
        setData((prev) => prev.concat(data));
        setShowMore(true);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  }, [page]);
  const show = () => {
    if (isError) {
      return <NotFound />;
    } else if (isLoading) {
      return <AnimateLoading />;
    }
    if (!isLoading && !isError) {
      return <Content data={newdata} lastElement={lastElement} />;
    }
  };
  return (
    <div className="max-w-480 m-auto">
      <Navbar />
      <div className="max-w-480 bg-white drop-shadow-base m-auto py-20 min-h-screen justify-center">
        {show()}
      </div>
      <Tab page={"home"} />
    </div>
  );
}
