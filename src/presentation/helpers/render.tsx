import React from "react";

/**
 * SwapComponent is a helper function to render one of two components based on a condition.
 * @param condition Condition to be evaluated to show the component
 * @param RenderWhenConditionTrue The children to be rendered when the condition is true
 * @param RenderWhenConditionFalse The children to be rendered when the condition is false
 * @return The component to be rendered
 */
export function SwapComponent(
	condition: boolean,
	RenderWhenConditionTrue: React.ReactNode,
	RenderWhenConditionFalse: React.ReactNode
) {
	return condition === true ? (
		<>{RenderWhenConditionTrue}</>
	) : (
		<>{RenderWhenConditionFalse}</>
	);
}
