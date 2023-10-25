import React from "react";
import Checkbox from "./Checkbox";

function NestedCheckbox({ data, onChange }) {
  const handleCheckboxChange = (key) => {
    const updatedData = { ...data };
    updatedData[key].checked = !updatedData[key].checked;

    // Recursive function to update children
    const updateChildren = (children, checked) => {
      for (const childKey in children) {
        children[childKey].checked = checked;
        updateChildren(children[childKey].children, checked);
      }
    };

    updateChildren(updatedData[key].children, updatedData[key].checked);
    onChange(updatedData);
  };

  return (
    <div>
      {Object.entries(data).map(([key, { checked, children }]) => (
        <div key={key}>
          <Checkbox label={key} checked={checked} onChange={() => handleCheckboxChange(key)} />
          <div style={{ marginLeft: "20px" }}>
            <NestedCheckbox data={children} onChange={onChange} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default NestedCheckbox;