import React from "react";
import { classes } from "@/presentation/helpers";
import "../login.css";
import { useID } from "@/presentation/helpers/hooks";

type EmailInputProps = React.InputHTMLAttributes<HTMLInputElement>;
type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement>;

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

export function PasswordInput({
	id = useID(),
	value,
	onChange,
	disabled,
	...rest
}: PasswordInputProps) {
	return (
		<div className="form-control group">
			<label
				htmlFor={id}
				className={classes("form-control__label", { filled: !!value })}
			>
				Senha
			</label>
			<input
				id={id}
				type="password"
				className="form-control__input"
				value={value}
				onChange={onChange}
				disabled={disabled}
				{...rest}
			/>
		</div>
	);
}
