import "./App.css";
import Homepage from "./components/Homepage";
import { ChakraProvider } from "@chakra-ui/react";
import { GlobalProvider } from "./GlobalState";
import GlobalContext from "./GlobalState";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Watched from "./components/Watched";
import Watchlist from "./components/Watchlist";
import Header from "./components/Header";

function App() {
  return (
    <GlobalProvider>
      <ChakraProvider>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/watchlist" element={<Watchlist />} />
              <Route path="/watched" element={<Watched />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ChakraProvider>
    </GlobalProvider>
  );
}

export default App;
