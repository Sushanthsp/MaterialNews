import React, { useState } from "react";
import Navbar from "./components/Navbar.js";
import News from "./components/News.js";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


function App() {
  
  const api = "9ef5c724ef654e3c81144e452d33ba75";
  const country = "in";
  const pageSize = 9;
  const [mode, setMode] = useState(false);
  const [progress, setProgress] = useState(0);

  const theme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
    
  });

  const changeMode = () => {
    setMode(!mode);
  };

  const setProg = (p) => {
    setProgress(p);
  };

  return (
    <div>
      <Router>
      <LoadingBar
          color="#f11946"
          progress={progress}
          height={3}
          onLoaderFinished={() => setProg(0)}
        />
        <ThemeProvider theme={theme}>
          <Paper sx={{ "min-height"	: '100vh' }} >
           
            
            <Navbar switch={changeMode} />

            <Routes>
              <Route
                exact
                path="/"
                element={
                  <News
                  theme={theme}
                    progress={setProg}
                    category="general"
                    country={country}
                    api={api}
                    pageSize={pageSize}
                    key="general"
                  />
                }
              />
              <Route
                exact
                path="/general"
                element={
                  <News
                  theme={theme}
                  progress={setProg}
                    category="general"
                    country={country}
                    api={api}
                    pageSize={pageSize}
                    key="general"
                  />
                }
              />
              <Route
                exact
                path="/business"
                element={
                  <News
                  theme={theme}
                  progress={setProg}
                    category="business"
                    country={country}
                    api={api}
                    pageSize={pageSize}
                    key="business"
                  />
                }
              />
              <Route
                exact
                path="/science"
                element={
                  <News
                  theme={theme}
                  progress={setProg}
                    category="science"
                    country={country}
                    api={api}
                    pageSize={pageSize}
                    key="science"
                  />
                }
              />
              <Route
                exact
                path="/health"
                element={
                  <News
                  theme={theme}
                  progress={setProg}
                    category="health"
                    country={country}
                    api={api}
                    pageSize={pageSize}
                    key="health"
                  />
                }
              />
              <Route
                exact
                path="/technology"
                element={
                  <News
                  theme={theme}
                  progress={setProg}
                    category="technology"
                    country={country}
                    api={api}
                    pageSize={pageSize}
                    key="technology"
                  />
                }
              />
              <Route
                exact
                path="/business"
                element={
                  <News
                  theme={theme}
                  progress={setProg}
                    category="business"
                    country={country}
                    api={api}
                    pageSize={pageSize}
                    key="business"
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
