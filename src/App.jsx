import { GlobalContextProvider } from "./context/GlobalContext";
import Home from "./page/Home";

function App() {
  return (
    <GlobalContextProvider>
      <Home />
    </GlobalContextProvider>
  );
}

export default App;
