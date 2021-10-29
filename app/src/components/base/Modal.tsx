import React, { FunctionComponent, ReactChild } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
	show?: boolean;
	className?: string;
	closeFunction: () => void;
	children: (closeFunction: () => void) => ReactChild;
}

const [ modalRoot, root ] = [ document.getElementById("modal-root"), document.getElementById("app") ];

const Modal: FunctionComponent<ModalProps> = (props) => {
	const { show = false, className, children, closeFunction } = props;

	const showModal = show
		? "transition duration-300 ease-in scale-100 opacity-1"
		: "transition duration-300 ease-out scale-0 opacity-0";

	const backdrop = <div className={`${showModal} ${className}`}>{children(closeFunction)}</div>;

	let container;

	if (!modalRoot && root) {
		container = root;
	} else if (modalRoot) {
		container = modalRoot;
	} else if (!root) {
		throw Error("App not started ");
	} else {
		container = root;
	}

	return ReactDOM.createPortal(backdrop, container, "modal");
};

export default Modal;
