export function classes(...classnames: any[]): string {
	return classnames
		.filter(Boolean)
		.map((classname) => {
			if (typeof classname === "object") {
				return Object.keys(classname)
					.filter((key) => classname[key])
					.join(" ");
			}

			return classname;
		})
		.join(" ");
}
