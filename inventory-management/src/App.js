import "./App.css";

import { Provider } from "react-redux";
import store from "./utils/store";

import Navbar from "./components/Navbar";
import Body from "./components/Body";

function App() {
  return (
    <div className="m-1">
      <Provider store={store}>
        <Navbar />
        <Body/>
      </Provider>
    </div>
  );
}

export default App;
