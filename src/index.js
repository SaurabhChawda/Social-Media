import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, FilterProvider, SearchProvider } from "./Contexts/Index";
import { Store } from "./app/Store.js";
import { Provider } from "react-redux";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={Store}>
        <FilterProvider>
          <SearchProvider>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </SearchProvider>
        </FilterProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
