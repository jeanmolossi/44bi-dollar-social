import React from "react";
import { IconType } from "react-icons";
import { RiHashtag, RiHome7Fill } from 'react-icons/ri'
import { FaRegBell, FaRegEnvelope, FaRegUser } from 'react-icons/fa'
import { IoEllipsisHorizontalCircle } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import { RenderIf } from "@/presentation/helpers";
import { Button } from "@/presentation/components";
import './home.css'

export function Home() {
	return (
		<div className="min-h-screen flex columns-2">
			<header
				role="banner"
				className="flex flex-col items-end basis-auto grow max-w-[595px]"
			>
				<div className="relative w-[275px] flex flex-col items-stretch flex-shrink-0 basis-auto">
					<div className="fixed top-0 h-full px-3 flex flex-col justify-between">
						<div>
							<div className="h-14">LOGO</div>
							<div>
								<nav>

									<NavItem
										icon={RiHome7Fill}
										label="Página inicial"
										to="/home"
										hasNotification
									/>
									<NavItem
										icon={RiHashtag}
										label="Exporar"
										to="/explore"
									/>
									<NavItem
										icon={FaRegBell}
										label="Notificações"
										to="/notitications"
									/>
									<NavItem
										icon={FaRegEnvelope}
										label="Mensagens"
										to="/messages"
									/>
									<NavItem
										icon={FaRegUser}
										label="Perfil"
										to="/profile"
									/>
									<NavItem
										icon={IoEllipsisHorizontalCircle}
										label="Mais"
										to="/more"
									/>

								</nav>
							</div>

							<div className="inline-flex w-full">
								<Button variant="blue" fullWidth>Tweetar</Button>
							</div>
						</div>

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

interface NavItemProps {
	icon: IconType;
	label: string;
	to: string;
	hasNotification?: boolean;
}

function NavItem({ icon: Icon, label, to, hasNotification = false }: NavItemProps) {
	return (
		<NavLink to={to} className="nav-link group">
			<div className="flex p-3 group rounded-full max-w-full items-stretch">
				<div className="flex items-center relative">
					{RenderIf(
						hasNotification,
						<div className="absolute top-0 right-0">
							<span className="flex h-[10px] w-[10px]">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
								<span className="relative inline-flex self-center mx-auto rounded-full h-2 w-2 bg-sky-500"></span>
							</span>
						</div>
					)}

					<Icon size={26} />
				</div>
				<div className="ml-5 mr-4">
					<span className="text-xl text-inherit">{label}</span>
				</div>
			</div>
		</NavLink>
	)
}
