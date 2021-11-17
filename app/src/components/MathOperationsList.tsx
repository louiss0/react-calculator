import React, { FunctionComponent } from "react";
import MathOperations from "../enums/MathOperations";
import { v4 as uuid } from "uuid";
import ControlButton from "./ControlButton";

const mathOperators = [ MathOperations.PLUS, MathOperations.MINUS, MathOperations.MULTIPLY, MathOperations.DIVISION ];

type MathOperationsListProps = {
	setOperatorAndClearInput(operator: MathOperations): void;
};

const MathOperationsList: FunctionComponent<MathOperationsListProps> = ({ setOperatorAndClearInput }) => {
	return (
		<React.Fragment>
			{mathOperators.map((operator) => (
				<ControlButton extraClasses="flex-1" key={uuid()} onClick={() => setOperatorAndClearInput(operator)}>
					{operator}
				</ControlButton>
			))}
		</React.Fragment>
	);
};

export default MathOperationsList;
