import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import ConverterPage from "./pages/ConverterPage";
import RatesPage from "./pages/RatesPage";
import DocsPage from "./pages/DocsPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="converter" element={<ConverterPage />} />
        <Route path="rates" element={<RatesPage />} />
        <Route path="docs" element={<DocsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
