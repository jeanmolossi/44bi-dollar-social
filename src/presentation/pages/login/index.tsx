import React, { useState } from "react";
import { UnauthLayout } from "@/presentation/components";
import { EmailScreen } from "./screens/email-screen";
import { PasswordScreen } from "./screens/password-screen";
import "./login.css";
import { SwapComponent } from "@/presentation/helpers";

export function Login() {
	const [email, setEmail] = useState("");
	const [shouldSwap, setShouldSwap] = useState(false);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);

		setEmail(formData.get("email")! as string);
		setShouldSwap(true);
	};

	return (
		<UnauthLayout>
			<form className="flex flex-col flex-1" onSubmit={handleSubmit}>
				{SwapComponent(
					shouldSwap,
					<PasswordScreen email="teste@email.com" />,
					<EmailScreen />
				)}
			</form>
		</UnauthLayout>
	);
}
