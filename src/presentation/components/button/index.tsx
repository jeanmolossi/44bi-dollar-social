import React from "react";
import "./button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode;
}

export function Button({ children, type = "button", ...rest }: ButtonProps) {
	return (
		<button role="button" className="button__default" type={type} {...rest}>
			{children}
		</button>
	);
}
