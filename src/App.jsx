import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import PasswordTool from "./pages/PasswordTool";
import IpLookupTool from "./pages/IpLookupTool";
import ThreatFeed from "./pages/ThreatFeed";
import HashChecker from "./pages/HashChecker";
import SystemMonitor from "./pages/SystemMonitor";

const App = () => {
  return (
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/password" element={<PasswordTool />} />
          <Route path="/iplookup" element={<IpLookupTool />} />
          <Route path="/threats" element={<ThreatFeed />} />
          <Route path="/hash" element={<HashChecker />} />
          <Route path="/monitor" element={<SystemMonitor />} />
        </Route>
      </Routes>
  );
};

export default App;