import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProgrammingTabs from "./pages/ProgrammingTabs";
import SideTabs from "./pages/SideTabs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<ProgrammingTabs />} />
          <Route path="/side" element={<SideTabs />} />
      </Routes>
    </BrowserRouter>
  );
}