import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import {
  findTotalProduts,
  findTotalValue,
  findOutOfStock,
  findCategory,
} from "../utils/utilFunctions";
import { useDispatch, useSelector } from "react-redux";
import { closeEditModal } from "../utils/modalSlice";

const EditModal = ({
  inventoryData,
  setInventoryData,
  setTotalProducts,
  setTotalValue,
  setOutOfStock,
  setCategory,
}) => {
  const dataIndex = useSelector((store) => store.modal.dataIndex);
  const [category, setEditCategory] = useState(
    inventoryData[dataIndex].category
  );
  const [quantity, setEditQuantity] = useState(
    inventoryData[dataIndex].quantity
  );
  const [value, setEditValue] = useState(inventoryData[dataIndex].value);
  const [price, setEditPrice] = useState(inventoryData[dataIndex].price);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    inventoryData[dataIndex].category = category;
    inventoryData[dataIndex].quantity = quantity;
    inventoryData[dataIndex].value = value;
    inventoryData[dataIndex].price = price;
    setInventoryData([...inventoryData]);
    dispatch(closeEditModal());
    setTotalProducts(() => findTotalProduts(inventoryData));
    setTotalValue(() => findTotalValue(inventoryData));
    setOutOfStock(() => findOutOfStock(inventoryData));
    setCategory(() => findCategory(inventoryData));
  }

  function handleCloseModal() {
    dispatch(closeEditModal());
  }

  return (
    <div className="w-screen h-[40rem] absolute flex justify-center items-center">
      <div className="bg-[#272B28] w-5/12 rounded-lg p-6 relative -top-[10rem] z-10">
        <div className="flex justify-between">
          <div className="text-3xl">Edit Product</div>
          <FontAwesomeIcon
            icon={faX}
            className="cursor-pointer text-neon bg-lightArmyGreen p-2 rounded-lg"
            onClick={handleCloseModal}
          />
        </div>
        <div className="mt-2">{inventoryData[dataIndex].name}</div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div>
              <div className="flex flex-col gap-2">
                <label>Category</label>
                <input
                  type="text"
                  value={category}
                  placeholder={category}
                  className="p-2 rounded-lg"
                  onChange={(e) => setEditCategory(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <label>Quantity</label>
                <input
                  type="text"
                  value={quantity}
                  placeholder={quantity}
                  className="p-2 rounded-lg"
                  onChange={(e) => setEditQuantity(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-2">
                <label>Price</label>
                <input
                  type="text"
                  value={price}
                  placeholder={price}
                  className="p-2 rounded-lg"
                  onChange={(e) => setEditPrice(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <label>value</label>
                <input
                  type="text"
                  value={value}
                  placeholder={value}
                  className="p-2 rounded-lg"
                  onChange={(e) => setEditValue(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-6 gap-3">
            <button className="text-neon" onClick={handleCloseModal}>
              Cancel
            </button>
            <button className="bg-lightArmyGreen px-2 py-1 rounded-lg">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
