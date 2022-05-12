import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const MakeLoginFactory = React.lazy(() => import("../factory/pages/login"));

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					index
					element={
						<Suspense fallback={"Loading page..."}>
							<MakeLoginFactory />
						</Suspense>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}
