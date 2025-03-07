import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store, persistor } from "./redux/store.js"; // Named imports (consistent with your original)
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
