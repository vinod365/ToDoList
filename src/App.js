import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/index";
import Completed from "./pages/completed/index";
import Deleted from "./pages/completed/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/deleted" element={<Deleted />} />
      <Route path="/completed" element={<Completed />} />
    </Routes>
  );
}

export default App;
