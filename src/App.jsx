import { useState } from "react";
import { Box } from "@chakra-ui/react"; // Added this import to fix the error
import { ApiFlow1APage1 } from "./existential/pages/ApiFlow1APage1";
import { ApiFlow1APage2 } from "./existential/pages/ApiFlow1APage2";
import { ApiFlow1APage3 } from "./existential/pages/ApiFlow1APage3";

function App() {
  // Navigation State to move between the three pages
  const [currentPage, setCurrentPage] = useState("page1");

  return (
    <Box className="App">
      {/* Route: Step 1 - Processing & Data Type */}
      {currentPage === "page1" && (
        <ApiFlow1APage1 
          onNext={() => setCurrentPage("page2")} 
        />
      )}

      {/* Route: Step 2 - Data Points & Timeline */}
      {currentPage === "page2" && (
        <ApiFlow1APage2 
          onNext={() => setCurrentPage("page3")} 
          onPrevious={() => setCurrentPage("page1")} 
        />
      )}

      {/* Route: Step 3 - Success Screen */}
      {currentPage === "page3" && (
        <ApiFlow1APage3 />
      )}
    </Box>
  );
}

export default App;