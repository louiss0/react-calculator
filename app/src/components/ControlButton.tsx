import React, { ButtonHTMLAttributes, FunctionComponent } from "react";

type ControlButtonProps = {
	extraClasses?: string;
} & ButtonHTMLAttributes<unknown>;

const ControlButton: FunctionComponent<ControlButtonProps> = ({ extraClasses, children, ...attrs }) => {
	return (
		<button
			className={`
        flex items-center justify-center border-gray-500 border-1
		hover:(ring-gray-500 border-none ring-1 ring ring-offset-gray-100 ring-offset-1)
		focus:(ring-gray-500 border-none outline-none ring-1 ring )
		active:(ring-0 ring-offset-0 border-none) ${!extraClasses ? "" : extraClasses}
		   
        `}
			{...attrs}
		>
			{children}
		</button>
	);
};

export default ControlButton;
