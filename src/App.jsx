import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { AppContext } from "./context/appContext";
import Home from "./pages/Home/home";

function App() {
  const [selectedDocumens, setSelectedDocumens] = useState([]);
  const [selectedDocumensIds, setSelectedDocumensIds] = useState([]);

  return (
    <AppContext.Provider
      value={{
        selectedDocumens,
        setSelectedDocumens,
        selectedDocumensIds,
        setSelectedDocumensIds,
      }}
    >
      <Toaster />
      <Home />
    </AppContext.Provider>
  );
}

export default App;
