import { Separator } from "@/components/ui/separator"
import { NavLink } from "react-router"
import { ThemeButton } from "./change-theme"
import { useTheme } from "./theme-provider"

export const Navbar = () => {
	const { theme } = useTheme()
	return (
		<header className="mt-3 flex h-12 w-full flex-row items-center justify-between p-1 sm:mt-4">
			<div className="flex flex-row gap-2">
				<NavLink
					to="/"
					className={({ isActive }) =>
						`transition-all duration-300 ${theme === "dark"
							? isActive
								? "text-white"
								: "text-gray-400 hover:font-semibold hover:text-white"
							: isActive
								? "text-slate-950"
								: "text-gray-500 hover:font-semibold hover:text-slate-950"
						}`
					}
				>
					home
				</NavLink>
				<Separator orientation="vertical" />
				<NavLink
					to="/projects"
					className={({ isActive }) =>
						`transition-all duration-300 ${theme === "dark"
							? isActive
								? "text-white"
								: "text-gray-400 hover:font-semibold hover:text-white"
							: isActive
								? "text-slate-950"
								: "text-gray-500 hover:font-semibold hover:text-slate-950"
						}`
					}
				>
					projects
				</NavLink>
			</div>
			<div>
				<ThemeButton />
			</div>
		</header>
	)
}
