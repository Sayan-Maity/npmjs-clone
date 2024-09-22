import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing"
import PackageDetails from "./pages/PackageDetails"
import PackageVersion from "./pages/PackageVersion"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/:packageName" element={<PackageDetails />} />
        <Route path="/:packageName/:version" element={<PackageVersion />} />
      </Routes>
    </Router>
  )
}

export default App
