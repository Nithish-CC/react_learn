import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "../App";
import City from "../pages/city/index";
import ApiCalls from "../pages/api/index";
import CreateUser from "../pages/api/CreateUser";

const AppRoute = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/city/:cityarea" element={<City />} />
				<Route path="*" element={<Navigate to="/" />} />
				<Route path="/api" element={<ApiCalls />} />
				<Route path="/api/createuser" element={<CreateUser />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoute;
