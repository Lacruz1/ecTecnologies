import logo from './logo.svg';
import {RouterProvider} from "react-router-dom";
import router from "./routes/routes"; 
import './styles/main.scss';

function App() {
  return (
    <div className="MainContainer">
        <RouterProvider
          router={router}
        />
    </div>
  );
}

export default App;
