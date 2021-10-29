import React, { Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";
import type  {RouteObjects} from "./interfaces/RouteObject";
import SuspenseFallback from "./pages/SuspenseFallback";
import createRoutes from "./utils/createRoutes";

// Always use webpack chunk name as shown here \/
const routeObjects: RouteObjects = [
	{
		path: "/",
		component: React.lazy(() => import(/* webpackChunkName: "home" */ "./pages/Home")),
		exact: true
	},
	{
		path: "/about",
		component: React.lazy(() => import(/* webpackChunkName: "about" */ "./pages/About"))
	}
];

const routes = createRoutes(routeObjects);

export default function App() {
	return (
		<ErrorBoundary>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Suspense fallback={<SuspenseFallback />}>{routes}</Suspense>
				</Switch>
			</BrowserRouter>
		</ErrorBoundary>
	);
}
