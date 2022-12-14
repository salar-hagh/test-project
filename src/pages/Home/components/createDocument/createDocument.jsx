import React, { useState } from "react";
import Button from "../../../../components/button/Button";
import Input from "../../../../components/input/Input";
import LoadingSpinner from "../../../../components/spinner/spinner";
import Textarea from "../../../../components/textarea/Textarea";
import { useCreateNewDocument } from "../../../../hooks";
import { SCreateDocument } from "./createDocument.style";

function CreateDocument() {
  const [createDocumnet, setCreateDocument] = useState();
  const { CreateNewDocument, isLoading } = useCreateNewDocument();
  const handleChangeCreateDocument = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case "title":
        setCreateDocument({
          ...createDocumnet,
          title: value,
        });
        break;
      case "fileURL":
        setCreateDocument({
          ...createDocumnet,
          fileURL: value,
        });
        break;
      case "description":
        setCreateDocument({
          ...createDocumnet,
          description: value,
        });
        break;
      default:
        break;
    }
  };

  const handleCreateDocument = () => {
    CreateNewDocument({
      description: createDocumnet.description,
      fileUrl: createDocumnet.fileURL,
      title: createDocumnet.title,
    });
  };

  return (
    <SCreateDocument>
      {isLoading && <LoadingSpinner />}
      <h2>Create new document</h2>
      <div className="create-document-body">
        <Input
          name="title"
          onChange={handleChangeCreateDocument}
          label="Title"
        />
        <Input
          name="fileURL"
          onChange={handleChangeCreateDocument}
          label="File URL"
        />
        <Textarea
          name="description"
          onChange={handleChangeCreateDocument}
          label="Description"
        />

        <Button onClick={handleCreateDocument}>Create</Button>
      </div>
    </SCreateDocument>
  );
}

export default CreateDocument;
