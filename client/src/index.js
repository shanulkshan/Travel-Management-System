import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { SearchContextProvider } from "./context/hotelSearchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <SearchContextProvider>
      <App />
    </SearchContextProvider>
  </React.StrictMode>
);

reportWebVitals();