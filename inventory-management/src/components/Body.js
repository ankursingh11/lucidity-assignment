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
import { useSelector } from "react-redux";

const Body = () => {
  const data = useInventoryData();
  const [inventoryData, setInventoryData] = useState(() => data.length ? data : DUMMY_DATA);
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
  const showEditModal = useSelector((store) => store.modal.showEditProductModal);
  

  return (
    <div>
      {showEditModal && (
        <EditModal
          inventoryData={inventoryData}
          setInventoryData={setInventoryData}
          setTotalProducts={setTotalProducts}
          setTotalValue={setTotalValue}
          setOutOfStock={setOutOfStock}
          setCategory={setCategory}
        />
      )}

      <div className={"m-6" + (showEditModal ? " opacity-50" : "")}>
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
        />
      </div>
    </div>
  );
};

export default Body;
