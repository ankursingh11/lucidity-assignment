import React from "react";
import {
  faCartShopping,
  faDollarSign,
  faCartArrowDown,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import KPICard from "./KPICard";

const KPI = ({ totalProducts, totalValue, outOfStock, category }) => {
  return (
    <div className="flex gap-2 justify-between flex-wrap">
      <KPICard
        icon={faCartShopping}
        title={"Total Products"}
        value={totalProducts}
      />
      <KPICard
        icon={faDollarSign}
        title={"Total Store Value"}
        value={totalValue}
      />
      <KPICard
        icon={faCartArrowDown}
        title={"Out of Stock"}
        value={outOfStock}
      />
      <KPICard
        icon={faLayerGroup}
        title={"No. of Category "}
        value={category}
      />
    </div>
  );
};

export default KPI;
