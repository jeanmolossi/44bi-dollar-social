import React, { useMemo, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { classes, SwapComponent } from "@/presentation/helpers";
import { useID } from "@/presentation/helpers/hooks";
import "../login.css";

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
		<div className={classes("form-control group", { disabled })}>
			<label
				htmlFor={id}
				className={classes(
					"form-control__label",
					{ filled: !!value || disabled },
					{ disabled }
				)}
			>
				{SwapComponent(
					Boolean(disabled),
					<>E-mail</>,
					<>Celular, e-mail ou nome de usuário</>
				)}
			</label>
			<input
				id={id}
				name="email"
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
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		setIsVisible(!isVisible)
	}

	const type = useMemo(() => isVisible ? "text" : "password", [isVisible])

	return (
		<div className="form-control group">
			<label
				htmlFor={id}
				className={classes("form-control__label", { filled: !!value })}
			>
				Senha
			</label>
			<div className="flex items-stretch">
				<input
					id={id}
					type={type}
					className="form-control__password"
					value={value}
					onChange={onChange}
					disabled={disabled}
					{...rest}
				/>

				<button
					type="button"
					className="flex flex-end items-end mb-2 mr-2"
					onClick={toggleVisibility}
				>
					{SwapComponent(
						isVisible,
						<FiEyeOff size={22} />,
						<FiEye size={22} />
					)}
				</button>
			</div>
		</div>
	);
}
