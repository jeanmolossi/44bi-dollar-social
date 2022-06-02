import { classes } from "@/presentation/helpers";
import React from "react";
import "./button.css";

type ButtonVariant = "neutral" | "blue";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode;
	variant?: ButtonVariant;
	fullWidth?: boolean;
}

const variantClasses = {
	neutral: "button__default",
	blue: "button__blue"
}

export function Button({
	children,
	type = "button",
	variant = "neutral",
	fullWidth = false,
	...rest
}: ButtonProps) {
	const className = classes(variantClasses[variant], "button__full")

	return (
		<button role="button" className={className} type={type} {...rest}>
			{children}
		</button>
	);
}
