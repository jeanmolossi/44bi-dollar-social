import { classes } from "@/presentation/helpers";
import React from "react";

interface LoadingSpinnerProps {
	className?: string;
	size?: "small" | "medium" | "large";
}

const ratioSize = new Map([
	["small", "h-5 w-5"],
	["medium", "h-6 w-6"],
	["large", "h-8 w-8"],
]);

export function LoadingSpinner({
	className = "text-twitter-500",
	size = "medium",
}: LoadingSpinnerProps) {
	return (
		<div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				className={classes(
					"animate-spin -ml-1 mr-3",
					ratioSize.get(size),
					className
				)}
			>
				<circle
					className="opacity-25"
					cx="12"
					cy="12"
					r="10"
					stroke="currentColor"
					strokeWidth="4"
				></circle>
				<path
					className="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				></path>
			</svg>
		</div>
	);
}
