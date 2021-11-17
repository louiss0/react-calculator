import React, { useEffect, useState } from "react";
import ControlButton from "./components/ControlButton";
import ErrorBoundary from "./components/ErrorBoundary";
import MathOperationsList from "./components/MathOperationsList";
import { NumbersList } from "./components/NumbersList";
import MathOperations from "./enums/MathOperations";

// Always use webpack chunk name as shown here \/

export default function App() {
	const [ input, setInput ] = useState("0");

	const [ firstNumber, setFirstNumber ] = useState(0);

	const [ secondNumber, setSecondNumber ] = useState(0);

	const [ currentOperator, setCurrentOperator ] = useState<MathOperations | null>(null);

	function callNumberSetterBasedOnIfInputIsAFloatOrNot(
		setter: React.Dispatch<React.SetStateAction<number>>,
		string: string
	) {
		if (string.includes(".")) {
			return setter(parseFloat(string));
		}
		return setter(parseInt(string));
	}
	function clearInput(): void {
		setInput("0");
	}

	function eraseACharacterFromTheRightSideOfInputIfThereAreMoreThanOneCharacters() {
		setInput((input) => (input.length > 1 ? input.slice(0, input.length - 1) : input));
	}

	useEffect(
		() => {
			if (!currentOperator) {
				return callNumberSetterBasedOnIfInputIsAFloatOrNot(setFirstNumber, input);
			}

			callNumberSetterBasedOnIfInputIsAFloatOrNot(setSecondNumber, input);
		},
		[ input, currentOperator ]
	);

	function addDotToStringIfInputHasIt(dot: string): void {
		if (!input.includes(dot)) {
			return setInput(() => `${input}${dot}`);
		}
	}

	function setOperatorAndClearInput(operator: MathOperations): void {
		setCurrentOperator(operator);

		clearInput();
	}

	function resetNumbersAndCurrentOperator() {
		setFirstNumber(0);
		setSecondNumber(0);
		setCurrentOperator(null);
	}

	function eraseNegativeSignFromInputOrAddIt(): void {
		const inputHasANegativeSignInFront = input.startsWith(MathOperations.MINUS);
		if (inputHasANegativeSignInFront) {
			return setInput((input) => input.slice(1, input.length));
		}

		setInput((input) => `${MathOperations.MINUS}${input}`);
	}

	function clearEverything() {
		resetNumbersAndCurrentOperator();
		clearInput();
	}

	function addNumberToString(number: number) {
		setInput((input) => (input === "0" ? `${number}` : `${input}${number}`));
	}

	function calculateNumbers() {
		let calcResult = 0;

		switch (currentOperator) {
			case MathOperations.PLUS:
				{
					calcResult = firstNumber + secondNumber;
				}
				break;

			case MathOperations.MINUS:
				calcResult = firstNumber - secondNumber;

				break;
			case MathOperations.MULTIPLY:
				calcResult = firstNumber * secondNumber;

				break;
			case MathOperations.DIVISION:
				calcResult = firstNumber / secondNumber;

				if (isNaN(calcResult)) {
					return clearEverything();
				}

				break;
		}

		setInput(`${calcResult}`);

		resetNumbersAndCurrentOperator();
	}

	return (
		<ErrorBoundary>
			<div className="flex flex-col items-center min-h-screen">
				<div className="py-4 mt-20 mb-16 bg-gray-200 w-52 lg:w-56 lg:px-5 px-9">
					<h1 className="text-xl text-blue-500">
						React <br className="lg:hidden" />  Calculator
					</h1>
				</div>

				<div className="flex flex-col items-center w-full py-12 bg-blue-600 sm:px-8 sm:w-3/5 xl:w-2/5 sm:rounded-3xl">
					<div className="w-full mt-6 mb-4 text-blue-400 bg-gray-200 rounded-sm sm:w-11/12 sm:mt-9">
						<input type="text" value={input} readOnly className="w-full h-full px-8 py-4 text-right" />
					</div>

					<div className="flex w-full text-blue-400 bg-gray-100 sm:w-3/4 h-72">
						<div className="grid flex-auto grid-cols-3 grid-rows-5">
							<ControlButton onClick={clearInput}>C</ControlButton>
							<ControlButton onClick={clearEverything}>Ac</ControlButton>
							<ControlButton
								onClick={eraseACharacterFromTheRightSideOfInputIfThereAreMoreThanOneCharacters}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									className="w-5 h-5 text-current fill-current"
								>
									<path fill="none" d="M0 0h24v24H0z" />
									<path d="M6.535 3H21a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.535a1 1 0 0 1-.832-.445l-5.333-8a1 1 0 0 1 0-1.11l5.333-8A1 1 0 0 1 6.535 3zm.535 2l-4.666 7 4.666 7H20V5H7.07zM16 11v2H9v-2h7z" />
								</svg>
							</ControlButton>

							<NumbersList addNumberToString={addNumberToString} />
							<ControlButton onClick={eraseNegativeSignFromInputOrAddIt}>+/-</ControlButton>
							<ControlButton onClick={() => addNumberToString(0)}>0</ControlButton>
							<ControlButton onClick={() => addDotToStringIfInputHasIt(".")}>.</ControlButton>
						</div>

						<div className="flex flex-col w-1/4 sm:w-3/10">
							<MathOperationsList setOperatorAndClearInput={setOperatorAndClearInput} />
							<ControlButton extraClasses="flex-1" onClick={calculateNumbers}>
								=
							</ControlButton>
						</div>
					</div>
				</div>
			</div>
		</ErrorBoundary>
	);
}
