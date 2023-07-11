import { BrowserRouter } from "react-router-dom";
import QueryContext from "./context/queryContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <QueryContext/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
