import './App.css';
import RoutesServer from "./routes/index.js";
import { BrowserRouter, HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <RoutesServer />
    </Router>
  );
}

export default App;
