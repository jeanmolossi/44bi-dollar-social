import React from "react";
import { EmailInput } from "../components/form-inputs";

export function EmailScreen() {
	return (
		<>
			<div className="flex flex-1 flex-col">
				<h1 className="text-3xl font-semibold my-5">
					Para começar, informe telefone, e-mail ou @nomedeusuario
				</h1>

				<EmailInput />
			</div>

			<div className="flex-col flex">
				<a className="forgot-password__link" href="#">
					Esqueceu sua senha ?
				</a>
			</div>
		</>
	);
}
