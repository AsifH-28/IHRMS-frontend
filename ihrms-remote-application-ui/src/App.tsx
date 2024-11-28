import { Route, Routes } from "react-router-dom";
import Asset from "./pages/assets/Asset";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/assets" element={<Asset />} />
      </Routes>
    </>
  );
}

export default App;
