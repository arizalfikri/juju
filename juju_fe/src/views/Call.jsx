import ListContact from "../component/ListContact";
import NavCall from "../component/navbar/NavCall";
import Tab from "../component/Tab";

export default function Call() {
  return (
    <div className="max-w-480 m-auto bg-white min-h-screen box-border">
      <NavCall />
      <ListContact description={"Missed"} />
      <Tab page={"calls"} />
    </div>
  );
}
