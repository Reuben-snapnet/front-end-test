import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./About";
import App from "../App";

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App} />
			<Route exact path="/about" component={About} />
			/>
		</Switch>
	</BrowserRouter>
);

export default Router;
