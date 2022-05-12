import { Button } from "@/presentation/components";
import { SwapComponent, useTextInput } from "@/presentation/helpers";
import React from "react";
import { EmailInput } from "../components/form-inputs";

export function EmailScreen() {
	const [email, onChangeEmail] = useTextInput();

	return (
		<>
			<div className="flex flex-1 flex-col">
				<h1 className="text-3xl font-semibold my-5">
					Para começar, informe telefone, e-mail ou @nomedeusuario
				</h1>

				<EmailInput value={email} onChange={onChangeEmail} />
			</div>

			<div className="flex-col flex">
				{SwapComponent(
					Boolean(email),
					<Button type="submit">Avançar</Button>,
					<a className="forgot-password__link" href="#">
						Esqueceu sua senha ?
					</a>
				)}
			</div>
		</>
	);
}
