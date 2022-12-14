import React, { useContext, useState } from "react";
import Container from "../../components/container/Container";
import LoadingSpinner from "../../components/spinner/spinner";
import { useGetAllDocuments } from "../../hooks";
import { SHome } from "./home.style";
import Document from "./components/document/document";
import CreateDocument from "./components/createDocument/createDocument";
import Pagination from "../../components/pagination/pagination";
import SelectedList from "./components/selectedList/selectedList";
import { AppContext } from "../../context/appContext";
function Home() {
  const [isTabCreateNewDocument, setIsTabCreateNewDocument] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const { selectedDocumensIds } = useContext(AppContext);
  const { data: documents, isLoading } = useGetAllDocuments({
    isTabCreateNewDocument: isTabCreateNewDocument,
    pageNumber: currentPage,
    pageSize: 5,
  });

  const handlePageClick = (page) => {
    setCurrentPage(page.selected);
  };

  return (
    <SHome>
      {isLoading && <LoadingSpinner />}
      <Container>
        <SelectedList />

        <div className="document-tabs">
          <button onClick={() => setIsTabCreateNewDocument(true)}>
            Insert
          </button>
          <button onClick={() => setIsTabCreateNewDocument(false)}>
            Select
          </button>
        </div>
        <div className="document-wrapper">
          {isTabCreateNewDocument ? (
            <CreateDocument />
          ) : (
            <>
              {documents?.body.documentList.map((document) => {
                return selectedDocumensIds.includes(document.id) ? null : (
                  <Document key={document.id} document={document} />
                );
              })}

              <Pagination
                handlePageClick={handlePageClick}
                total={documents?.body.totalElements}
              />
            </>
          )}
        </div>
      </Container>
    </SHome>
  );
}

export default Home;
