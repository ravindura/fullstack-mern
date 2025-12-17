import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";

export default function App() {
  return (
    <div className="min-h-screen pt-20 bg-blue-50">
      <Header />
      <Outlet />
    </div>
  );
}
