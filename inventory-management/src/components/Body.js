import React, { useState } from "react";
import useInventoryData from "../utils/useInventoryData";
import { DUMMY_DATA } from "../constants/dummyData";
import KPI from "./KPISection";
import InventoryTable from "./Table";

function findCategory() {
  const st = new Set();
  DUMMY_DATA.forEach((item) => {
    st.add(item.category);
  });
  return st.size;
}

const Body = () => {
  // const data = useInventoryData();
  const [inventoryData, setInventoryData] = useState(DUMMY_DATA);
  const [totalProducts, setTotalProducts] = useState(DUMMY_DATA.length);
  const [totalValue, setTotalValue] = useState(
    DUMMY_DATA.reduce((acc, item) => {
      const itemValue = parseFloat(item.value.replace("$", ""));
      return acc + itemValue;
    }, 0)
  );
  const [outOfStock, setOutOfStock] = useState(
    DUMMY_DATA.filter((item) => item.quantity === 0).length
  );
  const [category, setCategory] = useState(() => findCategory());

  return (
    <div className="m-6">
      <div className="text-4xl my-7">Inventory stats</div>
      <KPI
        totalProducts={totalProducts}
        totalValue={totalValue}
        outOfStock={outOfStock}
        category={category}
      />
      <InventoryTable inventoryData={inventoryData} setInventoryData = {setInventoryData}/>
    </div>
  );
};

export default Body;
