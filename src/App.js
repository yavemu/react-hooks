import Characters from "./components/Characters";
import Header from "./components/Header";
import ThemeContext from "./context/ThemeContext";
import "./App.css";
import { useContext } from "react";

function App() {
  const { isDarkModeTheme } = useContext(ThemeContext);
  return (
    <div className={`App ${isDarkModeTheme ? "darkMode" : ""}`}>
      <Header />
      <Characters />
    </div>
  );
}

export default App;
