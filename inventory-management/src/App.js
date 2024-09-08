import "./App.css";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <div className="m-1">
      <Provider store={store}>
        <Navbar />
      </Provider>
    </div>
  );
}

export default App;
