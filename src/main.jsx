import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {App} from "./App.jsx";
import "./assets/sass/index.scss";

createRoot(document.getElementById("root")).render(
		<App />
);
