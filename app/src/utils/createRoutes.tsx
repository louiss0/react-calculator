import React from "react";
import { Route } from "react-router";
import { RouteObject } from "../interfaces/RouteObject";
import { v4 as uuidv4 } from "uuid";

export default function createRoutes(routeObjects: Array<RouteObject>) {
	return routeObjects.map(({ ...routeObject }) => {
		return <Route {...routeObject} key={uuidv4()} />;
	});
}
