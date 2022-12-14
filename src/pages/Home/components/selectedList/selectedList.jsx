import React, { useContext } from "react";
import { AppContext } from "../../../../context/appContext";
import { SSelectedList } from "./selectedList.style";

function SelectedList() {
  const { selectedDocumens } = useContext(AppContext);
  return (
    <SSelectedList>
      <h2>Selected List</h2>
      <ul>
        {selectedDocumens?.map((document) => (
          <li>{document.title}</li>
        ))}
      </ul>
    </SSelectedList>
  );
}

export default SelectedList;
