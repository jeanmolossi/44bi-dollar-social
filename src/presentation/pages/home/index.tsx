import React from "react";
import { IconType } from "react-icons";
import { RiHashtag, RiHome7Fill } from 'react-icons/ri'
import { FaRegBell, FaRegEnvelope, FaRegUser } from 'react-icons/fa'
import { IoEllipsisHorizontalCircle } from 'react-icons/io5'
import { FiCheck, FiMoreHorizontal } from "react-icons/fi";
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

						<div className="my-3 relative">
							<div
								aria-label="Menu da conta"
								className="p-3 flex group rounded-full transition-all duration-200 hover:bg-twitter-dark-600/20 active:bg-twitter-dark-600/40 cursor-default"
							>
								<div className="inline-block h-12 w-12">
									<img
										className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
										src="https://randomuser.me/api/portraits/men/89.jpg"
									/>
								</div>

								<div className="mx-3 flex flex-col">
									<div>
										<span className="font-semibold">John Doe</span>
									</div>
									<div>
										<span className="text-twitter-dark-600 text-sm">@JohnDoe</span>
									</div>
								</div>

								<div className="flex items-center justify-end flex-1">
									<FiMoreHorizontal size={20} />
								</div>
							</div>

							{RenderIf(
								true,
								<div className="absolute bottom-full py-4 -inset-x-5 shadow-[0_1px_4px,0_-1px_4px] shadow-gray-600 rounded-lg bg-black">
									<div
										aria-label="Menu da conta"
										className="p-3 flex group rounded-full transition-all duration-200 hover:bg-twitter-dark-600/20 active:bg-twitter-dark-600/40 cursor-default"
									>
										<div className="inline-block h-12 w-12">
											<img
												className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
												src="https://randomuser.me/api/portraits/men/89.jpg"
											/>
										</div>

										<div className="mx-3 flex flex-col">
											<div>
												<span className="font-semibold">John Doe</span>
											</div>
											<div>
												<span className="text-twitter-dark-600 text-sm">@JohnDoe</span>
											</div>
										</div>

										<div className="flex items-center justify-end flex-1">
											<FiCheck size={20} color="#0080b1" />
										</div>
									</div>

									<div className="flex flex-1 flex-col items-stretch">
										<button className="hover:bg-twitter-dark-600/20">
											<div className="m-4 text-sm text-left">Adicionar conta existente</div>
										</button>
										<button className="hover:bg-twitter-dark-600/20">
											<div className="m-4 text-sm text-left">Sair de @JohnDoe</div>
										</button>
									</div>
								</div>
							)}
						</div>
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
