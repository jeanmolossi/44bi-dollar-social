import React, { Suspense, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { LoadingSpinner } from "@/presentation/components/loading-spinner";
import { UnauthLayout } from "@/presentation/components";
import { SwapComponent } from "@/presentation/helpers";
import { EmailScreen } from "./screens/email-screen";
import "./login.css";

const PasswordLazyScreen = React.lazy(
	() => import("./screens/password-screen")
);

function onlyOnPasswordStep(isOnPasswordStep: boolean, callback: () => void) {
	if (!isOnPasswordStep) {
		return;
	}

	return callback;
}

export function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [shouldSwap, setShouldSwap] = useState(false);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);

		if(!shouldSwap) {
			setEmail(formData.get("email")! as string);
			setShouldSwap(true);
		} else {
			if(formData.get("password") === "123456") {
				navigate('/home')
			}
		}
	};

	const xButtonAction = onlyOnPasswordStep(shouldSwap, () => {
		setShouldSwap(false);
	});

	return (
		<UnauthLayout xButtonAction={xButtonAction}>
			<form className="flex flex-col flex-1" onSubmit={handleSubmit}>
				{SwapComponent(
					shouldSwap,
					<Suspense fallback={<LoadingSpinner size="large" />}>
						<PasswordLazyScreen email={email} />
					</Suspense>,
					<EmailScreen />
				)}
			</form>
		</UnauthLayout>
	);
}
