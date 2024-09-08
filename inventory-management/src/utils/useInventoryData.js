import { useState, useEffect } from "react";
import { INVENTORY_API } from "../constants/constants";
const useInventoryData = () => {
  const [inventoryData, setInventoryData] = useState([]);

  const fetchInventoryData = async () => {
    const response = await fetch(INVENTORY_API);
    const data = await response.json();
    setInventoryData(data);
  };

  useEffect(() => {
    fetchInventoryData();
  }, []);

  return inventoryData;
};

export default useInventoryData;
