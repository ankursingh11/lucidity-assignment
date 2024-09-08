import React, { useState } from "react";
import useInventoryData from "../utils/useInventoryData";
import { DUMMY_DATA } from "../constants/dummyData";
import KPI from "./KPISection";
import InventoryTable from "./Table";
import {
  findTotalProduts,
  findTotalValue,
  findOutOfStock,
  findCategory,
} from "../utils/utilFunctions";
import EditModal from "./EditModal";

const Body = () => {
  // const data = useInventoryData();
  const [inventoryData, setInventoryData] = useState(DUMMY_DATA);
  const [totalProducts, setTotalProducts] = useState(() =>
    findTotalProduts(inventoryData)
  );
  const [totalValue, setTotalValue] = useState(() =>
    findTotalValue(inventoryData)
  );
  const [outOfStock, setOutOfStock] = useState(() =>
    findOutOfStock(inventoryData)
  );
  const [category, setCategory] = useState(() => findCategory(inventoryData));
  const [showModal, setShowModal] = useState(false);
  const [x, setX] = useState(0);

  return (
    <div>
      {showModal && (
        <EditModal
          x={x}
          setShowModal={setShowModal}
          inventoryData={inventoryData}
          setInventoryData={setInventoryData}
          setTotalProducts={setTotalProducts}
          setTotalValue={setTotalValue}
          setOutOfStock={setOutOfStock}
          setCategory={setCategory}
        />
      )}

      <div className={"m-6" + (showModal ? " opacity-50" : "")}>
        <div className="text-4xl my-7">Inventory stats</div>
        <KPI
          totalProducts={totalProducts}
          totalValue={totalValue}
          outOfStock={outOfStock}
          category={category}
        />
        <InventoryTable
          inventoryData={inventoryData}
          setInventoryData={setInventoryData}
          setTotalProducts={setTotalProducts}
          setTotalValue={setTotalValue}
          setOutOfStock={setOutOfStock}
          setCategory={setCategory}
          showModal={showModal}
          setShowModal={setShowModal}
          setX={setX}
        />
      </div>
    </div>
  );
};

export default Body;
