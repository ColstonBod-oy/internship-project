import Image from "next/image";
import logo from "../public/logo.svg";

export default function Navbar() {
	return (
		<nav className="fixed inset-x-0 z-10">
			<div className="relative max-w-xs pt-2.5 md:pt-0 lg:pr-2 mx-auto md:max-w-6xl">
				<div className="flex justify-between font-medium md:justify-center lg:justify-end">
					<a href="#" className="flex items-center py-5 md:px-2">
						<Image src={logo} alt="Navbar logo placeholder" />
					</a>
					<div className="items-center hidden space-x-1 md:flex">
						<a
							href="#"
							className="px-3 py-5 ml-5 text-white hover:text-gray-300"
						>
							Main
						</a>
						<a href="#" className="px-3 py-5 text-white hover:text-gray-300">
							Details
						</a>
					</div>
					<div className="items-center hidden space-x-1 md:flex">
						<a
							href="#"
							className="px-3 py-5 ml-20 text-white hover:text-gray-300"
						>
							Login
						</a>
						<a
							href="#"
							className="px-3 py-2 text-white transition duration-300 bg-gray-200 bg-opacity-25 signup-link animate-pulse rounded-3xl hover:bg-opacity-50"
							onMouseEnter={() => {
								document
									.querySelector(".signup-link")
									.classList.toggle("animate-pulse");
							}}
							onMouseLeave={() => {
								document
									.querySelector(".signup-link")
									.classList.toggle("animate-pulse");
							}}
						>
							Signup
						</a>
					</div>
					{/* mobile menu button */}
					<div className="flex items-center md:hidden">
						<button
							className="px-3 py-2 text-white bg-gray-200 bg-opacity-50 animate-pulse rounded-3xl"
							onClick={() => {
								document
									.querySelector(".mobile-menu")
									.classList.toggle("hidden");
								document
									.querySelector(".mobile-menu")
									.classList.remove("animate-fadeout-to-t");
								document
									.querySelector(".mobile-menu")
									.classList.add("animate-fadein-to-b");
							}}
						>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>
				{/* mobile menu */}
				<div className="hidden mobile-menu md:hidden">
					<div className="absolute flex flex-col w-full py-6 pl-10 pr-6 bg-white rounded-md shadow-lg top-7">
						<div className="flex justify-between">
							<a href="#" className="py-0.5 hover:text-violet-500">
								Main
							</a>
							<button
								onClick={() => {
									setTimeout(() => {
										document
											.querySelector(".mobile-menu")
											.classList.toggle("hidden");
									}, 210);
									document
										.querySelector(".mobile-menu")
										.classList.remove("animate-fadein-to-b");
									document
										.querySelector(".mobile-menu")
										.classList.add("animate-fadeout-to-t");
								}}
							>
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<a href="#" className="py-0.5 hover:text-violet-500">
							Details
						</a>
						<a href="#" className="py-0.5 hover:text-violet-500">
							Login
						</a>
						<a href="#" className="py-0.5 hover:text-violet-500">
							Signup
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}