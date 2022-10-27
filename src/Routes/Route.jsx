import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "../App";

const AppRoute = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/city/:cityarea" element={<App />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoute;
