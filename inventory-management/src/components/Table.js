import React from "react";
import { TABLE_HEADINGS } from "../constants/constants";
import { faPen, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InventoryTable = ({ inventoryData }) => {
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
                <tr>
                  <th>{data?.name}</th>
                  <td>{data?.category}</td>
                  <td>{data?.price}</td>
                  <td>{data?.quantity}</td>
                  <td>{data?.value}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faPen}
                      className="mx-2 text-green-700 cursor-pointer"
                    />
                    <FontAwesomeIcon
                      icon={faEye}
                      className="mx-2 text-purple-400 cursor-pointer"
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="mx-2 text-red-700 cursor-pointer"
                    />
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
