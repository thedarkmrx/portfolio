import { Button } from "./ui/button"
import { useTheme } from "./theme-provider"
import { Moon, Sun } from "lucide-react"

export const ThemeButton = () => {
	const { setTheme, theme } = useTheme()
	const toggleTheme = () => {
		const nextTheme =
			theme === "dark" ? "light" : theme === "light" ? "dark" : "dark"
		setTheme(nextTheme)
	}
	return (
		<div>
			<Button
				aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
				onClick={toggleTheme}
				className={`size-8 rounded-full bg-transparent p-0 transition-colors duration-300 hover:cursor-pointer hover:bg-transparent ${theme === "dark"
						? "text-gray-400 hover:text-white"
						: "text-gray-500 hover:text-slate-950"
					} `}
			>
				{theme === "dark" ? (
					<Sun className="size-4 bg-transparent" />
				) : (
					<Moon className="size-4 bg-transparent" />
				)}
			</Button>
		</div>
	)
}
