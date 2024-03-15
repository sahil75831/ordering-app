import React from "react";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";
function HomeMenu() {
  return (
    <section>
      <div className=" text-center mb-4 ">
        <SectionHeaders mainHeader={"Check Out"} subHeader={"Menu"} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}

export default HomeMenu;
