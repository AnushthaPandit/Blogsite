import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";

import Login from "./pages/Login";
import Editor from "./pages/Editor";

export default function App() {
	return (
		<Router>
			<Switch>
				<Route path="/login">
					<Login />
				</Route>
				<PrivateRoute path="/blog/edit/:id" Comp={Editor} />
			</Switch>
		</Router>
	);
}
