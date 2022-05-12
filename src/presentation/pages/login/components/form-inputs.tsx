import React from "react";
import { classes } from "@/presentation/helpers";
import "../login.css";
import { useID } from "@/presentation/helpers/hooks";

type EmailInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function EmailInput({
	id = useID(),
	value,
	onChange,
	disabled,
	...rest
}: EmailInputProps) {
	return (
		<div className="form-control group">
			<label
				htmlFor={id}
				className={classes("form-control__label", { filled: !!value })}
			>
				Celular, e-mail ou nome de usuário
			</label>
			<input
				id={id}
				type="email"
				className="form-control__input"
				value={value}
				onChange={onChange}
				disabled={disabled}
				{...rest}
			/>
		</div>
	);
}
