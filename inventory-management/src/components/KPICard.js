import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const KPICard = ({ icon, title, value }) => {
  return (
    <div className="bg-[#243324] flex p-5 rounded-lg w-[20rem]">
      <div>
        <FontAwesomeIcon icon={icon} className="text-xl" />
      </div>
      <div className="ml-5">
        <p>{title}</p>
        <p className="text-4xl">{value.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default KPICard;
