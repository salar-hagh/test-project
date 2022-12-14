import { useEffect, useState } from "react";
import { createNewDocument, getAllDocuments } from "../api";

export const useGetAllDocuments = ({
  isTabCreateNewDocument,
  pageNumber,
  pageSize,
}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getAllDocuments({ pageNumber, pageSize }).then((data) => {
      setData(data);
      setIsLoading(false);
    });
  }, [isTabCreateNewDocument, pageNumber, pageSize]);
  return {
    data,
    isLoading,
  };
};

export const useCreateNewDocument = () => {
  const [isLoading, setIsLoading] = useState(false);
  const CreateNewDocument = ({ description, fileUrl, title }) => {
    setIsLoading(true);
    createNewDocument({
      description,
      fileUrl,
      title,
    }).then(() => {
      setIsLoading(false);
    });
  };

  return {
    CreateNewDocument,
    isLoading,
  };
};
