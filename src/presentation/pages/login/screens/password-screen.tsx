import React from "react";
import { useTextInput } from "@/presentation/helpers/hooks";
import { EmailInput, PasswordInput } from "../components/form-inputs";
import "../login.css";

interface PasswordScreenProps {
	email: string;
}

export function PasswordScreen({ email }: PasswordScreenProps) {
	const [password, onChangePassword] = useTextInput();

	return (
		<>
			<div className="flex flex-1 flex-col">
				<h1 className="text-3xl font-semibold my-5">Digite a senha</h1>

				<EmailInput disabled value={email} />
				<PasswordInput value={password} onChange={onChangePassword} />
			</div>

			<div className="flex-col flex">
				<button role="button" type="submit" className="button__default">
					Acessar
				</button>

				{/* <a className="forgot-password__link" href="#">
						Esqueceu sua senha ?
					</a> */}
			</div>
		</>
	);
}
