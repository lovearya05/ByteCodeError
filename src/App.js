import './App.css';
import RoutesServer from "./routes/index.js";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <RoutesServer />
    </BrowserRouter>
  );
}

export default App;
