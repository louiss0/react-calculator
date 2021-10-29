import React from "react";
import { useHistory } from "react-router";

export default function SuspenseFallback() {
	const history = useHistory();

	const goBack = () => {
		history.goBack();
	};

	return (
		<div className="flex flex-col items-center justify-evenly">
			<h1 className="text-2xl">Hold on were having a hard time loading this page</h1>

			<p className="text-sm">If you don t want to wait go back by clicking this button</p>

			<button className="px-3 py-1 text-lg rounded-full" onClick={goBack}>
				Go back to previous screen
			</button>
		</div>
	);
}
