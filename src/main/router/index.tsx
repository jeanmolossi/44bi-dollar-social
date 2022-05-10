import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "@/presentation/pages";

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}
