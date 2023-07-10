import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "~/apps";
import App from "./App.tsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
