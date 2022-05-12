import React from "react";
import { classes } from "@/presentation/helpers";
import { useTextInput } from "@/presentation/helpers/hooks";
import { UnauthLayout } from "@/presentation/components";
import "./login.css";

export function Login() {
	return (
		<UnauthLayout>
			<div className="flex flex-1 flex-col">
				<div className="flex flex-1 flex-col">
					<h1 className="text-3xl font-semibold my-5">
						Para começar, informe telefone, e-mail ou @nomedeusuario
					</h1>

					<form className="">
						{/*  */}
						<EmailInput />
						{/*  */}
					</form>
				</div>

				<div className="flex-col flex">
					<a className="forgot-password__link" href="#">
						Esqueceu sua senha ?
					</a>
				</div>
			</div>
		</UnauthLayout>
	);
}

function EmailInput() {
	const [email, onChangeEmail] = useTextInput();

	return (
		<div className="form-control group">
			<label
				htmlFor="email"
				className={classes("form-control__label", { filled: !!email })}
			>
				Celular, e-mail ou nome de usuário
			</label>
			<input
				id="email"
				type="email"
				className="form-control__input"
				onChange={onChangeEmail}
			/>
		</div>
	);
}
