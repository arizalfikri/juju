import NavSetting from "../component/navbar/NavSetting";
import SectionSetting from "../component/setting/SectionSetting";
import Tab from "../component/Tab";

export default function Setting() {
  return (
    <div className="max-w-480 m-auto bg-white min-h-screen box-border drop-shadow">
      <NavSetting />
      <SectionSetting />
      <Tab page={"setting"} />
    </div>
  );
}
