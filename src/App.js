import React, { useState } from "react";
import NestedCheckbox from "./components/NestedCheckbox";
import classData from "./data/classData";

function App() {
  const [checkboxData, setCheckboxData] = useState(classData);

  return <NestedCheckbox data={checkboxData} onChange={setCheckboxData} />;
}

export default App;
