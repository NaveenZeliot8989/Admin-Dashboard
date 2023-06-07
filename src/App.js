import { colorModeContext, themeSettings, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <colorModeContext.Provider value="colorMode">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <main className="content">
            <Topbar />
          </main>
        </div>
        ;
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
