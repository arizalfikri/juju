import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex flex-col justify-center min-h-screen m-auto max-w-480 bg-white gap-8 items-center drop-shadow-base">
      <div className="text-blue font-bold text-lg">JUJU APPS</div>
      <div className="w-3/4">
        <form action="" className="flex flex-col gap-3 text-xs">
          <div className="flex flex-col text-gray">
            <label htmlFor="">No. Handphone</label>
            <input
              type="text"
              placeholder="ex: +6285xxx"
              className="bg-gray-1 py-2 px-4 border-l-4 border-blue"
            />
          </div>
          <div className="w-auto m-auto mt-4">
            <Link
              to={"/"}
              className="bg-blue rounded-md text-white py-2 px-6 hover:bg-blue-4"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
