import React, { useState } from "react";
import { TABLE_HEADINGS } from "../constants/constants";
import { faPen, faEye, faTrash, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import {
  findTotalProduts,
  findTotalValue,
  findOutOfStock,
  findCategory,
} from "../utils/utilFunctions";

const InventoryTable = ({
  inventoryData,
  setInventoryData,
  setTotalProducts,
  setTotalValue,
  setOutOfStock,
  setCategory,
  setShowModal,
  showModal,
  setX
}) => {
  const isAdmin = useSelector((store) => store.user.isAdmin);
  function handleDisable(index) {
    inventoryData[index].disable = !inventoryData[index].disable;
    setInventoryData([...inventoryData]);
    setTotalProducts(() => findTotalProduts(inventoryData));
    setTotalValue(() => findTotalValue(inventoryData));
    setOutOfStock(() => findOutOfStock(inventoryData));
    setCategory(() => findCategory(inventoryData));
  }

  function handleDelete(index) {
    inventoryData.splice(index, 1);
    setInventoryData([...inventoryData]);
    setTotalProducts(() => findTotalProduts(inventoryData));
    setTotalValue(() => findTotalValue(inventoryData));
    setOutOfStock(() => findOutOfStock(inventoryData));
    setCategory(() => findCategory(inventoryData));
  }

  function handleEditModal(index) {
    setX(index);
    setShowModal(!showModal);
  }

  return (
    <div className="my-5">
      <div class="flex w-full overflow-x-auto">
        <table class="table">
          <thead>
            <tr>
              {TABLE_HEADINGS.map((heading, index) => (
                <th>
                  <span className="bg-black px-2 py-1 text-[#E0F66F] rounded-lg">
                    {heading}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((data, index) => {
              return (
                <tr className={data?.disable ? "opacity-50" : ""}>
                  <th>{data?.name}</th>
                  <td>{data?.category}</td>
                  <td>{data?.price}</td>
                  <td>{data?.quantity}</td>
                  <td>{data?.value}</td>
                  <td>
                    <button
                      disabled={isAdmin === false}
                      onClick = {() => handleEditModal(index)}
                    >
                      <FontAwesomeIcon
                        icon={faPen}
                        className={
                          "mx-2" +
                          (isAdmin ? " text-green-700 cursor-pointer" : "")
                        }
                      />
                    </button>
                    <button
                      disabled={isAdmin === false}
                      onClick={() => handleDisable(index)}
                    >
                      <FontAwesomeIcon
                        icon={data?.disable ? faEyeSlash : faEye}
                        className={
                          "mx-2" +
                          (isAdmin ? " text-purple-400 cursor-pointer" : "")
                        }
                      />
                    </button>
                    <button
                      disabled={isAdmin === false}
                      onClick={() => handleDelete(index)}
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        className={
                          "mx-2" +
                          (isAdmin ? " text-red-700 cursor-pointer" : "")
                        }
                      />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryTable;
