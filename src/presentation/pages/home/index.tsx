import React from "react";

export function Home() {
	return (
		<div className="min-h-screen flex columns-2">
			<header
				role="banner"
				className="flex flex-col items-end basis-auto grow max-w-[595px]"
			>
				<div className="relative w-[275px] flex flex-col items-stretch flex-shrink-0 basis-auto">
					<div className="fixed top-0 h-full px-3 flex flex-col justify-between">
						<div>Menu</div>
						<div>Bottom</div>
					</div>
				</div>
			</header>

			<main role="main" className="items-start flex basis-auto grow">
				Main content
			</main>
		</div>
	)
}
