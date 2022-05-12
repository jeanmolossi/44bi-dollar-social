import React from "react";
import { useTextInput } from "@/presentation/helpers/hooks";
import { EmailInput, PasswordInput } from "../components/form-inputs";
import "../login.css";
import { Button } from "@/presentation/components";
import { SwapComponent } from "@/presentation/helpers";

interface PasswordScreenProps {
	email: string;
}

export default function PasswordScreen({ email }: PasswordScreenProps) {
	const [password, onChangePassword] = useTextInput();

	return (
		<>
			<div className="flex flex-1 flex-col">
				<h1 className="text-3xl font-semibold my-5">Digite a senha</h1>

				<EmailInput disabled value={email} />
				<PasswordInput value={password} onChange={onChangePassword} />
			</div>

			<div className="flex-col flex">
				{SwapComponent(
					Boolean(password),
					<Button type="submit">Acessar</Button>,
					<a className="forgot-password__link" href="#">
						Esqueceu sua senha ?
					</a>
				)}
			</div>
		</>
	);
}
