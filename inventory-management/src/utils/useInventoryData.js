import { useState, useEffect } from "react";
import { INVENTORY_API } from "../constants/constants";
const useInventoryData = () => {
  const [inventoryData, setInventoryData] = useState([]);

  const fetchInventoryData = async (retries = 3, delay = 1000) => {
    try {
      const response = await fetch(INVENTORY_API);
      if (response.status === 429) {
        if (retries > 0) {
          console.warn(`Too many requests. Retrying in ${delay}ms...`);
          await new Promise((res) => setTimeout(res, delay));
          return fetchInventoryData(retries - 1, delay * 2);
        } else {
          throw new Error("Too many requests. Max retries exceeded.");
        }
      }
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setInventoryData(data);
    } catch (error) {
      console.error("Error fetching inventory data: ", error);
    }
  };

  useEffect(() => {
    fetchInventoryData();
  }, []);

  if (inventoryData.length) {
    inventoryData.forEach((data) => {
      data.disable = false;
    });
  }

  return inventoryData;
};

export default useInventoryData;
