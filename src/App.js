import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";

import Login from "./pages/Login";
import Blogs from "./pages/Blogs";
import Editor from "./pages/Editor";

export default function App() {
	return (
		<Router>
			<Switch>
				<PrivateRoute exact path="/" Comp={Blogs} />
				<Route path="/login">
					<Login />
				</Route>
				<PrivateRoute path="/blog/edit/:id" Comp={Editor} />
			</Switch>
		</Router>
	);
}
