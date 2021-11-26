import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Route } from "react-router-dom";

// IMPORTING REDUX PROVIDER AND STORE
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
	<Provider store={store}>
		<Route>
			<App />
		</Route>
	</Provider>,
	document.getElementById("root")
);
