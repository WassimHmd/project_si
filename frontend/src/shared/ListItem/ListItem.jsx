/* eslint-disable react/prop-types */
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import "./ListItem.css";
import { useState } from "react";

function ListItem({ fields, onDelete, onEdit }) {
  const [edit, setEdit] = useState(false);
  return (
    <>
      <div className="list-item">
        <div className="list-item-fields">
          {fields.map((field) => (
            <>
              <p className="field-title">{field.title}: </p>
              <p className="field-value">{field.value}</p>
          </>
          ))}
        </div>
        <div className="list-item-buttons">
          <button onClick={onDelete}>
            <DeleteIcon />
          </button>
          <button onClick={()=>setEdit((state)=>!state)}>
            <EditIcon />
          </button>
        </div>
      </div>
      {edit && onEdit}
    </>
  );
}

export default ListItem;
