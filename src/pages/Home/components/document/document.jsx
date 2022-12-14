import React, { useContext } from "react";
import { AppContext } from "../../../../context/appContext";
import { SDocument } from "./document.style";

function Document({ document }) {
  const {
    selectedDocumens,
    setSelectedDocumens,
    selectedDocumensIds,
    setSelectedDocumensIds,
  } = useContext(AppContext);

  const handleChange = (e, document) => {
    setSelectedDocumensIds([...selectedDocumensIds, document.id]);
    setSelectedDocumens([...selectedDocumens, document]);
  };

  return (
    <SDocument>
      <div className="document-head">
        <h2>{document.title}</h2>
      </div>
      <div className="document-body">
        <p>{document.description}</p>
        <div className="state-wrapper">
          <input onChange={(e) => handleChange(e, document)} type="checkbox" />
        </div>
      </div>
    </SDocument>
  );
}

export default Document;
