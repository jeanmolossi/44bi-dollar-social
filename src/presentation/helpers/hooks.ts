import { ChangeEvent, useCallback, useState } from "react";

export function useTextInput(initialValue?: string) {
	const [state, setState] = useState(initialValue || "");

	const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setState(e.target.value);
	}, []);

	return [state, handleChange] as const;
}
