import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Sidebar from "./components/SideBar";
import AddStudent from "./pages/AddStudent";
const App = () => {
  return (
    <div className="flex  bg-gray-100flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8 overflow-y-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/student" element={<AddStudent />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
