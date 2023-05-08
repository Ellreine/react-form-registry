import logo from "./logo.svg";
import "./App.css";
import React from "react";

export const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload 2.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>{new Date().getFullYear()}</p> {/* Декларативный*/}
			</header>
		</div>
	);
};

// Код на обычном JS
export const AppWithOutJSX = () => {
	return React.createElement(
		"div",
		{ className: "App" },
		React.createElement(
			"header",
			{ className: "App-header" },
			React.createElement("img", {
				src: logo,
				className: "App-logo",
				alt: "logo",
			}),
			React.createElement(
				"p",
				null,
				"Edit ",
				React.createElement("code", null, "src/App.js"),
				" and save to reload 2."
			),
			React.createElement(
				"a",
				{
					className: "App-link",
					href: "https://reactjs.org",
					target: "_blank",
					rel: "noopener noreferrer",
				},
				"Learn React"
			),
			React.createElement("p", null, new Date().getFullYear())
		)
	);
};
