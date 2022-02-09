import React, { useState } from "react";
import Navbar from "./components/Navbar.js";
import News from "./components/News.js";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const api= '481a241fbe774b7ea0907143e20dce23'
  const country = 'in'
  const pageSize=9
  const [mode, setMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });

  const changeMode = () => {
    setMode(!mode);
  };

  return (
    <div>
       <Router>
      <ThemeProvider theme={theme}>
        <Paper style={{ height: "1"}}>
          <Navbar switch={changeMode} />
          
            <Routes>
            <Route
            exact
                path="/"
            element={
              <News
                category="general"
                country={country}
                api={api}
                pageSize={pageSize} 
              />
            }
              />
          <Route
            exact
                path="/general"
            element={
              <News
                category="general"
                country={country}
                api={api}
                pageSize={pageSize} 
              />
            }
              />
              <Route
            exact
            path="/business"
            element={
              <News
                category="business"
                country={country}
                api={api}
                pageSize={pageSize} 
              />
            }
              />
              <Route
            exact
            path="/science"
            element={
              <News
                category="science"
                country={country}
                api={api}
                pageSize={pageSize} 
              /> 
            }
              />
              <Route
            exact
            path="/health"
            element={
              <News
                category="health"
                country={country}
                api={api}
                pageSize={pageSize} 
              /> 
            }
              />
              <Route
            exact
            path="/technology"
            element={
              <News
                category="technology"
                country={country}
                api={api}
                pageSize={pageSize} 
              /> 
            }
              />
               <Route
            exact
            path="/business"
            element={
              <News
                category="business"
                country={country}
                api={api}
                pageSize={pageSize} 
              /> 
            }
              />
              
          </Routes>
        </Paper>
        </ThemeProvider>
        </Router>
    </div>
  );
}

export default App;
