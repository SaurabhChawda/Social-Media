import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, AuthProvider, UserProvider, FilterProvider, SearchProvider } from "./Contexts/Index";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <UserProvider>
          <FilterProvider>
            <SearchProvider>
              <ThemeProvider>
                <App />
              </ThemeProvider>
            </SearchProvider>
          </FilterProvider>
        </UserProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
