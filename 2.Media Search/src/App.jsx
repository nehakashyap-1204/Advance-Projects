import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";

function App() {
  return (
    <div className="min-h-screen w-full text-white bg-gray-950">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
    </div>
  );
}

export default App;
