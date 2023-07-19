import { BrowserRouter } from "react-router-dom";
import QueryContext from "./context/queryContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

          <ToastContainer
            position="top-center"
            autiClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            theme="light"
          />
           <QueryContext/>

         
      </BrowserRouter>
     
    </div>
  );
}

export default App;
