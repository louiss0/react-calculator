import React, { FunctionComponent } from "react";
import { v4 as uuid } from "uuid";
import ControlButton from "./ControlButton";

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

type NumbersListProps = {
	addNumberToString(number: number): void;
};

export const NumbersList: FunctionComponent<NumbersListProps> = ({ addNumberToString }) => {
	return (
		<React.Fragment>
			{numbers.map((number) => (
				<ControlButton key={uuid()} onClick={() => addNumberToString(number)}>
					{number}
				</ControlButton>
			))}
		</React.Fragment>
	);
};
