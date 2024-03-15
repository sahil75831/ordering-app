import React from "react";

function SectionHeaders({ subHeader, mainHeader }) {
  return (
    <>
      <h3 className="text-primary text-2xl">{mainHeader}</h3>
      <h6 className="text-gray-500 text-xl font-medium"> {subHeader}</h6>
    </>
  );
}

export default SectionHeaders;
