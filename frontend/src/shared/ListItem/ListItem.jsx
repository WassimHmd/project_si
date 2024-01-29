/* eslint-disable react/prop-types */
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';

import "./ListItem.css";

function ListItem({ fields, onDelete, onEdit }) {
  return (
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
        <button onClick={onEdit}>
          <EditIcon />
        </button>
      </div>
    </div>
  );
}

export default ListItem;
