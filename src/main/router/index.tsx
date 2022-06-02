import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingSpinner } from "@/presentation/components/loading-spinner";

const MakeLoginFactory = React.lazy(() => import("../factory/pages/login"));
const MakeHomeFactory = React.lazy(() => import("../factory/pages/home"));

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					index
					element={
						<Suspense fallback={<LoadingSpinner size="large" />}>
							<MakeLoginFactory />
						</Suspense>
					}
				/>

				<Route
					path="/home"
					element={
						<Suspense fallback={<LoadingSpinner size="large" />}>
							<MakeHomeFactory />
						</Suspense>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}
